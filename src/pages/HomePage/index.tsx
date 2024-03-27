import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button, Gap, PageHeader, PageFooter } from '../../components'; 

const HomePage = ({navigation, label}) => {
  return (
    <ScrollView style={styles.container}>
        <PageHeader type="withPhoto" />
        <Gap height={24} />
        <View style={styles.contentWrapper}>
            <Gap height={26} />
            <View>
                <Text style={styles.containerText1}>Your Balance</Text>
                <Text style={styles.containerText2}>Rp. 10.000.000</Text>
                <Text style={styles.containerText}>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</Text>
                <Text style={styles.containerText3}>Cash on Hand    Rp. 4.000.000</Text>
                <Text style={styles.containerText3}>Cash on Bank    Rp. 6.000.000</Text>
            </View>
            <Gap height={24} />
        </View>
        <Gap height={24} />
        <View style={styles.contentWrapper}>
            <Gap height={26} />
            <Text style={styles.containerText4}>Add Transaction</Text>
            <Button label="Cash On Hand" backgroundColor="#02CF8E" textColor="#000000" onPress={() => navigation.navigate('CashOnHand')}/>
            <Gap height={18} />
            <Button label="Cash On Bank" backgroundColor="#02CF8E" textColor="#000000" onPress={() => navigation.navigate('CashOnBank')}/>
        </View>
        <Gap height={26} />
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentWrapper: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: 24,
    },
    containerText: {
        color: '#000000',
        fontFamily: 'Poppins-Light'
    },
    containerText1: {
        color: '#000000',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
    },
    containerText2: {
        color: '#000000',
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        textAlign: 'center',
    },
    containerText3: {
        color: '#000000',
        fontFamily: 'Poppins-Light',
        fontSize: 14,
    },
    containerText4: {
        color: '#000',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
    },
});

export default HomePage