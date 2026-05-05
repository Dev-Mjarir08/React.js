import React from 'react'
import State from '../props/State'

const Country = ({ country, state, city }) => {
  return (
    <>
      <h1>Hello from {country}</h1>

      <State
        state={state}
        city={city}
      />
    </>
  )
}

export default Country