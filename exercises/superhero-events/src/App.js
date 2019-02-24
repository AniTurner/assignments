import React from 'react'
import data from './superHeroes.json'
import Superhero from './Superhero.js'
import './styles.css'



class App extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        const superHeroes = data.superHeroes.map((hero, key) =>
            <Superhero 
                name={hero.name}
                show={hero.show}
                onClick= {() => {
                    alert(hero.catchPhrase)
                }}
                imageName={hero.imageName}
                key={key}/>
                )
    
    
    return (
        <div>
            <h1>Superheroes</h1>
            <p>Click on the image to see the Superheroes catchphrase</p>
            <div>{superHeroes}</div>
        </div>
        )
    }
}



export default App