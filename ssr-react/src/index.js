import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const initialData = window.__INITIAL_DATA__;
ReactDom.hydrate(<App initialPage={initialData}/>, document.getElementById('root'));