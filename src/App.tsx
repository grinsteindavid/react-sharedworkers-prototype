import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';

import { wrap } from 'comlink';

/* eslint-disable import/no-webpack-loader-syntax */
import TestWorker from 'worker-loader!./workers/test';
import { Obj } from './workers/test'

const channel = new BroadcastChannel("TestWorker")

channel.addEventListener('message', (ev: MessageEvent<any>) => {
  console.log({ ev })
})

async function init() {
  const worker = new TestWorker();
  const testworker = wrap<Obj>(worker);
  await testworker.inc();
  const data = await testworker.counter
  const id = await testworker.id

  console.log({ data, id })
}
init();

// const id = uuidv4();

// const testWorker = new SharedWorker('../workers/test.ts', { name: 'test-worker', type: 'module' });

// const data = new TestWorker();

// console.log({ TestWorker, data })

// (TestWorker as unknown as SharedWorker).port.start();

// testworker()

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
