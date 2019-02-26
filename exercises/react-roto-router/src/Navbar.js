import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <Link to='/'>Main Body</Link>
            <Link to='./newbody'>New Body</Link>
        </div>
    )
}

export default NavBar