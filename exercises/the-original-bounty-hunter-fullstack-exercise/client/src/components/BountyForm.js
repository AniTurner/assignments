import React from 'react'


const BountyForm = props => {
    const {handleSubmit, handleChange, firstName, lastName, isAlive, bountyAmount, species, sideOfTheForce, btnText} = props
    return (
        <form onSubmit = {handleSubmit}>
            <input  
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
                required/>
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
                onChange={handleChange}/>
                <label>Alive...?</label>
            <input
                type="number"
                name="bountyAmount"
                value={bountyAmount}
                onChange={handleChange}
                placeholder="Enter bounty amount..."/>
            <select
                name="species"
                onChange={handleChange}
                placeholder="Select the species">
                <option>{species}</option>
            </select>
            
            <label>
            <input
                type="radio"
                name="sideOfTheForce"
                value="Light Side"
                checked= {sideOfTheForce === "Light Side"}
                onChange={handleChange}
            />
            Light Side
            </label>

            <label>
            <input
                type="radio"
                name="sideOfTheForce"
                value="Dark Side"
                checked= {sideOfTheForce === "Dark Side"}
                onChange={handleChange}
            />
            Dark Side
            </label>
            <button>{btnText}</button>

        </form>
    )
}


export default BountyForm