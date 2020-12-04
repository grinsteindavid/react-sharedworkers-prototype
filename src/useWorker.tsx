import React, { useEffect, useState } from 'react';
import { TestSharedWorker } from './workers/index';

// DO NOT CREATE THESE INSTANCES INSIDE THE HOOK FUNCTION
const worker = new TestSharedWorker();
const channel = new BroadcastChannel("TestWorker");

export default function useWorker() {
    const [workerState, setWorkerState] = useState<any[]>([]);
    const [channelState, setChannelState] = useState<any[]>([]);

    function workerOnMessage(event: MessageEvent) {
        setWorkerState(prevState => [event.data, ...prevState]);
    }

    function channelOnMessage(event: MessageEvent) {
        setChannelState(prevState => [event.data, ...prevState]);
    }

    useEffect(() => {
        worker.port.addEventListener('message', workerOnMessage);

        channel.addEventListener('message', channelOnMessage);

        worker.port.start();

        const intervalID = setInterval(() => {
            worker.port.postMessage({ data: 'hello world' });
        }, 10000);

        return () => {
            clearInterval(intervalID)
            worker.port.removeEventListener('message', workerOnMessage);
            channel.removeEventListener('message', channelOnMessage);

            worker.port.close();
            channel.close();
        }
    }, [])

    return { workerState, channelState }
}

// WORKER LAODER - INLINE IMPORT
/* eslint-disable import/no-webpack-loader-syntax */
// import TestWorker from 'worker-loader!./workers/test.worker';