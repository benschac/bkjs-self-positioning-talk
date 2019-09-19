import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';
import twoThirdsLeft from "./twoThirdsLeft";
import Oates from './Oates.jpeg';

function Right() {
  const step = useSelector(state => state.step);
  return (
    <>
      <h3>
        Right
      </h3>
      {step}
    </>
  );
}


function About() {
  return (
    <>
      <header className="App-header">
        <img className="doggo-full-panel" src={Oates} alt="logo" />
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

export default twoThirdsLeft(About, Right);
