import React from 'react'

const Home = ({logout, username}) => {
    return (
        <div>
            <button onClick={logout}>Logout</button>
            Welcome {username}
        </div>
    )
}

export default Home