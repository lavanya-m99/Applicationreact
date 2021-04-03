import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Header() { 
    return (
        <View style={styles.header}>
            <Text style={styles.title}>JNTUK</Text> 
            <View style={styles.item}>
            <FontAwesome5 name="graduation-cap" size={28} color="black" />
            </View>
            <View style={styles.item1}>
            <AntDesign name="bars" size={32} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign:  'center',
        color:  '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 11,
    },
    item: {
        justifyContent: "flex-end",
        flexDirection:'row',
        marginTop: -28,
        marginRight:15,
   },
   item1: {
       flexDirection:'row',
       marginTop: -30,
       marginLeft:10,

  }
});