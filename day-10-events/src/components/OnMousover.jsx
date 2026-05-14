import React from 'react'

const OnMousover = () => {
    return (
        <div>
            <h1 onMouseOver={() => alert("Mouse Over")}>
                Hover Me
            </h1>
        </div>
    )
}

export default OnMousover
