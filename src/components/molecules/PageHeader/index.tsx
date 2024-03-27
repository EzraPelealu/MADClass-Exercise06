import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';

const PageHeader = ({label, backButton, onPress, type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerTop}>
        <View style={styles.containerwithPhoto}>
          <Text style={styles.title1}>Money Tracker</Text>
          <Text style={styles.title2}>Track your money</Text>
        </View>
        <Image
          style={styles.profilePic}
          source={require('../../../assets/icon/profile.jpg')}
        />
      </View>
    );
  }
  if (label === 'Sign In') {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 24,
  },
  containerwithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 37,
    flexDirection: 'column', 
  },
  labelWithBack: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  title1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  title2: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: 'grey',
    marginLeft: 26,
    marginBottom: -10,
  },
  text: {
    color: '#020202',
  },
  profilePic: {
    width: 60,
    height: 60,
    marginLeft: 'auto',
    marginRight: 30,
    borderWidth: 10,
    borderRadius: 10,
    // borderColor: 'black',
  },
  containerTop: {
    backgroundColor: '#FFFFFF',
    // paddingLeft: 24,
    // paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginLeft: 26,
  },
});