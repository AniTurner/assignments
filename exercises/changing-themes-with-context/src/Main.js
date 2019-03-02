import React from 'react'
import {withTheme} from './ThemeProvider.js'


const Main = (props) => {
    return (
            <div className='main-container'>
                <div>
                    <p>Click the button to toggle the {props.theme === 'nice' ? 'dark' : 'nice'} theme!</p>
                    <button onClick={props.toggleTheme}>Click me!</button>
                </div>
            </div>
      
    )
}

export default withTheme(Main)