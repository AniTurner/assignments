import React from 'react'
import Badge from './Badge'

const Badges = (props) => {
    const mappedBadges = props.badgeCollection.map((
        key,
        firstNameInput,
        phoneInput,
        lastNameInput, 
        placeOfBirthInput,
        favFoodInput,
        emailInput,
        ) => 
        <Badge 
            key={key}
            firstNameInput={firstNameInput}
            lastNameInput={lastNameInput}
            phoneInput={phoneInput}
            placeOfBirthInput={placeOfBirthInput}
            favFoodInput={favFoodInput}
            emailInput={emailInput}
             />)
        
    return (
        <div>
            {mappedBadges}    
        </div>
    )
}



export default Badges