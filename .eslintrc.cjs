module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: [],
    rules: {},
    overrides: [
        {
            files: [
                '**/pages/**/*.{js,ts,vue}',
                '**/layouts/**/*.{js,ts,vue}',
                '**/app.{js,ts,vue}',
                '**/error.{js,ts,vue}'
            ],
            rules: {
                'vue/multi-word-component-names': 'off',
                /**
                 * 对未使用的参数使用“_”进行标识，防止某些情况下出现警告
                 */
                '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '_', varsIgnorePattern: '_'}],
                'semi': ["error", "always"]
            }
        }
    ]
}
