import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import CityProvider from './context/CityProvider.js';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
    <BrowserRouter>
        <CityProvider>
            <App />
        </CityProvider>
    </BrowserRouter>,
 document.getElementById('root'))