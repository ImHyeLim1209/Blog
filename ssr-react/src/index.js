import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.hydrate(<App initialPage="home"/>, document.getElementById('root'));