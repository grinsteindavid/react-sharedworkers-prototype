import { v4 as uuidv4 } from 'uuid';

const broadcastChannel = new BroadcastChannel("TestWorker");

let connections = 0; // count active connections

let peers = [];

self.addEventListener("connect", function (e) {

    const { ports } = e;
    const port = ports[0];

    connections++;

    const peer = {
        connectionId: uuidv4(),
        port: port
    };

    peers.push(peer);

    // SINGLE MESSAGE
    port.postMessage({
        connectionId: peer.connectionId,
        connections,
        type: 'PORT_CONNECTION'
    });

    // MULTIPLE MESSAGE
    broadcastChannel.postMessage({
        from: peer.connectionId,
        type: 'BROADCAST_CONNECTION'
    })

    port.addEventListener("message", function (e) {
        broadcastChannel.postMessage({
            from: peer.connectionId,
            data: e.data,
            type: 'PORT_MESSAGE_TO_BROADCAST'
        })
    });

    port.start();

}, false);
