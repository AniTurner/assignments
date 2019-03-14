import React from 'react'


const AddBountyForm = props => {
    const {handleSubmit, handleChange, firstName, lastName, isGood} = props
    return (
        <form onSubmit = {handleSubmit}>
            <input  
                type='text'
                name='firstName'
                value={firstName}
                onChange={handleChange}/>
            <input
                type='text'
                name='lastName'
                value={lastName}
                onChange={handleChange}/>
            <input 
                type="checkbox"
                name='isAlive'
                value={isAlive}
                onChange={handleChange}/>
            <button>Add Bounty</button>

        
        </form>
    )
}


export default AddBountyForm