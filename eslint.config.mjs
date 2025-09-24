// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import { eslintPresets, typescript } from '@eqian/eslint-config-preset';
export default withNuxt(
    eslintPresets([
        {
            // 内置相关忽略文件，同样，也可以使用全局忽略文件，规则请查阅eslint文档
            ignores: ['eslint.config.mjs', '*.d.ts'],
            name: 'ignores',
        },
            {
                name: '@eqian/eslint-ts',
                plugins: [typescript],
                rules: {
                    "@typescript-eslint/no-namespace": "off",
                    "@typescript-eslint/no-explicit-any": ["off"],
                    "@typescript-eslint/naming-convention": ['off']
                }
            }
    ],
        {
            mode: 'normal'
        }
)
)
