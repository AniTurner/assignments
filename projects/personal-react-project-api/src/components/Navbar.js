import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    const { navToggle, toggler } = props
    return (
        <div>
            <div onClick={toggler} className={`nav nav-${navToggle ? "open" : "closed" }`}>
                <Link style={{fontSize: 30, color: '#70C1B3'}} to='/'>Home</Link>
                <Link style={{fontSize: 30, color: '#70C1B3'}} to='/about'>About Us</Link>
            </div>
        </div>
    )
}

export default Navbar