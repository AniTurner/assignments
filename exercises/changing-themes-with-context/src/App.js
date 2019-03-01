import React from 'react'
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


export default App