import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    const { navToggle, toggler } = props
    return (
        <div>
            <div onClick={toggler} className={`nav nav-${navToggle ? "open" : "closed" }`}>
                <Link to='/'>Home</Link>
                {/* <Link to='/cuisines'>Cuisines</Link> */}
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Navbar