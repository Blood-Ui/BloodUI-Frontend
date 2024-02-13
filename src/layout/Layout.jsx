import SideBar from "../components/SideBar/SideBar"
import Donor from "../components/Donor/Donor"
import Donate from "../components/Donate/Donate"
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
    </Box1>
    </>
  )
}

export default Layout