import React from 'react'
import Cards from './Cards'
import './styles.css'

const App = () => {

    let vacationSpots = [
        {
          place: "Lagos, Portugal",
          price: 14110,
          timeToGo: "Spring"
        },{
          place: "White Desert, Antarctica",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "Lake Bled, Slovenia",
          price: 12200,
          timeToGo: "Fall"
        },{
          place: "North Island, Seychelles",
          price: 100,
          timeToGo: "Summer"
        }
      ]

      return (
          <div>
              {vacationSpots.map((spot, i) => <Cards place={spot.place} price={spot.price} timeToGo={spot.timeToGo} key={i}/>)}
          </div>
      )
}





export default App