import React from 'react'
import DemoCarousel from '../transitions/DemoCarousel.js'

const About = () => {
    return (
        <div>
            <h1 className='about-h1'>About Us</h1>
            <div className='about-container'>
                <h1>Our mission is to ensure that nobody has a bad meal</h1>
                <h3>We do this by:</h3>
                <span>Helping people discover great places around them.</span>
                <p> Our team gathers information from every restaurant on a regular basis to ensure our data is fresh. Our vast community of food lovers share their reviews and photos, so you have all that you need to make an informed choice.</p>
                <span>Building amazing experiences around dining.</span>
                <p>Starting with information for over 1 million restaurants (and counting) globally, we're making dining smoother and more enjoyable with services like online ordering and table reservations.</p>
                <span>Enabling restaurants to create amazing experiences.</span>
                <p> With dedicated engagement and management tools, we're enabling restaurants to spend more time focusing on food itself, which translates directly to better dining experiences.</p>
            </div>
            <div>
                <DemoCarousel />
            </div>
            
        </div>
    )
}
export default About