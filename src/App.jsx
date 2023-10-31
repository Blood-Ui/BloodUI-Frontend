import React from 'react'

import SideBar from './components/SideBar/SideBar'
import Donate from './components/Donate/Donate'
import Donor from './components/Donor/Donor'
import Login from './components/Login/Login'

const App = () => {
  return (
    <>
    <div style={{display:'flex'}}>
      {/* <SideBar/>
      <Donor/> */}
      <Login />
      </div>
    </>
  )
}

export default App