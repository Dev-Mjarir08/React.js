import React, { useState } from 'react'

const Onchangevent = () => {

    const[name,setName]=useState("")

  return (
    <>
      <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} />
      <h4>{name}</h4>
    </>
  )
}

export default Onchangevent
