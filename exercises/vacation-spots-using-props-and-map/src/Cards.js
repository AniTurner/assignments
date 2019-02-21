import React from 'react'
import ProtoTypes from 'prop-types';


let link = ''
let dollar = ''
let something = ''

const Cards = (props) => {

    if (props.price <= 500) {
        dollar = '$'
        
    } else if (props.price < 1000) {
        dollar = '$$'
    } else {
        dollar = '$$$'
    }

    // if (props.timeToGo === 'Winter') {
    //     something = 'black'
    // }
    

    if (props.timeToGo === 'Spring') {
        link = ('https://www.travel-in-portugal.com/sites/default/files/attractions/ponta-da-piedade.jpg')
    } else if (props.timeToGo === 'Winter') {
       link = ('https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/10/17/104778038-Sleeping_pods_in_front_of_the_ice_fall.600x400.JPG?v=1508256953')
        something = 'black'
    } else if (props.timeToGo === "Summer") {
        link =('https://travelwithjules.co.uk/wp-content/uploads/nrth-is-main-pool-and-eas.jpg')
        something = 'white'
    } else {
        link = ('https://cdn.getyourguide.com/img/tour_img-469073-148.jpg')
        something = 'white'

    }
    return (
        <div  style = {{backgroundImage: `url(${link})`}} className="background-picture">          <div style={{color: `${something}`}}>
                <h1>Place: {props.place}</h1>
                <h3>Price: {dollar} {props.price}</h3>
                <h3 >Time to go:  {props.timeToGo}</h3>
            </div>
        </div>
    )
}

Cards.protoTypes = {
    place: ProtoTypes.string.isRequired,
    price: ProtoTypes.number.isRequired,
    timeToGo: ProtoTypes.string.isRequired,
}


export default Cards