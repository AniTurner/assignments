import React from 'react'
import Names from './Names.js'

const App = () => {
    const names = ['Susie','Susie', 'John', 'Elias']
    const color = [{backgroundColor: 'blue'}, {backgroundColor: 'pink'}, {backgroundColor: 'green'}]
     
    
        
    return (
        <ul>
            {names.map((name, i) => <Names style={color[Math.floor(Math.random() *color.length)]} name = {name} key={i}/>)}
           
                
        </ul>
    )
}






export default App;
