import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from './logo.svg';
import './App.css';

import { wrap } from 'comlink';

const testworker = wrap(new Worker("../workers/test.js"));

/* eslint-disable import/no-webpack-loader-syntax */
// import TestWorker from 'worker-loader!./workers/test';

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
