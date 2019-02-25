import React from 'react'
import Die from './Die.js'
import { ReactComponent } from '*.svg';


class DiceBox extends ReactComponent {
    constructor() {
        super()

        this.state = {
            die1: this.randomNum(),
            die2: this.randomNum(),
            die3: this.randomNum(),
            die4: this.randomNum(),
            die5: this.randomNum()
        }
    }

    randomNum = () => {
        return (Math.floor(Math.random() * 6) + 1)
    }

    handleRollingDice = () => {
        this.setState({
                die1: this.randomNum(),
                die2: this.randomNum(),
                die3: this.randomNum(),
                die4: this.randomNum(),
                die5: this.randomNum()
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRollingDice}></button>
                <Die dieNum={this.state.die1}
                     dieNum={this.state.die2}
                     dieNum={this.state.die3}
                     dieNum={this.state.die4}
                     dieNum={this.state.die5}/>

            </div>
        )
    }
}





export default App