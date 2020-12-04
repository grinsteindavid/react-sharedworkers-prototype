import { v4 as uuidv4 } from 'uuid';

const broadcastChannel = new BroadcastChannel("TestWorker");

let connectionsCounter = 0;

let peers = [];

self.addEventListener("connect", function (e) {

    const { ports } = e;
    const port = ports[0];

    connectionsCounter++;

    const peer = {
        connectionId: uuidv4(),
        port: port
    };

    peers.push(peer);

    port.postMessage({
        connectionId: peer.connectionId,
        connectionsCounter,
        type: 'PORT_CONNECTION'
    });

    broadcastChannel.postMessage({
        from: peer.connectionId,
        type: 'BROADCAST_CONNECTION'
    });

    port.addEventListener("message", function (e) {
        broadcastChannel.postMessage({
            from: peer.connectionId,
            data: e.data,
            type: 'PORT_MESSAGE_TO_BROADCAST'
        })
    });

    port.start();

}, false);
