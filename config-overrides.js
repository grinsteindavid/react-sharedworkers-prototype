module.exports = {
    webpack: function (config, env) {
        config.module.rules.push({
            test: /\.worker\.(c|m)?js$/i,
            loader: "worker-loader",
            options: {
                worker: "SharedWorker",
            },
        })

        return config;
    }
}