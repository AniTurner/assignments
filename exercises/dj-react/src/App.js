import React from 'react'
import Music from './Music.js'


class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            color1: 'blue',
            color2: 'red',
            color3: 'lightgreen',
            color4: 'yellow',
            size1: '20px'
        }
        
    }

    handleChangeColor = () => {
        const colors = ['red', 'blue', 'lightgreen', 'yellow', 'pink', 'purple']
        const currentColor1 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor2 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor3 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor4 = colors[Math.floor(Math.random() * colors.length)]

        this.setState({
            color1: currentColor1,
            color2: currentColor2,
            color3: currentColor3,
            color4: currentColor4,
            
        
        })
        
    }

    handleChangeSize = () => {
        const sizes = ['20px', '2px', '40px', '10px']
        const currentSize = sizes[Math.floor(Math.random() * sizes.length)]
        const currentSize2 = sizes[Math.floor(Math.random() * sizes.length)]
        const currentSize3 = sizes[Math.floor(Math.random() * sizes.length)]
        const currentSize4 = sizes[Math.floor(Math.random() * sizes.length)]

        this.setState(prevState => {
            return {
                size1: currentSize,
                size2: currentSize2,
                size3: currentSize3,
                size4: currentSize4
            }

        })
    }

    handleChangeBlackWhite = () => {
        const blackWhite = ['black', 'white']
        const currentBlackWhite = blackWhite[Math.floor(Math.random() * blackWhite.length)]
        const currentBlackWhite1 = blackWhite[Math.floor(Math.random() * blackWhite.length)]
        const currentBlackWhite2 = blackWhite[Math.floor(Math.random() * blackWhite.length)]
        const currentBlackWhite3 = blackWhite[Math.floor(Math.random() * blackWhite.length)]

    
        this.setState({
            blackWhite: currentBlackWhite,
            blackWhite1: currentBlackWhite1,
            blackWhite2: currentBlackWhite2,
            blackWhite3: currentBlackWhite3,

           
        })
    }

    render() {
        const styles={
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
        }
        const boxStyles = {
            width: 200, 
            height: 200, 
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            padding: this.state.size1,
            justifyContent: 'center',
            alignItems: 'center',
            color: this.state.blackWhite,
            backgroundColor: this.state.color1
        }

        const boxStyles2 = {
            width: 200, 
            height: 200, 
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            padding: this.state.size2,
            justifyContent: 'center',
            alignItems: 'center',
            color: this.state.blackWhite3,
            backgroundColor: this.state.color2,
        }

        const boxStyles3 = {
            width: 200, 
            height: 200, 
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            padding: this.state.size3,
            justifyContent: 'center',
            alignItems: 'center',
            color: this.state.blackWhite1,
            backgroundColor: this.state.color3,
        }

        const boxStyles4 = {
            width: 200, 
            height: 200, 
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            padding: this.state.size4,
            justifyContent: 'center',
            alignItems: 'center',
            color: this.state.blackWhite2,
            backgroundColor: this.state.color4,
        }

        return (
            <div style={{backgroundColor: 'lightgrey', height: '1000px'}}>
                <div style={styles}>
                    <div style={boxStyles}>Box1</div>
                    <div style={boxStyles2}>Box2</div>
                    <div style={boxStyles3}>Box3</div>
                    <div style={boxStyles4}>Box4</div>
                </div>
                <div style={{border: '3px solid black', backgroundColor: 'black', display: 'flex', marginTop: '30px', padding: '10px'}}>
                    <button  onClick={this.handleChangeColor}>Change Color</button>
                    <button  onClick={this.handleChangeBlackWhite}>Change to Black and White</button>
                    <button  onClick={this.handleChangeSize}>Change Size</button>
                    <Music />
                </div>
            </div>
        )
    }
}





export default App