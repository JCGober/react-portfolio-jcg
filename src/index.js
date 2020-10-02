import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bio from './bio';
import Navbar from './navbar'
import Contact from './contact'
import Portfolio from './portfolio-work'
import Footer from './footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Bio />
    <Contact />
    <Portfolio />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
