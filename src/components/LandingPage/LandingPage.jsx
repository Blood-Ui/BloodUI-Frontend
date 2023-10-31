import React from 'react'
import { Container, BoldText, Image, Text1, Text2 } from './LandingPageStyled.jsx'
import superhero from '../../assets/superhero.png'

const LandingPage = () => {
  return (
    <Container>
      <BoldText>
        <Text1>Be a <br />SUPERHERO.</Text1>
        <Text2>Join Us and be the reason for someone's existence.</Text2>
      </BoldText>
      <Image src={superhero}></Image>
    </Container>
  )
}

export default LandingPage