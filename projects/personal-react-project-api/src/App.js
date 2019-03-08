import React, {Component} from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Cuisines from './components/Cuisines.js'
import Home from './components/Home.js'
import About from './components/About.js'
import { withCity } from './context/CityProvider.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import { PageFade } from './transitions'
import './styles.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }
    
        toggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle }))

        render() {
            const {navToggle} = this.state
            const {location } = this.props
            return (
                <div className="app-container">
                    <Header />
                    <Navbar navToggle={navToggle} toggler={this.toggler}/>
                    <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>
                    <button className={`rotate rotate-${navToggle ? "open" : "closed"}`} onClick={this.toggler}>|||</button>
               
                <PageFade location = {location}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/cuisines' component={Cuisines} />
                        <Route path='/about' component={About}/>
                        {/*<Route path="/restaurants/:cuisine" component={RestaurantList}/>*/}
                        {/*<Route path="/restaurants/:dailymenu" component={Dailymenu}/>*/}
                    </Switch>
                </PageFade>
            </div>
        )
    }
}


export default withRouter(withCity(App))