import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
Button

function App() {
  const[bgColor,setBgColor]=useState('black')
  const changeColor=(color)=>{
     setBgColor(color)
  }
  return (
    <>
       <div className='d-flex align-items-center' style={{width:'100%',minHeight:'100vh', backgroundColor:bgColor}}>
      <div className='container border border-light bg-light p-5 d-flex justify-content-center w-50'>
      <Button className='mx-5' variant="outlined" style={{backgroundColor:'red', color:'black'}} onClick={()=>changeColor('red')}>Red</Button>
      <Button className='mx-5' variant="outlined" style={{backgroundColor:'blue', color:'black'}} onClick={()=>changeColor('blue')}>Blue</Button>
      <Button className='mx-5' variant="outlined" style={{backgroundColor:'green',color:'black'}} onClick={()=>changeColor('green')}>Green</Button>
      </div>
      </div>
    </>
  )
}

export default App
