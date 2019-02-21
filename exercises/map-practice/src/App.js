import React from 'react'

const App = () => {
    const names = ['Susie', 'John', 'Elias']
    
    return (
        <ul>
            {names.map(name => <li>{name}</li>)}
        </ul>
    )
}






export default App;
