import React from 'react'

const Bounty = props => {
    const {firstName, lastName, isAlive, _id, deleteBounty} =props

    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <button onClick={() => deleteBounty(_id)}>Delete</button>
        </div>
    )
}

export default Bounty