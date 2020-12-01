import { v4 as uuidv4 } from 'uuid';

const broadcastChannel = new BroadcastChannel("TestWorker");

/* eslint-disable import/no-webpack-loader-syntax */
const _self: Worker = self as any;


_self.postMessage({ workerMessage: 'test', uuid: uuidv4() }) // single tab

setInterval(() => {
    broadcastChannel.postMessage({ data: 'test', uuid: uuidv4() }) // multiple tabs
}, 5000)
