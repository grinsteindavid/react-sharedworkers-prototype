// const {
//     override,
// } = require("customize-cra");

module.exports = {
    webpack: function (config, env) {
        config.module.rules.push({
            test: /\.worker\.(c|m)?ts$/i,
            loader: 'worker-loader',
            options: {
                worker: {
                    type: 'SharedWorker',
                    options: {
                        type: 'module'
                    },
                },
            },
        })

        console.log({ rules: config.module.rules, env })

        return config;
    }
}
// module.exports = function override(config, env) {


//     return config
// }