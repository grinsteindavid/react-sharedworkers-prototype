import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';

/* eslint-disable import/no-webpack-loader-syntax */
import TestWorker from 'worker-loader!./workers/test.worker';

const worker = new TestWorker();

const channel = new BroadcastChannel("TestWorker")

channel.addEventListener('message', (ev: MessageEvent<any>) => {
  console.log({ channelOuput: ev })
})

worker.addEventListener('message', (ev: MessageEvent<any>) => {
  console.log({ workerOutput: ev })
})

channel.postMessage({ channelPostMessage: uuidv4() })




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
