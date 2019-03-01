import React from 'react'


const Main = (props) => {
    return (
        <div>
            <p>Click the button to toggle the {props.theme === 'light' ? 'dark' : 'light'} theme!</p>
            <button>Click me!</button>
        </div>
    )
}

export default Main