import React from 'react'

const Name = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="nameInput"  value={props.state.input} onChange={props.handleChange}></input>
                
                <button>Submit</button>

            </form>
        </div>
    )
}




export default Name