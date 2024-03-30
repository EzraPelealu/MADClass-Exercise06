import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
const LastTransaction = ({date, text, price}) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Card.Title style={styles.cardtitle}>{date}</Card.Title>
          <Text>{text}</Text>
        </View>
        <View style={styles.column}>
          <Text>{price}</Text>
        </View>
      </View>
    </Card>
  );
}

export default LastTransaction

const styles = StyleSheet.create({
  cardtitle:{
    textAlign: "left",
  },
  card:{
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  price: {
    textAlign: 'right',
  },
})