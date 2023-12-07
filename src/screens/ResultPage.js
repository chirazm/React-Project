import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { theme } from '../core/theme';

const ResultPage = ({ route, navigation }) => {
  const { name, email, age } = route.params;

  return (
    <View style={styles.container}>
      <Background>
        <Logo />
        <Header>Result Page</Header>
        <Paragraph>
          Your amazing result is here. 
        </Paragraph>
        <View style={styles.containerDetails}>
            <Text style={styles.text}>
                <Text style={styles.boldText}>Name :</Text> {name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.boldText}>Email :</Text> {email}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.boldText}>Age :</Text> {age}
            </Text>
        </View>


        <Button
          mode="outlined"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }
        >
          Go back to Home Page
        </Button>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800080',
  },
  containerDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC33CC',
    width: '300px',
    borderRadius: 10,
    padding: 10, 
  },
  text: {
    lineHeight: 24,
    marginBottom: 8,
    fontSize: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default ResultPage;
