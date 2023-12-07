import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function HomePage({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome To Our Page</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Form')}
      >
        Go To Form Page
      </Button>
     
    </Background>
  )
}
