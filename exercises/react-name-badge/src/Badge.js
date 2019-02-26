import React from 'react'

const Badge = (props) => {
    return (
        <div>
            <div>Name: {props.firstNameInput + " " + props.lastNameInput}</div>
            <div>Phone: {props.phoneInput}</div>
            <div>Place of birth: {props.placeOfBirthInput}</div>
            <div>Favorite Food: {props.favFoodInput}</div>
            <div>Email: {props.emailInput}</div>
            <div>{props.aboutYouInput}</div>
        </div>
    )

}



export default Badge