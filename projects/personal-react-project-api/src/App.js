import React, {Component} from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Cuisines from './components/Cuisines.js'
import Home from './components/Home.js'
import RestaurantList from './components/RestaurantList.js'
import About from './components/About.js'
import { withCity } from './context/CityProvider.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import { PageFade } from './transitions/transition'
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
            const imgUrl = "https://banner2.kisspng.com/20180612/uzt/kisspng-restaurant-computer-icons-food-menu-issues-5b2087e8297cd0.5561046515288586001699.jpg"
            return (
                <div className="app-container">
                    <Header />
                    <Navbar navToggle={navToggle} toggler={this.toggler}/>
                    <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>
                    <button className={`rotate rotate-${navToggle ? "open" : "closed"}`} onClick={this.toggler} style={{backgroundImage:'url('+imgUrl+')',backgroundSize:"cover"}}>
                    </button>
               
                <PageFade location = {location}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/cuisines' component={Cuisines} />
                        <Route path='/about' component={About}/>
                        <Route path="/restaurants/:cuisine" component={RestaurantList}/>
                        {/*<Route path="/restaurants/:dailymenu" component={Dailymenu}/>*/}
                    </Switch>
                </PageFade>
            </div>
        )
    }
}


export default withRouter(withCity(App))