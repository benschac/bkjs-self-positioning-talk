import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link , Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import * as serviceWorker from './serviceWorker';

const tutorialState = { step: 0, isComplete: false };

function tutorialReducer(state=tutorialState, action) {
  switch(action.type) {
    case 'NEXT_STEP':
      console.log('next step');
      return { ...state, step: state.step + 1 };
      console.log('previous step');
    case 'PREVIOUS_STEP':
      return { ...state, step: state.step - 1 };
    case 'COMPLETE_TUTORIAL':
        return { ...state, isComplete: true };
    default: {
      return { ...state }
    }
  }
}


ReactDOM.render(
  <Provider store={createStore(tutorialReducer)}>
    <Router>
      <nav className='navigation'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
      </nav>
      <Route exact path='/' derp="hello" component={Home} />
      <Route path='/about' component={About} />
      <Route path='/blog' component={Blog} />
    </Router>
  </Provider>
  ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
