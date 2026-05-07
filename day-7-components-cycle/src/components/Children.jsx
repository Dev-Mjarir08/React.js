import React, { useEffect } from 'react'

const Children = () => {
    useEffect(()=>{
        console.log("Componenet Mount");
        return()=>{
            alert('Nice To Meet You..! Have a Good Day..!')
            console.log('Component Unmount...');
            
        }
    },[])
  return (
    <>
      <h2>Hello from children</h2>
    </>
  )
}

export default Children
