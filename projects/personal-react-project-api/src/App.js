import React, {Component} from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Cuisines from './components/Cuisines.js'
import Home from './components/Home.js'
import RestaurantList from './components/RestaurantList.js'
import About from './components/About.js'
import Footer from './components/Footer.js'
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
            const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png"
            return (
                <div className="main-container"> 
                        <Navbar navToggle={navToggle} toggler={this.toggler}/>
                        <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>
                        <button className={`rotate rotate-${navToggle ? "open" : "closed"}`} onClick={this.toggler} style={{backgroundImage:'url('+imgUrl+')',backgroundSize:"cover"}}>
                        </button>
                    <div className='header-div'> 
                        <Header />
                    </div>
                    <div >
                    
            
                    <PageFade location = {location}>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/cuisines' component={Cuisines} />
                            <Route path='/about' component={About}/>
                            <Route exact path="/restaurant/:cuisine" component={RestaurantList}/>
                            {/* <Route exact path="/restaurants/:dailymenu" component={Dailymenu}/> */}
                        </Switch>
                    </PageFade>
                    
                    
                    </div>
                    <div className='footer-div'>
                        <Footer />
                    </div>
                
            </div>
        )
    }
}


export default withRouter(withCity(App))