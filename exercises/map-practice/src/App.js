import React from 'react'
import Names from './Names.js'
import Person from  './Person.js'

const App = () => {
    // const names = ['Susie','Susie', 'John', 'Elias']
    // const color = [{backgroundColor: 'blue'}, {backgroundColor: 'pink'}, {backgroundColor: 'green'}]
     
    const people = [
        {
            name: "Rick",
            age: 70,
            favColor: 'teal',
            friends: ['Rick', "John"]
        },
        {
            name: "morty",
            age: 13,
            favColor: 'yellow',
            friends: ["Suzie", 'Paula', 'Sam']
        },
        {
            name: 'Jerry',
            age: 54,
            favColor: 'purple',
            friends: ['Soso']
        },
        {
            name: "Birdman",
            age: 135,
            favColor: 'brown',
            friends: ['Whatever', 'morefriends']

        }
    ]

    const mappedCharacters = people.map((character, i) => 
                                                <Person 
                                                    key={i} 
                                                    name = {character.name} 
                                                    age = {character.age} 
                                                    friends = {character.friends}
                                                    favColor={character.favColor}/>)
                                                    
        
    return (
        <ul>
            {/* {names.map((name, i) => <Names style={color[Math.floor(Math.random() *color.length)]} name = {name} key={i}/>)} */}
           {mappedCharacters}
                
        </ul>
    )
}






export default App;
