import { v4 as uuidv4 } from 'uuid';

var connections = 0; // count active connections

var peers = [];

self.addEventListener("connect", function (e) {

    var ports = e.ports;
    var port = ports[0];

    connections++;

    peers.push({
        connectionId: connections,
        port: port
    });

    port.postMessage({
        connectionId: connections,
        type: 'CONNECTION'
    });

    port.addEventListener("message", function (e) {

        peers.filter(function (peer) {
            return peer.connectionId !== e.data.port;
        }).forEach(function (peer) {
            peer.port.postMessage(e.data);
        });

    });

    port.start();

}, false);

// interface SharedWorkerGlobalScope extends SharedWorker {
//     onconnect?: (event: MessageEvent) => void;
// }

// export const broadcastChannel = new BroadcastChannel("TestWorker");

// export const ports = {}

// onconnect = (event) => {
//     const port = event.ports[0];
//     console.log({ port, uuidv4: uuidv4() })

//     port.addEventListener('message', portMessage => {
//         console.log({ portMessage, uuidv4: uuidv4() });
//     });

//     port.start();
// }

// export default this

/* eslint-disable import/no-webpack-loader-syntax */
// const _self: SharedWorker = self as any;

// self.postMessage({ datA: 'ok' })

// _self.addEventListener()

// import { expose } from 'comlink';


// function takeALongTimeToDoSomething() {
//     console.log('hello world')
// }

// export default expose({ takeALongTimeToDoSomething });

// import { v4 as uuidv4 } from 'uuid';
// import * as Comlink from 'comlink';

// const id = uuidv4();

// const obj = {
//     channel: new BroadcastChannel("TestWorker"),
//     counter: 0,
//     id,
//     inc() {
//         this.counter++;
//         this.channel.postMessage(this.counter)
//     }
// };

// Comlink.expose(obj);

// export type Obj = typeof obj;
