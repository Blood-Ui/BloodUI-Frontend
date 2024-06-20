import SideBar from "../components/SideBar"
import Donor from "../components/Donor"
import Donate from "../components/Donate"
import Login  from "../components/Login"
import { Box1 } from "../Styles/LayoutStyles"
import LandingPage from "../components/About"
function Layout() {
  return (
    <>
    <SideBar/>
    <Box1>
      <LandingPage/>
      <Donor/>
      <Donate/>
      <Login/>
    </Box1>
    </>
  )
}

export default Layout