import React from 'react'


const Home = () => {
    return (
        <div >
            <div className='home-container'>
                <div className='items'>
                    <div className='box1'></div>
                    <div>
                        <h1>Trending This Week</h1>
                        <h3 style={{marginTop: 20}}>Most popular restaurants in town this week</h3>
                    </div>
                    
                </div>
                <div className='items'>
                    <div className='box2'></div>  
                    <div>                 
                        <h1>Rooftops</h1>
                        <h3 style={{marginTop: 20}}>If you fancy a meal with a view</h3>
                    </div> 
                </div>
                <div className='items'>
                    <div className='box3'></div>
                    <div>
                        <h1>Great Food, No Bull</h1>
                        <h3 style={{marginTop: 20}}>The hunt for the highest-rated restaurants in your city</h3>
                    </div>
                </div>
          
                <div className='items'>
                    <div className='box4'></div>
                    <div>
                        <h1>Restaurants With A Great View</h1>
                        <h3 style={{marginTop: 20}}>Eat, drink, and enjoy the most beautiful views your city has to offer</h3>
                    </div>
                </div>
                <div className='items'>
                    <div className='box5'></div>  
                    <div>                
                        <h1>Great Cafés</h1>
                        <h3 style={{marginTop: 20}}>Greatest spots for some time to relax and drink your favorite coffee.</h3>
                    </div>  
                </div>
                <div className='items' >
                    <div className='box6'></div>
                    <div>
                        <h1>And Fun With Friends</h1>
                        <h3 style={{marginTop: 20}}>Where friends are there is home.</h3>
                    </div>
                </div>
            </div>


            <div className='icon-container'>
                <div>
                    <div className='icon1'></div>
                    <h4>Delivery</h4>
                </div>
                <div>
                    <div className='icon2'></div>
                    <h4>Breakfast</h4>
                </div>
                <div className='icon3'></div>
                <div className='icon4'></div>
                <div className='icon5'></div>
            </div>
        </div>
        
    )
}

export default Home