// const {
//     override,
// } = require("customize-cra");

module.exports = {
    webpack: function (config, env) {
        config.module.rules.push({
            test: /\.worker\.(c|m)?js$/i,
            loader: "worker-loader",
            options: {
                worker: "SharedWorker",
            },
        })

        console.log({ rules: config.module.rules, env })

        return config;
    }
}
// module.exports = function override(config, env) {


//     return config
// }