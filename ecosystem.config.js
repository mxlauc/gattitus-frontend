module.exports = {
    apps: [
        {
            name: "Gattitus Server",
            exec_mode: "cluster",
            instances: "2",
            script: "./.output/server/index.mjs"
        }
    ]
}
