import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> {" "}
            <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
                Decrement
            </button>{" "}
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );

    return (
        <>
            <h1>hello</h1>
        </>
    )
}

export default Counter
