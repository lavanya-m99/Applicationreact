import React, { Component } from 'react';
import { StyleSheet, Text,View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.bottom}>
        <View style={{flex: 1,width: 50, height: 80, backgroundColor: 'powderblue'}} >
        <View style={styles.item}>
        <SimpleLineIcons name="graduation" size={40} color="black" />
        </View></View>
        <View style={{flex: 1,width: 50, height: 80, backgroundColor: 'skyblue'}} >
          <View style={styles.item}>
          <MaterialCommunityIcons name="teach" size={45} color="black" />
        </View></View>
        <View style={{flex: 1,width: 50, height: 80, backgroundColor: 'steelblue'}} >
        <View style={styles.item}>
        <FontAwesome name="group" size={37} color="black" />
        </View></View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  bottom:{
    flex: 1,
    flexDirection: 'row' ,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    marginEnd:-10,
    marginBottom:20,

    },
  inbot: {
    flex: 1,
    width: 50,
    height: 80,
    backgroundColor: 'powderblue',
    borderColor: 'black',
    borderWidth: 1,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});