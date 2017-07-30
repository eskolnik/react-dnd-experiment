import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import { observe } from './Game'


observe(knightPosition => {
  ReactDOM.render(
    <App knightPosition={knightPosition}/>,
    document.getElementById('root')
  );
})


registerServiceWorker()
