import React from 'react'
import Header from './Header.js'
import BlogList from './BlogList.js'
import Footer from './Footer.js'
import './styles.css'


const App = () => {
    return (
        <div>
            <Header />
            <BlogList/>
            <div className="bottom-line"></div>
            <Footer />
        </div>
    )
}


export default App