import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../assets/icon/logo.svg';
import React, { useEffect } from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('SignIn'), 3000);
    }, []);

  return (
    <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#02CF8E',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
        color: '#020202',
    },

});