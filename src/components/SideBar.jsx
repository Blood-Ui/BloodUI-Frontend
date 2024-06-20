// import { useState } from 'react'
import home from '../assets/Home.png';
import about from '../assets/About.png';
import donate from '../assets/Donate.png';
import findDonor from '../assets/FindDonor.png';
import contact from '../assets/Contact.png';
import logoWhite from '../assets/logoWhite.png'
import logout from '../assets/logout.png'
import userPic from '../assets/user.jpg'

import { Logo, Sidebar, SidebarBody, SidebarButtons, SidebarButton, SidebarText, LogoutSection, ProfileSection, UserPic, Logout, Img } from '../Styles/SidebarStyled';

const SideBar = () => {

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
  )
}

export default SideBar
