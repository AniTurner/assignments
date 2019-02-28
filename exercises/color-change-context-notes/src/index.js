import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import ThemeProvider from './ThemeProvider.js'


ReactDOM.render(
<ThemeProvider>
    
    <App />
</ThemeProvider>, document.getElementById('root'))