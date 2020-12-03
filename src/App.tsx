import React from 'react';
import './App.css';
import useWorker from './useWorker';


function App() {
  const { channelState, workerState } = useWorker()


  return (
    <div className="App">
      <header className="App-header">
        <h1>Worker State</h1>
        <ul style={{ minHeight: 400, maxHeight: 400, overflow: 'scroll' }}>
          {workerState.map((item, itemIndex) => {

            return (
              <li key={itemIndex}>{JSON.stringify(item)}</li>
            )
          })}
        </ul>

        <h1>Channel State</h1>
        <ul style={{ minHeight: 400, maxHeight: 400, overflow: 'scroll' }}>
          {channelState.map((item, itemIndex) => {

            return (
              <li key={itemIndex}>{JSON.stringify(item)}</li>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
