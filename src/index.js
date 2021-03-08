import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// var global = require("global")
// var document = require("global/document")
// var window = require("global/window")

// const mySpecialWindowFunction = () => {
//     return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
// };

ReactDOM.hydrate(<App />, document.getElementById('root'));
registerServiceWorker();
