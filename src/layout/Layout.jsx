import SideBar from "../components/SideBar/SideBar"
import Donor from "../components/Donor/Donor"
import Donate from "../components/Donate/Donate"
import { Box1 } from "./LayoutStyles"
function Layout() {
  return (
    <>
    
    <SideBar/>
    <Box1>
    <Donor/>
    <Donate/>
    </Box1>

    </>
  )
}

export default Layout