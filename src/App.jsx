import React from 'react'

import SideBar from './components/SideBar/SideBar'
import Donate from './components/Donate/Donate'
import Donor from './components/Donor/Donor'

const App = () => {
  return (
    <>
    <div style={{display:'flex'}}>
      <SideBar/>
      <Donor/>
      </div>
    </>
  )
}

export default App