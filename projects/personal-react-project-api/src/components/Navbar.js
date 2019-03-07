import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <div className='open'>
                <span className='cls'></span>
                <span>
                    <ul className='sub-menu'>
                        <Link to='/'>Home</Link>
                        <Link to='/cuisines'>Cuisines</Link>
                        <Link to='/about'>About</Link>
                    </ul>
                </span>
                <span className="cls"></span>
            </div>
        </div>
    )
}

export default Navbar