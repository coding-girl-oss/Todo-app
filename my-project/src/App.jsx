import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
  

const App = () => {
  
  return (
    <>
   
    <div className='bg-gradient-to-br from-black to-[#f633ff] min-h-screen w-full'>
        <Navbar/>
        <Todo/>
    </div>
   
    </>
  )
}

export default App

