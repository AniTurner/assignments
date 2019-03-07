import React from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Cuisines from './components/Cuisines.js'
import Home from './components/Home.js'
import About from './components/About.js'
import { withCity } from './context/CityProvider.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import './styles.css'

const App = (props) => {

    return (
        <div>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cuisines' component={Cuisines} 
                    cuisineData={props.cuisineData}
                />
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    )
}


export default withRouter(withCity(App))