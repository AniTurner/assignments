import React from 'react'
import Bounty from './Bounty.js'


const BountyList = props => {
    return (
        <div>
            {props.bounties.map(bounty => 
                                <Bounty
                                    deleteBounty={props.deletBounty}
                                    key={bounty._id}
                                    {...bounty}
                                    />)
                }
        </div>
    )
}


export default BountyList