import React from 'react'


const Todo = (props) => {

    const {title, description, imgUrl, price, completed, _id} = props 

    return (
        <div style={{backgroundImage: `url(${imgUrl})`}}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <p>Price: {price}</p>
            <input type='checkbox' defaultChecked={completed} />
        </div>
    )
}

export default Todo