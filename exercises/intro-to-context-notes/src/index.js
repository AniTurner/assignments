import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterProvider from './CounterProvider'


ReactDOM.render(
    <CounterProvider>
        <App />
    </CounterProvider>,
document.getElementById('root'));


