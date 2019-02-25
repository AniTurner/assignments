import React from 'react'


const Die = (props) => {
    return (
        <div>
            {/* <div>{props.num}</div> */}
            <div id={"dice" + props.num}><span className="no-display">{props.num}</span></div>

        </div>
    )
}





export default Die