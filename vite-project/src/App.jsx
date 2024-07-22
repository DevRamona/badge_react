import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from "./Components/Data"
import Cards from "./Components/Cards"
import Navbar from './Components/Navbar'

function App() {
  const cards = Data.map(item => {
    return (
      <Cards
      img = {item.imageUrl}
      location = {item.location}
      googleMapUrl = {item.googleMapUrl}
      title = {item.title}
      startDate ={item.startDate}
      endDate = {item.endDate} 
      description = {item.description}/>
    )
  })

  return (
    <div>
      <Navbar/>
      {cards}
      
    </div>
  )
  
}

export default App
