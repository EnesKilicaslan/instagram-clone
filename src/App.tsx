import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header'
import Main from './containers/Main'
import { Home, Profile, Posts, IgTv, Saved, Tagged } from './views/'

function App() {
  return (
    <>
      <Header />
      <Main>
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
      </Main>
    </>
  )
}

export default App
