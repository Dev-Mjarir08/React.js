import React from 'react'
import Onchangevent from './components/Onchangevent'
import OnMousout from './components/OnMousout'
import OnMousover from './components/OnMousover'
import OnkeyDown from './components/OnkeyDown'

const App = () => {
 const handleClick=(e)=>{
    alert("bhad me jao tum sabbbb!>>>")
 }

  return (
    <>
      <OnMousout />
      <h2 onClick={handleClick}>Helloo...!</h2>
      <h2>Nice to Meet You...!</h2>
      <Onchangevent />
      <OnMousover />
      <OnkeyDown />
    </>
  )
}

export default App
