import React from 'react'
import City from '../props/City'

const State = ({ state, city }) => {
  return (
    <>
      <h1>Hello from {state}</h1>

      <City city={city} />
    </>
  )
}

export default State