import React from 'react'
import Products from './Products.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Nav from './Nav.js'
import './styles.css'


// A nav bar
// An info section
// A list of products or services
// Images
// A footer

function App() {
    return (
        <div className='background-picture'>
            <Header />
            <Nav />
            <Products />
            <Footer />
        </div>
    )
}

export default App;