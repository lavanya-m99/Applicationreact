import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Image} from 'react-native';

export default function Details({ navigation }){

const onClickHomeButton = ()=>{
    navigation.goBack();
}
const uri = navigation.getParam('image');


    return (
        <View >
            <Button title="Back Home page" onPress={onClickHomeButton}/>
            {/* <Text style={styles.fontStyling}>This is an About Page</Text>  */}
            <Image source = {{uri:`${uri}`}}
                style = {{ width: 350, height: 350,marginLeft:10 }}
                />
            <Text style= {styles.fontStyling}>Name: {navigation.getParam('StudentList')} </Text>
            <Text style= {styles.fontStyling}>RollNo: {navigation.getParam('RollNo')} </Text>
            <Text style= {styles.fontStyling}>Course: {navigation.getParam('Course')} </Text>
           
        </View>
    )



}

const styles = StyleSheet.create({

    fontStyling:{
        fontSize: 30,
        marginLeft:50
    }
});