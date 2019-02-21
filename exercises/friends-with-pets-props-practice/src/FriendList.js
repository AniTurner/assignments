import React from 'react'
import Friend from './Friend'


const FriendList = (props) => {
    return (
        <div>{props.friends.map((friend, i) => <Friend name = {friend.name} age ={friend.age} pets = {friend.pets} key={i}/>)}
        </div>
      

    )
}





export default FriendList;