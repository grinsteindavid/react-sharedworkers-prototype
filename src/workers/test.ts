import { v4 as uuidv4 } from 'uuid';

interface SharedWorkerGlobalScope {
    onconnect?: (event: MessageEvent) => void;
}

export const broadcastChannel = new BroadcastChannel("TestWorker");

export const ports = {}

const _self: SharedWorkerGlobalScope = self as any;

_self.onconnect = (event: MessageEvent) => {
    const port = event.ports[0];
    console.log({ port, uuidv4: uuidv4() })

    port.addEventListener('message', portMessage => {
        console.log({ portMessage, uuidv4: uuidv4() });
    });

    port.start();
}