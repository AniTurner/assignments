import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import UglyThingsProvider from './context/UglyThingsProvider.js';




ReactDOM.render(
    <UglyThingsProvider>
        <App />
    </UglyThingsProvider>,

document.getElementById('root'))