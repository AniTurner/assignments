import React from 'react'
import UglyThing from './UglyThing.js'

const UglyThings = props => {
    const mappedUglyThings = props.uglythings.map(uglything => 
                                    <UglyThing
                                        {...uglything}
                                        handleDelete={props.handleDelete}
                                        handleEdit={props.handleEdit}
                                        key={uglything._id}
                                    />)
    return (
        <div>
            {mappedUglyThings}
        </div>
    )
}

export default UglyThings