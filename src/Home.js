import React from 'react';
import logo from './logo.svg';
import threePanelLayout from './threePanelLayout';

import './App.css';

function Left({

}) {
  return (
    <>
      <h3>
        Left
      </h3>      
    </>
  );
}

function Right({

}) {
  return (
    <>
      <h3>
        Right
      </h3>      
    </>
  )
}

function Home() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </>
  );
}

export default threePanelLayout(Left, Home, Right);
