import React from 'react'

const OnkeyDown = () => {
    const handleKey = (e) => {
        console.log(e.key)
    }

    return (
        <input
            type="text"
            onKeyDown={handleKey}
            placeholder="Press Key"
        />
    )
}

export default OnkeyDown
