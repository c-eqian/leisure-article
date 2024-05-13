module.exports = {
    apps: [
        {
            name: 'articleNuxt',
            env: {
                PORT: 13206
            },
            exec_mode: 'cluster',
            instances: 'max',
            script: './server/index.mjs'
        }
    ]
}
