import React, { useState } from 'react'
import home from '../../assets/Home.png';
import about from '../../assets/About.png';
import donate from '../../assets/Donate.png';
import findDonor from '../../assets/FindDonor.png';
import contact from '../../assets/Contact.png';
import logoWhite from '../../assets/logoWhite.png'
import logout from '../../assets/logout.png'
import userPic from '../../assets/user.jpg'

import { Logo, Sidebar, SidebarBody, SidebarButtons, SidebarButton, SidebarText, LogoutSection, ProfileSection, UserPic, Logout, Img } from './SidebarStyles';

const SideBar = () => {

    // const [darkmode,setDarkMode] = useState(false)
    // const [isSideBarOpen,setIsSideBarOpen] = useState(true)


    // const ModeSwitchFunction = () => {
    //     setDarkMode(!darkmode);
    // }

    // const SideBarOpenFunction = () => {
    //     setIsSideBarOpen(!isSideBarOpen);
    // }

  return (

    <Sidebar>
        <SidebarBody>
            <Logo>
                <a href="#">
                    <img 
                        src={logoWhite} 
                        alt='logoWhite'
                        width={100}
                        />
                </a>
            </Logo>
            <SidebarButtons>
                <SidebarButton>
                    <a href="#">
                        <img 
                            src={home} 
                            alt="home"
                            width={25}
                            height={25}/>
                    </a>
                    <SidebarText>Home</SidebarText>
                </SidebarButton>

                <SidebarButton>
                    <a href="#">
                        <img 
                            src={donate} 
                            alt="donate"
                            width={25}
                            height={25}/>
                    </a>
                    <SidebarText>Donate</SidebarText>
                </SidebarButton>

                <SidebarButton>
                    <a href="#">
                        <img 
                            src={findDonor} 
                            alt="findDonor"
                            width={25}
                            height={25}/>
                    </a>
                    <SidebarText>Find Donor</SidebarText>
                </SidebarButton>

                <SidebarButton>
                    <a href="#">
                        <img 
                            src={about} 
                            alt="about"
                            width={25}
                            height={25}/>
                    </a>
                    <SidebarText>About</SidebarText>
                </SidebarButton>

                <SidebarButton>
                    <a href="#">
                        <img 
                            src={contact} 
                            alt="contact"
                            width={25}
                            height={25}/>
                    </a>
                    <SidebarText>Contact</SidebarText>
                </SidebarButton>
            </SidebarButtons>

            <Logout>
                <ProfileSection>
                     <UserPic>
                        <Img 
                            src={userPic}
                            alt="Profile Picture"
                            width={30}
                            height={30}
                        />
                    </UserPic>
                    <SidebarText>K S Abhishek</SidebarText>
                </ProfileSection>
                <LogoutSection>
                    <a href="#">
                        <img 
                            src={logout} 
                            alt="home"
                            width={25}
                            height={25}/>
                    </a>
                    <SidebarText>Logout</SidebarText>
                </LogoutSection>
            </Logout>
        </SidebarBody>
    </Sidebar>









    // <div className={isSideBarOpen ? 'sidebar' : 'sidebar close'}>
    //     <header>
    //         <div className="image-text">
    //             <span className="image">

    //                 <p>Blood.UI</p>
    //             </span>
    //             {/* 
    //             <div className="text header-text">
    //                 <span className="name">Akash M N</span>
    //                 <span className="profession">Web Developer</span>
    //             </div> */}
    //         </div>
    //         <i onClick={SideBarOpenFunction} className={isSideBarOpen ? 'bx bx-chevron-left toggle' : 'bx bx-chevron-right toggle'}></i>
    //     </header>

    //     <div className="menu-bar">
    //         <div className="menu">
    //             <ul className="nav-links">
    //                 <li className="nav-link">
    //                     <a href="">
    //                         <img 
    //                             src={home}
    //                             alt="home-logo"
    //                             width={25}
    //                             height={25}
    //                             />
                                
    //                         <span className="text nav-text">Home</span>
    //                     </a>
    //                 </li>
    //                 <li className="nav-link">
    //                     <a href="">

    //                         <img 
    //                             src={donor}
    //                             alt="home-logo"
    //                             width={25}
    //                             height={25}
    //                         />

    //                         <span className="text nav-text">Donate</span>
    //                     </a>
    //                 </li>
    //                 <li className="nav-link">
    //                     <a href="">

    //                         <img 
    //                             src={findDonor}
    //                             alt="home-logo"
    //                             width={25}
    //                             height={25}
    //                             />
                                
    //                         <span className="text nav-text">Find Donor</span>
    //                     </a>
    //                 </li>
    //                 <li className="nav-link">
    //                     <a href="">
    //                         <img 
    //                             src={about}
    //                             alt="home-logo"
    //                             width={20}
    //                             height={20}
    //                             />
                                
    //                         <span className="text nav-text">About</span>
    //                     </a>
    //                 </li>
    //                 <li className="nav-link">
    //                     <a href="">
    //                         <img 
    //                             src={contact}
    //                             alt="home-logo"
    //                             width={20}
    //                             height={20}
    //                             />
                                
    //                         <span className="text nav-text">Contact</span>
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>

    //         <div className="bottom-content">
    //             <li className=" ">
    //                 <a href="">
    //                     <i className='bx bx-log-out icon'></i>
    //                     <span className="text nav-text">Logout</span>
    //                 </a>
    //             </li>
    //             <li className="mode">
    //                 <div className='moon-sun'>
    //                     <i className={`bx ${darkmode ? 'bx-sun' : 'bx-moon'} icon moon-sun`}></i>
    //                 </div>
    //                 <div onClick={ModeSwitchFunction}className="toggle-switch">
    //                     <div className='switch'>
    //                         <div className={darkmode ? "dark-switch" : "light-switch"}></div>
    //                     </div>
    //                 </div>
    //             </li>
    //         </div>
    //     </div>
    // </div>
  )
}

export default SideBar
