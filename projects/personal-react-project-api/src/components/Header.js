import React from 'react'
import Form from './Form.js'
import Navbar from './Navbar.js'

const Header = () => {
    return(
        <div className='header'>
            <Navbar/>
            <img style={{width: 100, height: 'auto', marginTop: 50}} src='https://cdn2.iconfinder.com/data/icons/line-elements/512/cook-512.png'/>
            <p >Find the best restaurants, cafés, bars, and more.</p>
            <Form />
        </div>
    )
}

export default Header