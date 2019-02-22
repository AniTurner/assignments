import React from 'react'


class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            color1: 'blue'
        }
    }

    handleChangeColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple']
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({
            color1: currentColor
        })
    }

    render() {

        const boxStyles = {
            width: 200, 
            height: 200, 
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.color1
        }

        return (
            <div>
                <div style={boxStyles}>Box</div>
                <button onClick={this.handleChangeColor}>Change Color</button>
            </div>
        )
    }
}