import React, { useEffect, useState } from 'react'
import Children from './components/Children'


const App = () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [toggle, setToggle] = useState(true)

  const handleMsg = () => {
    console.log("hello");

  }
  console.log('render..');

  useEffect(() => {
    handleMsg()
  }, [])

  useEffect(() => {
    handleMsg()
  }, [count])
  return (
    <>
      <h4>count:{count}</h4>
      <h4>count1:{count1}</h4>
      <button type='button' onClick={() => setCount(count + 1)}>count++</button>
      <button type='button' onClick={() => setCount1(count1 + 1)}>count1++</button>
      <button type='button' onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Children />}
    </>
  )
}

export default App
