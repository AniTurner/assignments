import React from 'react'
import Badge from './Badge.js'

const Badges = (props) => {
    const mappedBadges = props.badgeCollection.map((item,key) => 
        
        <Badge 
            key={key}
            firstNameInput={item.firstNameInput}
            lastNameInput={item.lastNameInput}            
            emailInput={item.emailInput}
            placeOfBirthInput={item.placeOfBirthInput}
            phoneInput={item.phoneInput}
            favFoodInput={item.favFoodInput}
            aboutYouInput={item.aboutYouInput}
            
             />
    )
        
    return (
        <div className='badge-container'>
            {mappedBadges}    
        </div>
    )
}



export default Badges