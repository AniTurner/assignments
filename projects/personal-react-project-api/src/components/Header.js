import React from 'react'
import Form from './Form.js'
import Navbar from './Navbar.js'

const Header = () => {
    return(
        <div className='header'>
            <Navbar/>
            <img src='https://cdn2.iconfinder.com/data/icons/line-elements/512/cook-512.png'/>
            <h1 >Find the best restaurants, cafés, bars, and more.</h1>
            <Form />
        </div>
    )
}

export default Header