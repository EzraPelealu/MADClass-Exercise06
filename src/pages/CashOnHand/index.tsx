import React from 'react'
import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, Gap, PageHeader, TextInput, LastTransaction} from '../../components';
import {useNavigation} from '@react-navigation/native';

const CashOnHand = () => {
    const navigation = useNavigation();
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
        />
      </View>
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <Text>Last 3 Transactions</Text>
        <LastTransaction date="17 April 2020" text="Water, Food" price="-Rp.300.000"/>
        <LastTransaction date="18 April 2020" text="Office supplies" price="-Rp.300.000"/>
        <LastTransaction date="19 April 2020" text="Top Up" price="+Rp.300.000"/>
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