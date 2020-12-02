import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';
import { TestWorker } from './workers/index'

const worker: SharedWorker = new TestWorker();
worker.port.addEventListener('message', (event) => {
  console.log(event)
});

worker.port.start()

console.log({ port: worker.port })

/* eslint-disable import/no-webpack-loader-syntax */
// import TestWorker from 'worker-loader!./workers/test.worker';

// import TestWorker from './workers/test.worker';

// const channel = new BroadcastChannel("TestWorker")

// channel.addEventListener('message', (ev) => {
//   console.log({ ev })
// })



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
