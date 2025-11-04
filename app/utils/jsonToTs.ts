/**
 * JSON到TypeScript类型转换工具类（TypeScript增强版）
 * 根据JSON数据自动生成TypeScript接口定义，支持多层嵌套抽离、命名空间和可选字段检测
 *
 * 主要特性：
 * - 自动抽离嵌套对象为独立接口/类型别名
 * - 智能检测数组中对象字段不一致，自动标记可选字段
 * - 支持同一字段不同数据类型的联合类型生成
 * - 支持命名空间组织类型定义
 * - 支持带注释的接口生成
 * - 支持泛型接口和联合类型
 * - 性能优化：调试开关、避免重复生成、优化数组分析
 *
 * @example
 * ```typescript
 * // 基本用法
 * const data = { users: [{ id: 1, name: "张三", age: 25 }, { id: 2, name: "李四" }] };
 * const result = JsonToTs.generateInterface(data, "ApiResponse");
 * console.log(result.allCode);
 *
 * // 带命名空间
 * const result2 = JsonToTs.generateInterface(data, "ApiResponse", {
 *   useNamespace: true,
 *   namespace: "Api"
 * });
 *
 * // 类型别名模式
 * const result3 = JsonToTs.generateInterface(data, "ApiResponse", {
 *   useTypeAlias: true
 * });
 * ```
 */

// ==================== 类型定义 ====================

/** JSON原始值类型 */
export type JsonPrimitive = string | number | boolean | null;

/** JSON值类型（递归定义） */
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

/** JSON对象类型 */
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

/** JSON数组类型 */
export type JsonArray = JsonValue[];

/** 字段分析信息 */
export interface FieldInfo {
  /** 字段类型样本值 */
  type: JsonValue | undefined;
  /** 字段出现次数 */
  count: number;
  /** 是否为必需字段（出现在所有对象中） */
  required: boolean;
  /** 所有值样本（用于调试，生产环境可优化掉） */
  values: (JsonValue | undefined)[];
  /** 所有类型集合 */
  types: Set<string>;
  /** 是否为联合类型 */
  isUnionType?: boolean;
  /** 联合类型列表 */
  unionTypes?: string[];
}

/** 字段分析结果映射 */
export type FieldAnalysis = Record<string, FieldInfo>;

/** 生成选项配置 */
export interface GenerateOptions {
  /** 是否生成可选属性（默认false） */
  optional?: boolean;
  /** 是否生成只读属性（默认false） */
  readonly?: boolean;
  /** 是否添加export关键字（默认true） */
  export?: boolean;
  /** 是否抽离嵌套对象（默认true） */
  extractNested?: boolean;
  /** 是否使用类型别名而不是接口（默认false） */
  useTypeAlias?: boolean;
  /** 是否使用命名空间（默认false） */
  useNamespace?: boolean;
  /** 命名空间名称（默认""） */
  namespace?: string;
  /** 是否导出命名空间（默认true） */
  exportNamespace?: boolean;
  /** 是否自动检测可选字段（默认true） */
  autoOptional?: boolean;
}

/** 生成结果 */
export interface GenerateResult {
  /** 主接口代码 */
  mainInterface: string;
  /** 子接口代码列表 */
  subInterfaces: string[];
  /** 子类型代码列表 */
  subTypes: string[];
  /** 命名空间包装代码 */
  namespaceWrapper?: string;
  /** 完整代码 */
  allCode: string;
}

// ==================== 主类定义 ====================

export class JsonToTs {
  /** 存储生成的类型别名，避免重复 */
  static generatedTypes: Map<string, string> = new Map();

  /** 存储生成的接口，避免重复 */
  static generatedInterfaces: Map<string, string> = new Map();

  /** 调试开关，生产环境应设为false以提升性能 */
  static DEBUG: boolean = false;

  /**
   * 生成单个TypeScript接口
   * @param jsonData JSON数据对象
   * @param interfaceName 接口名称
   * @param options 配置选项
   * @returns 包含主接口和所有子接口的对象
   */
  static generateInterface(
    jsonData: JsonObject,
    interfaceName: string = "GeneratedInterface",
    options: GenerateOptions = {},
  ): GenerateResult {
    const {
      optional = false,
      readonly = false,
      export: exportKeyword = true,
      extractNested = true,
      useTypeAlias = false,
      useNamespace = false,
      namespace = "",
      exportNamespace = true,
      autoOptional = true,
    } = options;

    // 清空之前的生成记录，确保每次调用都是独立的
    this.generatedTypes.clear();
    this.generatedInterfaces.clear();

    if (!jsonData || typeof jsonData !== "object") {
      throw new Error("jsonData must be a valid object");
    }

    // 生成主接口
    const mainInterface = this._generateMainInterface(jsonData, interfaceName, {
      optional,
      readonly,
      export: exportKeyword,
      extractNested,
      useTypeAlias,
      useNamespace,
      namespace,
      autoOptional,
    });

    // 收集所有生成的子接口和类型
    const allInterfaces = Array.from(this.generatedInterfaces.values());
    const allTypes = Array.from(this.generatedTypes.values());

    // 生成命名空间包装
    let namespaceWrapper: string | undefined;
    if (useNamespace && namespace) {
      namespaceWrapper = this._generateNamespaceWrapper(
        namespace,
        exportNamespace,
      );
    }

    return {
      mainInterface,
      subInterfaces: allInterfaces,
      subTypes: allTypes,
      namespaceWrapper,
      allCode: this._combineAllCode(
        allInterfaces,
        allTypes,
        mainInterface,
        namespaceWrapper,
        useNamespace,
      ),
    };
  }

  /**
   * 生成主接口
   * @private
   */
  static _generateMainInterface(
    obj: JsonObject,
    interfaceName: string,
    options: GenerateOptions & { autoOptional: boolean },
  ): string {
    const {
      optional,
      readonly,
      export: exportKeyword,
      extractNested,
      useTypeAlias,
      useNamespace,
      namespace,
      autoOptional,
    } = options;

    const properties: string[] = [];
    const spaces = " ".repeat(2);
    const exportStr = exportKeyword ? "export " : "";
    const readonlyStr = readonly ? "readonly " : "";

    for (const [key, value] of Object.entries(obj)) {
      const type = this._getTypeScriptType(
        value as JsonValue,
        key,
        extractNested,
        useTypeAlias,
        useNamespace,
        namespace,
        autoOptional,
      );
      const optionalStr = optional ? "?" : "";

      properties.push(`${spaces}${readonlyStr}${key}${optionalStr}: ${type};`);
    }

    return `${exportStr}interface ${interfaceName} {\n${properties.join("\n")}\n}`;
  }

  /**
   * 获取TypeScript类型（核心方法）
   * 性能优化：避免递归调用导致的重复生成
   * @private
   */
  static _getTypeScriptType(
    value: JsonValue | undefined,
    fieldName: string = "",
    extractNested: boolean = true,
    useTypeAlias: boolean = false,
    useNamespace: boolean = false,
    namespace: string = "",
    autoOptional: boolean = true,
  ): string {
    if (value === null) {
      return "null";
    }

    if (Array.isArray(value)) {
      if (this.DEBUG) {
        console.log(
          `处理数组: fieldName=${fieldName}, value.length=${value.length}`,
        );
      }

      // 找到第一个非空且非空数组的元素作为类型参考
      const firstValidElement = value.find(
        (item) =>
          item !== null &&
          item !== undefined &&
          !(Array.isArray(item) && item.length === 0),
      );

      // 如果所有元素都为空或空数组，返回 any[]
      if (firstValidElement === undefined) {
        return "any[]";
      }

      // 性能优化：如果数组元素是对象且需要抽离，直接分析整个数组
      // 避免先递归调用 firstElementType 导致提前生成不完整的类型
      if (
        extractNested &&
        typeof firstValidElement === "object" &&
        firstValidElement !== null &&
        !Array.isArray(firstValidElement)
      ) {
        const elementTypeName = this._generateTypeName(
          fieldName,
          useTypeAlias,
          useNamespace,
          namespace,
        );
        if (this.DEBUG) {
          console.log(
            `调用 _generateSubTypeFromArray: fieldName=${fieldName}, elementTypeName=${elementTypeName}, autoOptional=${autoOptional}`,
          );
        }
        const validObjects = value.filter(
          (item) =>
            typeof item === "object" && item !== null && !Array.isArray(item),
        ) as JsonObject[];
        
        if (validObjects.length > 0) {
          this._generateSubTypeFromArray(
            validObjects,
            elementTypeName,
            useTypeAlias,
            useNamespace,
            namespace,
            autoOptional,
          );
          return `${elementTypeName}[]`;
        } else {
          // 如果没有有效对象，返回 any[]
          return "any[]";
        }
      }

      // 对于非对象数组，分析所有非空且非空数组元素的类型
      const validElements = value.filter(
        (item) =>
          item !== null &&
          item !== undefined &&
          !(Array.isArray(item) && item.length === 0),
      );

      if (validElements.length === 0) {
        return "any[]";
      }

      // 获取第一个有效元素的类型作为基准
      const firstElementType = this._getTypeScriptType(
        firstValidElement as JsonValue,
        fieldName,
        false,
        useTypeAlias,
        useNamespace,
        namespace,
        autoOptional,
      );

      if (this.DEBUG) {
        console.log(`firstElementType=${firstElementType}`);
      }

      // 检查所有有效元素是否类型一致
      const allSameType = validElements.every(
        (item) =>
          this._getTypeScriptType(
            item as JsonValue,
            fieldName,
            false,
            useTypeAlias,
            useNamespace,
            namespace,
            autoOptional,
          ) === firstElementType,
      );

      if (allSameType) {
        return `${firstElementType}[]`;
      } else {
        // 如果类型不一致，生成联合类型
        const uniqueTypes = new Set<string>();
        validElements.forEach((item) => {
          const itemType = this._getTypeScriptType(
            item as JsonValue,
            fieldName,
            false,
            useTypeAlias,
            useNamespace,
            namespace,
            autoOptional,
          );
          uniqueTypes.add(itemType);
        });
        
        const unionType = Array.from(uniqueTypes).join(" | ");
        return `(${unionType})[]`;
      }
    }

    if (typeof value === "object") {
      // 对于复杂对象，决定是否抽离
      if (extractNested) {
        const typeName = this._generateTypeName(
          fieldName,
          useTypeAlias,
          useNamespace,
          namespace,
        );
        this._generateSubType(
          value as JsonObject,
          typeName,
          useTypeAlias,
          useNamespace,
          namespace,
          autoOptional,
        );
        return typeName;
      } else {
        // 生成内联接口
        const properties = this._generateProperties(
          value as JsonObject,
          false,
          false,
          0,
        );
        return `{\n${properties}\n}`;
      }
    }

    // 基本类型映射
    const typeMap: Record<string, string> = {
      string: "string",
      number: "number",
      boolean: "boolean",
      undefined: "undefined",
    };

    return typeMap[typeof value as string] || "any";
  }

  /**
   * 从数组生成子类型（增强版：支持联合类型）
   * @private
   */
  static _generateSubTypeFromArray(
    array: JsonObject[],
    typeName: string,
    useTypeAlias: boolean = false,
    useNamespace: boolean = false,
    namespace: string = "",
    autoOptional: boolean = true,
  ): void {
    // 避免重复生成
    if (
      this.generatedInterfaces.has(typeName) ||
      this.generatedTypes.has(typeName)
    ) {
      if (this.DEBUG) {
        console.log(`跳过重复生成: ${typeName}`);
      }
      return;
    }

    // 分析数组中所有对象的字段
    const fieldAnalysis = this._analyzeArrayFields(array);

    if (this.DEBUG) {
      console.log(`=== 调试 ${typeName} ===`);
      console.log("autoOptional:", autoOptional);
      console.log("fieldAnalysis:", fieldAnalysis);
    }

    if (useTypeAlias) {
      // 生成类型别名
      const type = this._generateInlineTypeFromFieldAnalysis(
        fieldAnalysis,
        useNamespace,
        namespace,
        autoOptional,
      );
      const typeCode = `export type ${typeName} = ${type};`;
      this.generatedTypes.set(typeName, typeCode);
    } else {
      // 生成接口
      const properties: string[] = [];
      const spaces = " ".repeat(2);

      for (const [fieldName, fieldInfo] of Object.entries(fieldAnalysis)) {
        let type: string;

        // 如果是联合类型，生成联合类型
        if (fieldInfo.isUnionType && fieldInfo.unionTypes) {
          type = this._generateUnionTypeFromTypes(
            fieldInfo.unionTypes,
            fieldName,
            useNamespace,
            namespace,
          );
        } else {
          type = this._getTypeScriptType(
            fieldInfo.type as JsonValue,
            fieldName,
            true,
            useTypeAlias,
            useNamespace,
            namespace,
            autoOptional,
          );
        }

        const optionalStr = autoOptional && !fieldInfo.required ? "?" : "";
        if (this.DEBUG) {
          console.log(
            `字段 ${fieldName}: required=${fieldInfo.required}, optionalStr="${optionalStr}", type="${type}"`,
          );
        }
        properties.push(`${spaces}${fieldName}${optionalStr}: ${type};`);
      }

      const interfaceCode = `export interface ${typeName} {\n${properties.join("\n")}\n}`;
      this.generatedInterfaces.set(typeName, interfaceCode);
    }
  }

  /**
   * 分析数组中对象的字段（增强版：支持联合类型）
   * 性能优化：使用普通for循环，减少迭代器开销
   * @private
   */
  static _analyzeArrayFields(array: JsonObject[]): FieldAnalysis {
    const fieldAnalysis: FieldAnalysis = {};
    const totalObjects: number = array.length;

    // 遍历数组中的每个对象
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
        for (const [fieldName, fieldValue] of Object.entries(obj)) {
          if (!fieldAnalysis[fieldName]) {
            fieldAnalysis[fieldName] = {
              type: fieldValue as JsonValue,
              count: 0,
              required: false,
              values: [],
              types: new Set<string>(), // 新增：记录所有类型
            };
          }
          fieldAnalysis[fieldName].count++;
          fieldAnalysis[fieldName].values.push(fieldValue as JsonValue);

          // 记录字段值的类型
          const valueType = this._getValueType(fieldValue);
          fieldAnalysis[fieldName].types.add(valueType);
        }
      }
    }

    // 确定字段是否必需（出现在所有对象中）
    Object.keys(fieldAnalysis).forEach((fieldName) => {
      const info = fieldAnalysis[fieldName];
      if (info) {
        info.required = info.count === totalObjects;

        // 分析所有有效值（非null/undefined/空数组）来确定类型
        const validValues = info.values.filter(
          (val) => val !== null && val !== undefined && !(Array.isArray(val) && val.length === 0),
        );
        
        if (validValues.length > 0) {
          // 使用第一个有效值作为类型参考
          info.type = validValues[0] as JsonValue;
          
          // 如果有多种类型，需要特殊处理
          if (info.types.size > 1) {
            // 检查是否包含数组类型
            const hasArray = info.types.has("array");
            const hasNull = info.types.has("null");
            const hasUndefined = info.types.has("undefined");
            
            if (hasArray) {
              // 分析所有数组值的元素类型
              const arrayValues = info.values.filter(
                (val) => Array.isArray(val) && val.length > 0,
              ) as JsonArray[];
              
              if (arrayValues.length > 0) {
                const elementTypes = new Set<string>();
                arrayValues.forEach((arr) => {
                  arr.forEach((item) => {
                    const itemType = this._getValueType(item);
                    elementTypes.add(itemType);
                  });
                });
                
                // 生成具体的数组类型
                let arrayType = "any[]";
                if (elementTypes.size === 1) {
                  const elementType = Array.from(elementTypes)[0];
                  if (elementType === "string") arrayType = "string[]";
                  else if (elementType === "number") arrayType = "number[]";
                  else if (elementType === "boolean") arrayType = "boolean[]";
                  else if (elementType === "object") {
                    // 将所有非空数组的对象元素拍平后一起生成子类型
                    const mergedObjects = ([] as JsonObject[]).concat(
                      ...arrayValues
                        .filter((arr) => Array.isArray(arr) && arr.length > 0)
                        .map((arr) =>
                          arr.filter(
                            (item) =>
                              typeof item === "object" &&
                              item !== null &&
                              !Array.isArray(item),
                          ) as JsonObject[],
                        ),
                    );

                    if (mergedObjects.length > 0) {
                      const objectTypeName = this._generateTypeName(
                        fieldName,
                        false,
                        false,
                        "",
                      );

                      this._generateSubTypeFromArray(
                        mergedObjects,
                        objectTypeName,
                        false,
                        false,
                        "",
                        true,
                      );

                      arrayType = `${objectTypeName}[]`;
                    }
                  }
                }

                const unionTypes: string[] = [arrayType];
                if (hasNull) unionTypes.push("null");
                if (hasUndefined) unionTypes.push("undefined");

                info.isUnionType = true;
                info.unionTypes = unionTypes;
              } else {
                // 只有空数组的情况
                const unionTypes: string[] = [];
                if (hasNull) unionTypes.push("null");
                if (hasUndefined) unionTypes.push("undefined");
                // 空数组退化为 any[]（无样本），但仍保留与 null/undefined 的联合
                unionTypes.unshift("any[]");
                info.isUnionType = true;
                info.unionTypes = unionTypes;
              }
            } else {
              info.isUnionType = true;
              info.unionTypes = Array.from(info.types);
            }
          }
        } else {
          // 如果所有值都无效，使用第一个值作为类型参考
          info.type = info.values[0] as JsonValue;
        }
      }
    });

    return fieldAnalysis;
  }

  /**
   * 获取值的TypeScript类型
   * @private
   */
  static _getValueType(value: JsonValue | undefined): string {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (Array.isArray(value)) {
      if (value.length === 0) return "empty_array";
      return "array";
    }
    if (typeof value === "object") return "object";
    return typeof value;
  }

  /**
   * 从类型列表生成联合类型
   * @private
   */
  static _generateUnionTypeFromTypes(
    types: string[],
    _fieldName: string,
    _useNamespace: boolean = false,
    _namespace: string = "",
  ): string {
    const typeMap: Record<string, string> = {
      string: "string",
      number: "number",
      boolean: "boolean",
      null: "null",
      undefined: "undefined",
      array: "any[]",
      empty_array: "any[]",
      object: "object",
    };

    // 保留未知类型字面量（例如 "string[]"、自定义接口名等），不要退化为 any
    const mappedTypes = types.map((type) => (typeMap[type] ?? type));

    // 去重并排序，确保一致性
    const uniqueTypes = [...new Set(mappedTypes)].sort();

    return uniqueTypes.join(" | ");
  }

  /**
   * 生成子类型（接口或类型别名）
   * @private
   */
  static _generateSubType(
    obj: JsonObject,
    typeName: string,
    useTypeAlias: boolean = false,
    useNamespace: boolean = false,
    namespace: string = "",
    autoOptional: boolean = true,
  ): void {
    // 避免重复生成
    if (
      this.generatedInterfaces.has(typeName) ||
      this.generatedTypes.has(typeName)
    ) {
      return;
    }

    if (useTypeAlias) {
      // 生成类型别名
      const type = this._generateInlineType(obj, useNamespace, namespace);
      const typeCode = `export type ${typeName} = ${type};`;
      this.generatedTypes.set(typeName, typeCode);
    } else {
      // 生成接口
      const properties: string[] = [];
      const spaces = " ".repeat(2);

      for (const [key, value] of Object.entries(obj)) {
        const type = this._getTypeScriptType(
          value as JsonValue,
          key,
          true,
          useTypeAlias,
          useNamespace,
          namespace,
          autoOptional,
        );
        properties.push(`${spaces}${key}: ${type};`);
      }

      const interfaceCode = `export interface ${typeName} {\n${properties.join("\n")}\n}`;
      this.generatedInterfaces.set(typeName, interfaceCode);
    }
  }

  /**
   * 从字段分析生成内联类型（增强版：支持联合类型）
   * @private
   */
  static _generateInlineTypeFromFieldAnalysis(
    fieldAnalysis: FieldAnalysis,
    useNamespace: boolean = false,
    namespace: string = "",
    autoOptional: boolean = true,
  ): string {
    const properties: string[] = [];

    if (this.DEBUG) {
      console.log("=== _generateInlineTypeFromFieldAnalysis 调试 ===");
      console.log("autoOptional:", autoOptional);
      console.log("fieldAnalysis:", fieldAnalysis);
    }

    for (const [fieldName, fieldInfo] of Object.entries(fieldAnalysis)) {
      let type: string;

      // 如果是联合类型，生成联合类型
      if (fieldInfo.isUnionType && fieldInfo.unionTypes) {
        type = this._generateUnionTypeFromTypes(
          fieldInfo.unionTypes,
          fieldName,
          useNamespace,
          namespace,
        );
      } else {
        type = this._getTypeScriptType(
          fieldInfo.type as JsonValue,
          fieldName,
          true,
          false,
          useNamespace,
          namespace,
          autoOptional,
        );
      }

      const optionalStr = autoOptional && !fieldInfo.required ? "?" : "";
      if (this.DEBUG) {
        console.log(
          `字段 ${fieldName}: required=${fieldInfo.required}, optionalStr="${optionalStr}", type="${type}"`,
        );
      }
      properties.push(`${fieldName}${optionalStr}: ${type}`);
    }

    return `{\n  ${properties.join(";\n  ")};\n}`;
  }

  /**
   * 生成内联类型
   * @private
   */
  static _generateInlineType(
    obj: JsonObject,
    useNamespace: boolean = false,
    namespace: string = "",
  ): string {
    const properties: string[] = [];

    for (const [key, value] of Object.entries(obj)) {
      const type = this._getTypeScriptType(
        value as JsonValue,
        key,
        true,
        false,
        useNamespace,
        namespace,
        true,
      );
      properties.push(`${key}: ${type}`);
    }

    return `{\n  ${properties.join(";\n  ")};\n}`;
  }

  /**
   * 生成类型名称
   * @private
   */
  static _generateTypeName(
    fieldName: string,
    useTypeAlias: boolean = false,
    useNamespace: boolean = false,
    namespace: string = "",
  ): string {
    if (!fieldName) {
      return useTypeAlias ? "GeneratedType" : "IGeneratedInterface";
    }

    // 将字段名转换为PascalCase（大驼峰），处理下划线和连字符
    const pascalCase = this._toPascalCase(fieldName);

    let typeName: string;
    if (useTypeAlias) {
      typeName = `${pascalCase}Type`;
    } else {
      typeName = `I${pascalCase}`;
    }

    // 如果使用命名空间，添加命名空间前缀
    if (useNamespace && namespace) {
      return `${namespace}.${typeName}`;
    }

    return typeName;
  }

  /**
   * 将字符串转换为PascalCase（大驼峰）格式
   * @private
   */
  static _toPascalCase(str: string): string {
    if (!str) return "";

    // 去掉开头和结尾的下划线、连字符
    const trimmed = str.replace(/^[_\-\s]+|[_\-\s]+$/g, "");

    // 处理下划线、连字符和空格分隔的字符串
    return trimmed
      .split(/[_\-\s]+/) // 按下滑线、连字符、空格分割
      .filter((word) => word.length > 0) // 过滤空字符串
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // 首字母大写，其余小写
      .join(""); // 连接成PascalCase
  }

  /**
   * 生成命名空间包装
   * @private
   */
  static _generateNamespaceWrapper(
    namespace: string,
    exportNamespace: boolean = true,
  ): string {
    const exportStr = exportNamespace ? "export " : "";
    return `${exportStr}namespace ${namespace} {\n\n}`;
  }

  /**
   * 组合所有代码
   * @private
   */
  static _combineAllCode(
    allInterfaces: string[],
    allTypes: string[],
    mainInterface: string,
    namespaceWrapper: string | undefined,
    useNamespace: boolean,
  ): string {
    if (useNamespace && namespaceWrapper) {
      // 使用命名空间模式
      const allSubTypes = [...allInterfaces, ...allTypes];
      const subTypesCode = allSubTypes.join("\n\n");
      return `${subTypesCode}\n\n${mainInterface}`;
    } else {
      // 普通模式
      return [...allInterfaces, ...allTypes, mainInterface].join("\n\n");
    }
  }

  /**
   * 生成接口属性
   * @private
   */
  static _generateProperties(
    obj: JsonObject,
    optional: boolean = false,
    readonly: boolean = false,
    indent: number = 2,
  ): string {
    const properties: string[] = [];
    const spaces = " ".repeat(indent);

    for (const [key, value] of Object.entries(obj)) {
      const type = this._getTypeScriptType(
        value as JsonValue,
        key,
        true,
        false,
        false,
        "",
        true,
      );
      const optionalStr = optional ? "?" : "";
      const readonlyStr = readonly ? "readonly " : "";

      properties.push(`${spaces}${readonlyStr}${key}${optionalStr}: ${type};`);
    }

    return properties.join("\n");
  }

  // ==================== 公共API方法 ====================

  /**
   * 批量生成多个接口
   * @param jsonDataMap 键值对对象，key为接口名，value为JSON数据
   * @param options 配置选项
   * @returns 包含所有接口和子接口的对象
   */
  static generateMultipleInterfaces(
    jsonDataMap: Record<string, JsonObject>,
    options: GenerateOptions = {},
  ): { results: GenerateResult[]; allCode: string } {
    const allResults: GenerateResult[] = [];
    let allCode = "";

    for (const [interfaceName, jsonData] of Object.entries(jsonDataMap)) {
      try {
        const result = this.generateInterface(
          jsonData as JsonObject,
          interfaceName,
          options,
        );
        allResults.push(result);
        allCode += `${result.allCode}\n\n`;
      } catch (error) {
        console.warn(
          `Failed to generate interface for ${interfaceName}:`,
          (error as Error).message,
        );
      }
    }

    return {
      results: allResults,
      allCode: allCode.trim(),
    };
  }

  /**
   * 从JSON字符串生成TypeScript接口
   * @param jsonString JSON字符串
   * @param interfaceName 接口名称
   * @param options 配置选项
   * @returns 包含主接口和所有子接口的对象
   */
  static generateFromString(
    jsonString: string,
    interfaceName: string = "GeneratedInterface",
    options: GenerateOptions = {},
  ): GenerateResult {
    try {
      const jsonData = JSON.parse(jsonString);
      return this.generateInterface(
        jsonData as JsonObject,
        interfaceName,
        options,
      );
    } catch (error) {
      throw new Error(`Invalid JSON string: ${(error as Error).message}`);
    }
  }

  /**
   * 生成带注释的接口
   * @param jsonData JSON数据对象
   * @param interfaceName 接口名称
   * @param comments 注释映射对象
   * @param options 配置选项
   * @returns 包含主接口和所有子接口的对象
   */
  static generateWithComments(
    jsonData: JsonObject,
    interfaceName: string = "GeneratedInterface",
    comments: Record<string, string> = {},
    options: GenerateOptions = {},
  ): GenerateResult {
    const {
      optional = false,
      readonly = false,
      export: exportKeyword = true,
      extractNested = true,
      useTypeAlias = false,
      useNamespace = false,
      namespace = "",
      exportNamespace = true,
      autoOptional = true,
    } = options;

    // 清空之前的生成记录
    this.generatedTypes.clear();
    this.generatedInterfaces.clear();

    if (!jsonData || typeof jsonData !== "object") {
      throw new Error("jsonData must be a valid object");
    }

    // 生成主接口（带注释）
    const mainInterface = this._generateMainInterfaceWithComments(
      jsonData,
      interfaceName,
      comments,
      {
        optional,
        readonly,
        export: exportKeyword,
        extractNested,
        useTypeAlias,
        useNamespace,
        namespace,
        autoOptional,
      },
    );

    // 收集所有生成的子接口和类型
    const allInterfaces = Array.from(this.generatedInterfaces.values());
    const allTypes = Array.from(this.generatedTypes.values());

    // 生成命名空间包装
    let namespaceWrapper: string | undefined;
    if (useNamespace && namespace) {
      namespaceWrapper = this._generateNamespaceWrapper(
        namespace,
        exportNamespace,
      );
    }

    return {
      mainInterface,
      subInterfaces: allInterfaces,
      subTypes: allTypes,
      namespaceWrapper,
      allCode: this._combineAllCode(
        allInterfaces,
        allTypes,
        mainInterface,
        namespaceWrapper,
        useNamespace,
      ),
    };
  }

  /**
   * 生成带注释的主接口
   * @private
   */
  static _generateMainInterfaceWithComments(
    obj: JsonObject,
    interfaceName: string,
    comments: Record<string, string>,
    options: GenerateOptions & { autoOptional: boolean },
  ): string {
    const {
      optional,
      readonly,
      export: exportKeyword,
      extractNested,
      useTypeAlias,
      useNamespace,
      namespace,
      autoOptional,
    } = options;

    const properties: string[] = [];
    const spaces = " ".repeat(2);
    const exportStr = exportKeyword ? "export " : "";
    const readonlyStr = readonly ? "readonly " : "";

    for (const [key, value] of Object.entries(obj)) {
      const type = this._getTypeScriptType(
        value as JsonValue,
        key,
        extractNested,
        useTypeAlias,
        useNamespace,
        namespace,
        autoOptional,
      );
      const optionalStr = optional ? "?" : "";
      const comment = comments[key] ? `  /** ${comments[key]} */\n` : "";

      properties.push(
        `${comment}${spaces}${readonlyStr}${key}${optionalStr}: ${type};`,
      );
    }

    return `${exportStr}interface ${interfaceName} {\n${properties.join("\n")}\n}`;
  }

  /**
   * 生成类型别名
   * @param jsonData JSON数据对象
   * @param typeName 类型名称
   * @param options 配置选项
   * @returns 包含主类型和所有子类型的对象
   */
  static generateTypeAlias(
    jsonData: JsonObject,
    typeName: string = "GeneratedType",
    options: GenerateOptions = {},
  ): GenerateResult {
    return this.generateInterface(jsonData, typeName, {
      ...options,
      useTypeAlias: true,
    });
  }

  /**
   * 生成枚举类型
   * @param values 枚举值数组
   * @param enumName 枚举名称
   * @param options 配置选项
   * @returns 生成的TypeScript枚举字符串
   */
  static generateEnum(
    values: Array<string | number>,
    enumName: string = "GeneratedEnum",
    options: { export?: boolean } = {},
  ): string {
    const { export: exportKeyword = true } = options;
    const exportStr = exportKeyword ? "export " : "";

    if (!Array.isArray(values)) {
      throw new Error("values must be an array");
    }

    const enumItems = values
      .map((value, index) => {
        if (typeof value === "string") {
          return `  ${value} = "${value}"`;
        } else if (typeof value === "number") {
          return `  ${value} = ${value}`;
        } else {
          return `  Item${index} = "${value}"`;
        }
      })
      .join(",\n");

    return `${exportStr}enum ${enumName} {\n${enumItems}\n}`;
  }

  /**
   * 生成联合类型
   * @param types 类型数组
   * @param typeName 类型名称
   * @param options 配置选项
   * @returns 生成的TypeScript联合类型字符串
   */
  static generateUnionType(
    types: string[],
    typeName: string = "GeneratedUnion",
    options: { export?: boolean } = {},
  ): string {
    const { export: exportKeyword = true } = options;
    const exportStr = exportKeyword ? "export " : "";

    if (!Array.isArray(types) || types.length === 0) {
      throw new Error("types must be a non-empty array");
    }

    const unionTypes = types
      .map((type) => (typeof type === "string" ? `"${type}"` : type))
      .join(" | ");

    return `${exportStr}type ${typeName} = ${unionTypes};`;
  }

  /**
   * 生成泛型接口
   * @param jsonData JSON数据对象
   * @param interfaceName 接口名称
   * @param genericParams 泛型参数数组
   * @param options 配置选项
   * @returns 包含主接口和所有子接口的对象
   */
  static generateGenericInterface(
    jsonData: JsonObject,
    interfaceName: string = "GeneratedInterface",
    genericParams: string[] = [],
    options: GenerateOptions = {},
  ): GenerateResult {
    const {
      optional = false,
      readonly = false,
      export: exportKeyword = true,
      extractNested = true,
      useTypeAlias = false,
      useNamespace = false,
      namespace = "",
      exportNamespace = true,
      autoOptional = true,
    } = options;

    // 清空之前的生成记录
    this.generatedTypes.clear();
    this.generatedInterfaces.clear();

    if (!jsonData || typeof jsonData !== "object") {
      throw new Error("jsonData must be a valid object");
    }

    // 生成主接口（泛型）
    const mainInterface = this._generateMainGenericInterface(
      jsonData,
      interfaceName,
      genericParams,
      {
        optional,
        readonly,
        export: exportKeyword,
        extractNested,
        useTypeAlias,
        useNamespace,
        namespace,
        autoOptional,
      },
    );

    // 收集所有生成的子接口和类型
    const allInterfaces = Array.from(this.generatedInterfaces.values());
    const allTypes = Array.from(this.generatedTypes.values());

    // 生成命名空间包装
    let namespaceWrapper: string | undefined;
    if (useNamespace && namespace) {
      namespaceWrapper = this._generateNamespaceWrapper(
        namespace,
        exportNamespace,
      );
    }

    return {
      mainInterface,
      subInterfaces: allInterfaces,
      subTypes: allTypes,
      namespaceWrapper,
      allCode: this._combineAllCode(
        allInterfaces,
        allTypes,
        mainInterface,
        namespaceWrapper,
        useNamespace,
      ),
    };
  }

  /**
   * 生成主泛型接口
   * @private
   */
  static _generateMainGenericInterface(
    obj: JsonObject,
    interfaceName: string,
    genericParams: string[],
    options: GenerateOptions & { autoOptional: boolean },
  ): string {
    const {
      optional,
      readonly,
      export: exportKeyword,
      extractNested,
      useTypeAlias,
      useNamespace,
      namespace,
      autoOptional,
    } = options;

    const properties: string[] = [];
    const spaces = " ".repeat(2);
    const exportStr = exportKeyword ? "export " : "";
    const readonlyStr = readonly ? "readonly " : "";

    for (const [key, value] of Object.entries(obj)) {
      const type = this._getTypeScriptType(
        value as JsonValue,
        key,
        extractNested,
        useTypeAlias,
        useNamespace,
        namespace,
        autoOptional,
      );
      const optionalStr = optional ? "?" : "";

      properties.push(`${spaces}${readonlyStr}${key}${optionalStr}: ${type};`);
    }

    const genericStr =
      genericParams.length > 0 ? `<${genericParams.join(", ")}>` : "";

    return `${exportStr}interface ${interfaceName}${genericStr} {\n${properties.join("\n")}\n}`;
  }

  /**
   * 格式化生成的代码
   * @param code 生成的TypeScript代码
   * @param options 格式化选项
   * @returns 格式化后的代码
   */
  static formatCode(
    code: string,
    options: { indent?: number; semicolon?: boolean } = {},
  ): string {
    const { indent = 2, semicolon = true } = options;

    let formatted = code;

    // 统一缩进
    const lines = formatted.split("\n");
    const formattedLines = lines.map((line) => {
      if (line.trim() === "") return "";
      const spaces = " ".repeat(indent);
      return spaces + line.trim();
    });

    formatted = formattedLines.join("\n");

    // 处理分号
    if (!semicolon) {
      formatted = formatted.replace(/;/g, "");
    }

    return formatted;
  }
}
