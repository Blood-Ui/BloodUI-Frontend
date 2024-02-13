import React from 'react'
import { Container, MainContent, Heading, Content} from './LandingPageStyled.jsx'
import superhero from '../../assets/Superhero.png' 
import headingImage from '../../assets/headingImage.png'

const LandingPage = () => {
  return (
    <Container>
      <MainContent>
        <Heading src={headingImage}></Heading>
        <Content>Welcome to Blood.ui our blood donation website! Our platform connects blood donors and recipients, making it easier than ever to save lives. Our website allows anyone to register as a blood donor and provide information about their blood type and availability. If you need blood, you can specify requirements and message them directly. We understand the urgency of finding donors quickly, so our platform is designed to be easy to use and efficient. We hope that our website can help save lives and create a stronger sense of community among blood donors and recipients. Thank you for visiting our website, and we encourage you to register as a blood donor or search for donors if you need blood. Together, we can make a difference and save lives.</Content>
      </MainContent>





      {/* <BoldText>
        <Image src={superhero}></Image>
        <Text1>Be a <br />SUPERHERO.</Text1>
        <Text2>Join Us and be the reason for someone's existence.</Text2>
      </BoldText> */}
    </Container>
  )
}

export default LandingPage