import React from 'react'
import './style.css'
import reactImg from './assets/react.png'
import Home from './assets/Home.svg'

function App() {
  return (
    <>
      <h1>Instagram App</h1>
      <img src={reactImg} alt="Girl in a jacket" width="500" height="600" />

      <Home color="red" width={90} height={90} />
    </>
  )
}

export default App
