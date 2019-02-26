import React from 'react'

const Badge = (props) => {
    return (
        <div className='badge'>
            <div className='header'></div>
            <div className='row'>
                <h1>{props.firstNameInput + " " + props.lastNameInput}</h1>
            </div>
            <div className='row'>
                <div><p>Phone: {props.phoneInput}</p></div>
                <div><p>Place of Birth: {props.placeOfBirthInput}</p></div>
            </div>
            <div className='row'>
                <div><p>Favorite Food: {props.favFoodInput}</p></div>
                <div><p>Email: {props.emailInput}</p></div>
            </div>
            <div className='row'>
                <p>{props.aboutYouInput}</p>
            </div>
            <div className='footer'></div>
        </div>
    )

}



export default Badge