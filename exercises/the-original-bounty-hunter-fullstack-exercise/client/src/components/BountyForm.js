import React from 'react'


const AddBountyForm = props => {
    const {handleSubmit, handleChange, firstName, lastName, isAlive, bountyAmount, species} = props
    return (
        <form onSubmit = {handleSubmit}>
            <input  
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"/>
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                placeholder="Last Name"/>
            <input 
                type="checkbox"
                name='isAlive'
                value={isAlive}
                onChange={handleChange}
                placeholder="Is this person alive?"/>
            <input
                type="number"
                name="bountyAmount"
                value={bountyAmount}
                onChange={handleChange}
                placeholder="Enter bounty amount..."/>
            <select
                type="select"
                name="species"
                value={species}
                onChange={handleChange}
                placeholder="Select the species"/>
            <button>Add Bounty</button>

        
        </form>
    )
}


export default AddBountyForm