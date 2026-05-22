import React from 'react'
import EnhancedComponents from '../HOC/EnhancedComponents'

const Counter1 = ({count ,decrement}) => {
    return (
        <div>
            <h2>Count:{count}</h2>
            <button type='button' onClick={decrement}>Decremnet</button>
        </div>
    )
}

export default EnhancedComponents(Counter1)
