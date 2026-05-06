import React, { useEffect } from 'react'

const Children = () => {
    useEffect(()=>{
        console.log("Componenet Mount");
        return()=>{
            alert('Hello..')
            console.log('Component Unmount..');
            
        }
    },[])
  return (
    <>
      <h2>hello from children</h2>
    </>
  )
}

export default Children
