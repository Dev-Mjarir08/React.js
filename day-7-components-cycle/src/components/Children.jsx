import React, { useEffect } from 'react'

const Children = () => {
    useEffect(()=>{
        console.log("Componenet Mount");
        return()=>{
            alert('Nice To Meet You')
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
