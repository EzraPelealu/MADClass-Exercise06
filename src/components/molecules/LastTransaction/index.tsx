import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Transaction {
    date: string;
    description: string;
    amount: string;
}

interface LastTransactionProps {
    transactions: Transaction[];
}

const LastTransaction: React.FC<LastTransactionProps> = ({ transactions }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Last 3 Transactions</Text>
            {transactions.map((transaction, index) => (
                <View style={styles.transactionItem} key={index}>
                    <View style={styles.border}>
                        <Text style={styles.transactionDate}>{transaction.date}</Text>
                        <Text style={styles.transactionDescription}>{transaction.description}</Text>
                        <Text style={[styles.transactionAmount, transaction.amount.startsWith('+') ? styles.greenText : styles.redText]}>{transaction.amount}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        fontFamily: 'Poppins-Medium',
    },
    transactionItem: {
        marginBottom: 10,
    },
    border: {
        padding: 15,
        height: 80,
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },
    transactionDate: {
        fontSize: 16,
        marginBottom: 5,
        marginHorizontal: 10,
        fontFamily: 'Poppins-Medium',
    },
    transactionDescription: {
        fontSize: 16,
        marginBottom: 5,
        marginHorizontal: 10,
        fontFamily: 'Poppins-Medium',
        color: 'black',
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginTop: -50,
        fontFamily: 'Poppins-Medium',
    },
    greenText: {
        color: '#02CF8E',
    },
    redText: {
        color: '#D9435E',
    },
});

export default LastTransaction;
