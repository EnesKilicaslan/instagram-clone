import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './containers/Navigation'
import { Home, Profile, Posts, IgTv, Saved, Tagged } from './views/'

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Posts />} />
          <Route path="posts" element={<Posts />} />
          <Route path="igtv" element={<IgTv />} />
          <Route path="saved" element={<Saved />} />
          <Route path="tagged" element={<Tagged />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
