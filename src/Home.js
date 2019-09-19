import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import threePanelLayout from './threePanelLayout';
import DumbTip from './DumbTip';
import SmartTip from './smartTip';

import './App.css';

function Left() {
  return (
    <>
      <h3>
        Left
      </h3>
      <ul className="list">
        <DumbTip
          content='You have some very important content. It is about a good dog. The good dog is named Oats'
          top='-28px'
          left='180px'
          position='right'
          hoverable
        >
          <li>Oats The Dog</li>
        </DumbTip>
        <SmartTip
          position='right'
          top='-28px'
          offSetLeft={78}
          hoverable
          content='You have some very important content. It is about a good dog. The good dog is named Oats on the about page'
        >
          <li className='goodboy'>Is a very good boy</li>
        </SmartTip>
      </ul>
    </>
  );
}

function Right() {
  const step     = useSelector(state => state.step),
        dispatch = useDispatch()
      ;

  return (
    <>
      <h3 onClick={() => dispatch({type: 'NEXT_STEP'})}>
        Right
      </h3>
      <ul className='list'>
        <DumbTip
          content='New Jersey Devils will win the Cup this year'
          top='-20px'
          right='195px'
          position='left'
          hoverable
        >
          <li>A Cool Feature</li>
        </DumbTip>
        <DumbTip
          content='and everything is going well, you start re-sizing the browser...and your get to the fluid width break point' 
          top='-23px'
          right='190px'
          position='left'
          hoverable
        >
          <li>A Great Feature</li>
        </DumbTip>
        <DumbTip
          content='and everything is going well, you start re-sizing the browser...and your get to the fluid width break point' 
          top='-23px'
          right='190px'
          position='left'
          hoverable
        >
          <li>A Great Feature</li>
        </DumbTip>

        <DumbTip
          content='Then you start fucking around with media queries. As you start ripping large chunks of hair out of your head'
          top='-23px'
          right='190px'
          position='left'
          hoverable
        >
          <li>A Great Feature</li>
        </DumbTip>
        <DumbTip
          content={`That happened to me. I wrote this <a href="https://medium.com/hackernoon/self-positioning-react-components-7e5d99e9349f">blog post</a>`}
          top='-28px'
          left='180px'
          position='left'
          hoverable
        >
          <li>Interactive Playground</li>
        </DumbTip>
      </ul>
    </>
  )
}

function Home() {
  const step = useSelector(state => state.step);

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
        { step }
      </header>
    </>
  );
}

export default threePanelLayout(Left, Home, Right);
