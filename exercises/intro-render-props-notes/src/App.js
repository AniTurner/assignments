import React from 'react'
import Toggle from './shared/Toggle.js'

const App = () => {
    return (
        <div>
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