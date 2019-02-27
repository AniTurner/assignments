import React from 'react'
import Header from './Header.js'
import Home from './Home.js'
import Services from './Services.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

import {Switch, Route} from 'react-router-dom'


const App = () => {
    return (
        <div className='container'>
            <Nav/>
            <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/newbody' component={Services} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            <Footer />
        </div>
    )
}








export default App