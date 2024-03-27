import React from 'react'
import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';

const CashOnBank = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Bank"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View style={styles.contentWrapper}>

        <Gap height={26} />
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={16} />
        <TextInput
          label="Type"
          placeholder="Debit / Credit"
        />
        <Gap height={24} />
        <Button
          label="Save"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  );
};

export default CashOnBank;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentWrapper: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      paddingHorizontal: 24,
    },
});