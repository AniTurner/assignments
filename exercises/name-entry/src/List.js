import React from 'react'
import Name from './Name.js'
const List = props => {
    const mappedNames = this.state.names.map((name, i) =>  <li key={i}>{name}</li>)

    return (

        <ol>
            {mappedNames}
        </ol>
    )
}



export default List