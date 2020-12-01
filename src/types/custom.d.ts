declare module "worker-loader!*" {
    class WebpackWorker extends SharedWorker {
        constructor();
    }

    export default WebpackWorker;
}