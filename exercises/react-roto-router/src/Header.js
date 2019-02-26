import React from 'react'
import {Switch, Route} from 'react-router-dom'

const Header = () => {
    return (
        <div>
             <Switch>
                <Route exact path = '/' component = {Body} />
                <Route path = '/newbody' component = {NewBody} />
            </Switch>
            <Navbar />
        </div>
    )
}

export default Header