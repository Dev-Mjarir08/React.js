import React from 'react'
import EnhancedComponents from '../HOC/EnhancedComponents'

const Counter = ({count ,increment}) => {
    return (
        <div>
            <h2>Count:{count}</h2>
            <button type='button' onClick={increment} >increnent</button>
        </div>
    )
}

export default EnhancedComponents(Counter)
