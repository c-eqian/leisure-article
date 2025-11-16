type ConvertToKUnit = (num: number | string, decimalPlaces?: number) => string;

export const formatNumber: ConvertToKUnit = (num, decimalPlaces = 2) => {
  // 类型守卫：确保输入可转换为数字
  const number = typeof num === "string" ? parseFloat(num) : num;

  if (isNaN(number)) {
    return "0";
  }

  // 绝对值小于1000时返回原始数值
  if (Math.abs(number) < 1000) {
    return number.toString();
  }

  // 转换为k单位
  const kValue = number / 1000;

  // 整数判断优化：使用Math.round避免浮点误差
  const isInteger =
    Math.abs(kValue) < 1000 &&
    Math.abs(Math.round(kValue) - kValue) < Number.EPSILON;

  if (isInteger) {
    return `${Math.round(kValue)}k`;
  }

  // 使用toLocaleString处理国际化问题
  return `${kValue.toLocaleString(undefined, {
    maximumFractionDigits: decimalPlaces,
    minimumFractionDigits: decimalPlaces,
  })}k`;
};
