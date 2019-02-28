import React, {Component} from 'react'
import {withTheme} from './ThemeProvider.js'
import './styles.css'

const App = (props) => {
    return (
    
        <div>
            <div className={`home-${props.theme}`}>
            <p>Stuff</p>
                This is the Home Page.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quasi itaque. Distinctio ipsum sint, et perferendis beatae libero in magnam minus, a non atque nulla nobis fugiat quisquam vitae? Cupiditate!</div>
            <div>
                <button onClick={props.toggleTheme}>Change Theme to {props.theme === 'light' ? 'dark': 'light'} !</button>
            </div>
            
        </div>
    )
}

export default withTheme(App)