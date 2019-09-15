import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link , Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <nav className='navigation'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
      </ul>
    </nav>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/blog' component={Blog} />
  </Router>
  ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
