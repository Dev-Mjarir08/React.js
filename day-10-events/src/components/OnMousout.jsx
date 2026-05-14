import React from 'react'

const OnMousout = () => {
    return (
        <div>
            <h1 onMouseOut={() => alert("Mouse Out")}>
                Move Mouse Away
            </h1>
        </div>
    )
}

export default OnMousout
