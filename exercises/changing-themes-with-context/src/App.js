import React from 'react'
import {withTheme} from './ThemeProvider.js'
import Navbar from './Navbar.js'
import Main from './Main.js'
import Footer from './Footer.js'
import './styles.css'


const App = props => {
    return (
        <div>
            <div className={`home-${props.theme}`}>
             <Navbar />
             <Main />
             <Footer />
            </div>
        </div>
    )
}


export default withTheme(App)