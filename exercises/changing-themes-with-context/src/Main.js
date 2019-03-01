import React from 'react'
import {withTheme} from './ThemeProvider.js'


const Main = (props) => {
    return (
        <div>
            <p>Click the button to toggle the {props.theme === 'light' ? 'dark' : 'light'} theme!</p>
            <button onClick={props.toggleTheme}>Click me!</button>
        </div>
    )
}

export default withTheme(Main)