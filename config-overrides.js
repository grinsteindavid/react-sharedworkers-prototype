module.exports = {
    webpack: function (config, env) {
        config.module.rules.push({
            test: /\.sharedworker\.(c|m)?js$/i,
            loader: "worker-loader",
            options: {
                worker: "SharedWorker",
            },
        })

        config.module.rules.push({
            test: /\.worker\.(c|m)?js$/i,
            loader: "worker-loader",
            options: {
                worker: "Worker",
            },
        })

        return config;
    }
}