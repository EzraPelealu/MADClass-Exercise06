import React from 'react'
import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import {LastTransaction} from '../../components/molecules/LastTransaction';

const CashOnHand = ({navigation}) => {
    const LastTransaction = [
        {
            date: '17 April 2020',
            description: 'Water, Food',
            amount: '-Rp. 300.000',
        },
        {
            date: '18 April 2020',
            description: 'Office supplies',
            amount: '-Rp. 300.000',
        },
        {
            date: '19 April 2020',
            description: 'Top Up',
            amount: '+Rp. 300.000',
        },
    ];
  return (
    <ScrollView style={styles.container}>
      <PageHeader
        label="Cash On Hand"
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
        <LastTransaction transactions={LastTransaction} />
      </View>
    </ScrollView>
  );
};

export default CashOnHand;

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