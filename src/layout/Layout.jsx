import SideBar from "../components/SideBar/SideBar"
import Donor from "../components/Donor/Donor"
import Donate from "../components/Donate/Donate"
import Login  from "../components/Login/Login"
import { Box1 } from "./LayoutStyles"
import LandingPage from "../components/LandingPage/LandingPage"
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