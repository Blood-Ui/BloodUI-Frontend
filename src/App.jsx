import React from 'react'

import SideBar from './components/SideBar/SideBar'
import Donate from './components/Donate/Donate'

const App = () => {
  return (
    <>
    <div style={{display:'flex'}}>
      <SideBar/>
      <Donate/>
      </div>
    </>
  )
}

export default App