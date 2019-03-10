import React from 'react'


const Home = () => {
    return (
        <div>
            <div className='title-container'>
                <h1>Collections</h1>
                <h3>Explore curated lists of top restaurants, cafés, pubs, and bars near you, based on trends.</h3>
            </div>
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

            <div className='title-container'>
                <h1>Quick Searches</h1>
                <h3>Discover restaurants by type of meal</h3>
            </div>
            <div className='icon-container'>
                <div className='icon' >
                    <div className='icon1'></div>
                    <h4>Delivery</h4>
                </div>
                <div className='icon'>
                    <div className='icon2'></div>
                    <h4>Breakfast</h4>
                </div>
                <div className='icon'>
                    <div className='icon3'></div>
                    <h4>Lunch</h4>
                </div>
                <div className='icon'>
                    <div className='icon4'></div>
                    <h4>Dinner</h4>
                </div>
                <div className='icon'>
                    <div className='icon5'></div>
                    <h4>Cafés</h4>
                </div>
            </div>

            <div className='stats-container'>
                <div className='stat'>
                    <h1>24</h1>
                    <h3>COUNTRIES</h3>
                </div>
                <div className='stat'>
                    <h1>1.2M</h1>
                    <h3>RESTAURANTS</h3>
                </div>
                <div className='stat'>
                    <h1>120M</h1>
                    <h3>FOODIES EVERY MONTH</h3>
                </div>
                <div className='stat'>
                    <h1>30M</h1>
                    <h3>PHOTOS</h3>
                </div>
                <div className='stat'>
                    <h1>10M</h1>
                    <h3>REVIEWS</h3>
                </div>
                <div className='stat'>
                    <h1>18M</h1>
                    <h3>BOOKMARKS</h3>
                </div>
            </div>

        </div>

        
        
    )
}

export default Home