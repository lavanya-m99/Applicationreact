import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function About({ navigation }){

const onClickHomeButton = ()=>{
    navigation.goBack();
}
const uri = navigation.getParam('image');


    return (
        <View >
            <Button title="Back Home page" onPress={onClickHomeButton}/>
            <Text style={styles.fontStyling}>This is an About Page</Text> 
            
           
        </View>
    )



}

const styles = StyleSheet.create({

    fontStyling:{
        fontSize: 30,
        marginLeft:50
    }
});