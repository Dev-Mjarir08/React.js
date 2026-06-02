import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      {
        isLogin ? <Login /> : <Register />
      }

      <button onClick={() => setIsLogin(!isLogin)}>
        {
          isLogin ? "Go to Register" : "Go to Login"
        }
      </button>
    </>
  )
}

export default App