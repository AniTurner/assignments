import React from 'react'
import Toggle from './shared/Toggle.js'

const App = () => {
    return (
        <div> ///you can use this toggle in ugly things assignments to make menu bar go up and down
             <Toggle render={({isToggled, toggler}) =>
                <>
                    <h1>The light is {isToggled ? "On" : "Off"}</h1>
                    <button onClick={toggler}> Turn {isToggled ? "Off" : "On"} light</button>
                </>
             }/>
        </div>
    )
}

export default App