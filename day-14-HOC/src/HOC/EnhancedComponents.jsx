import React, { useState } from 'react'

const EnhancedComponents = (WrapperComponent) => {

  return (props) => {

    const [count, setCount] = useState(0)
    return (
      <WrapperComponent
        {...props}
        count={count}
        increment={()=>setCount(count+1)}
        decrement={()=>setCount(count-1)}
      />
    )
  }
}

export default EnhancedComponents