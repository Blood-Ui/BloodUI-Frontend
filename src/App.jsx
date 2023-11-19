import React from 'react'

import SideBar from './components/SideBar/SideBar'
import Donate from './components/Donate/Donate'
import Donor from './components/Donor/Donor'
import Layout from './layout/Layout'
import Login from './components/Login/Login'
import LandingPage from './components/LandingPage/LandingPage'

const App = () => {
  return (
    <>
    <div style={{display:'flex'}}>
      <Layout/>
      </div>
    </>
  )
}

export default App