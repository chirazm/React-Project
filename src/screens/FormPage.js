import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { emailValidator } from '../helpers/emailValidator'
import { ageValidator } from '../helpers/ageValidator'
import { nameValidator } from '../helpers/nameValidator'

const FormPage = ({ navigation }) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [name, setName] = useState({ value: '', error: '' });
    const [age, setAge] = useState({ value: '', error: '' });
  
    const onSubmitPressed = () => {
      const emailError = emailValidator(email.value);
      const nameError = nameValidator(name.value);
      const ageError = ageValidator(age.value);
  
      if (emailError || nameError || ageError) {
        setEmail({ ...email, error: emailError });
        setName({ ...name, error: nameError });
        setAge({ ...age, error: ageError });
        return;
      } else {
        navigation.navigate('Result', { name: name.value, email: email.value, age: age.value });
      }
    };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Please Fill Out The Form</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
    
      />
       <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Age"

        value={age.value}
        onChangeText={(text) => setAge({ value: text, error: '' })}
        error={!!age.error}
        errorText={age.error}
        keyboardType='numeric'
        
      />
     
      <Button mode="contained" onPress={onSubmitPressed}>
        Submit
      </Button>
     
    </Background>
  )
}
export default FormPage;


