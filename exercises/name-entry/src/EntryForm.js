import React from 'react'

const EntryForm = (props) => {
    return (
        
        <div>
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text" 
                    name="nameInput" 
                    value={props.nameInput} 
                    onChange={props.handleChange}/>
               
                <button>Submit</button>

            </form>
        </div>
    )
}




export default EntryForm