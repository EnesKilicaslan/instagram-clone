import React from 'react'
import './styles/main.css'
import reactImg from './assets/react.png'
import Home from './assets/Home.svg'
import Title from './components/Title'

function App() {
  return (
    <>
      <Title text="My first Title" />
      <h1 className="page">App</h1>
      <img src={reactImg} alt="Girl in a jacket" width="500" height="600" />

      <Home color="red" width={90} height={90} />
    </>
  )
}

export default App
