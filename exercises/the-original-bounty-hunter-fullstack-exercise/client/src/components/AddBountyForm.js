import React from 'react'


const AddBountyForm = props => {
    const {handleSubmit, handleChange, firstName, lastName, isAlive, bountyAmount} = props
    return (
        <form onSubmit = {handleSubmit}>
            <input  
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}/>
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}/>
            <input 
                type="checkbox"
                name='isAlive'
                value={isAlive}
                onChange={handleChange}/>
            <input
                type="number"
                name="bountyAmount"
                value={bountyAmount}
                onChange={handleChange}/>
            <button>Add Bounty</button>

        
        </form>
    )
}


export default AddBountyForm