import React, { useState } from 'react'
import home from '../../assets/Home.png';
import about from '../../assets/About.png';
import donate from '../../assets/Donate.png';
import findDonor from '../../assets/FindDonor.png';
import contact from '../../assets/Contact.png';
import logoWhite from '../../assets/logoWhite.png'
import logout from '../../assets/logout.png'
import userPic from '../../assets/user.jpg'

import { Logo, Sidebar, SidebarBody, SidebarButtons, SidebarButton, SidebarText, LogoutSection, ProfileSection, UserPic, Logout, Img, Link } from './SidebarStyled';

const SideBar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

  return (

    <Sidebar onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{ width: isExpanded ? '350px' : '80px' }}>
        <SidebarBody>
            {/* <Logo>
                <Link href="#">
                    <img 
                        src={logoWhite} 
                        alt='logoWhite'
                        width={100}
                        />
                </Link>
            </Logo> */}
            <SidebarButtons>
                <SidebarButton>
                    <Link href="#">
                        <img 
                            src={home} 
                            alt="home"
                            width={25}
                            height={25}/>
                            <SidebarText style={{visibility: isExpanded ? 'visible' : 'hidden'}}>Home</SidebarText>
                    </Link>
                </SidebarButton>

                <SidebarButton>
                    <Link href="#">
                        <img 
                            src={donate} 
                            alt="donate"
                            width={25}
                            height={25}/>
                            <SidebarText>Donate</SidebarText>
                    </Link>
                    
                </SidebarButton>

                <SidebarButton>
                    <Link href="#">
                        <img 
                            src={findDonor} 
                            alt="findDonor"
                            width={25}
                            height={25}/>
                            <SidebarText>Find Donor</SidebarText>
                    </Link>
                    
                </SidebarButton>

                <SidebarButton>
                    <Link href="#">
                        <img 
                            src={about} 
                            alt="about"
                            width={25}
                            height={25}/>
                            <SidebarText>About</SidebarText>
                    </Link>
                    
                </SidebarButton>

                <SidebarButton>
                    <Link href="#">
                        <img 
                            src={contact} 
                            alt="contact"
                            width={25}
                            height={25}/>
                            <SidebarText>Contact</SidebarText>
                    </Link>
                    
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
