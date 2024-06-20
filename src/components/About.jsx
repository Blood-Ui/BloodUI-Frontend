import { RedStripTop ,Container, Content, Logo, About, ImageDisplay, SuperHero, Text1, Text2} from '../Styles/About'
import logo from '../assets/logo.png'
import superHero from '../assets/Superhero.png'


const LandingPage = () => {
  return (
    <>
      <RedStripTop></RedStripTop>
      <Container>
        {/* left side */}
        <Content>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <About>
            Welcome to Blood.ui our blood donation website! Our platform connects blood donors and recipients, making it easier than ever to save lives.<br/> <br /> Our website allows anyone to register as a blood donor and provide information about their blood type and availability. If you need blood, you can specify requirements and message them directly. <br /> <br /> We understand the urgency of finding donors quickly, so our platform is designed to be easy to use and efficient. We hope that our website can help save lives and create a stronger sense of community among blood donors and recipients. <br /><br /> Thank you for visiting our website, and we encourage you to register as a blood donor or search for donors if you need blood. Together, we can make a difference and save lives.
          </About>
        </Content>

        {/* right side */}
        <ImageDisplay>
          <SuperHero src={superHero} alt="superhero" />
          <Text1>Be a <br />Superhero</Text1>
          <Text2>Join Us and be the reason for someones existence.</Text2>
        </ImageDisplay>

      </Container>
    </>
  )
}

export default LandingPage