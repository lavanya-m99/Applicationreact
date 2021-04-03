import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,Button,TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Header from './header';
import FlexDirectionBasics from './bottom';
import { MaterialIcons } from '@expo/vector-icons';
import { Content,Icon,Thumbnail,Item,Input, } from 'native-base';


export default class Home extends Component
{
  
  constructor(props)
  {
    super(props);
   const StudentList =[
      {Id:'1', RollNo:'1001',StudentList:'A',Course:'Btech',image:'https://i2.wp.com/commsverse.blog/wp-content/uploads/2017/07/ant-man-portrait-session-1806x1254.jpeg?fit=1806%2C1254&ssl=1'},
      {Id:'2', RollNo:'1002',StudentList:'B',Course:'Btech',image:'https://png.pngitem.com/pimgs/s/520-5208506_fat-reduction-questions-thinking-a-person-for-youtube.png'},
      {Id:'3', RollNo:'1003',StudentList:'C',Course:'Btech',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpW_7Igi_y5X2wXkVwRAaHvP8Ogab-nP57g81V9oSvew&usqp=CAU&ec=45682160'},
      {Id:'4', RollNo:'1004',StudentList:'D',Course:'Btech',image:'https://i2.wp.com/commsverse.blog/wp-content/uploads/2017/07/ant-man-portrait-session-1806x1254.jpeg?fit=1806%2C1254&ssl=1'},
      {Id:'5', RollNo:'1005',StudentList:'E',Course:'Btech',image:'https://png.pngitem.com/pimgs/s/520-5208506_fat-reduction-questions-thinking-a-person-for-youtube.png'},
      {Id:'6', RollNo:'1006',StudentList:'F',Course:'Btech',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpW_7Igi_y5X2wXkVwRAaHvP8Ogab-nP57g81V9oSvew&usqp=CAU&ec=45682160'},
      {Id:'7', RollNo:'1007',StudentList:'G',Course:'Btech',image:'https://i2.wp.com/commsverse.blog/wp-content/uploads/2017/07/ant-man-portrait-session-1806x1254.jpeg?fit=1806%2C1254&ssl=1'},
      {Id:'8', RollNo:'1008',StudentList:'H',Course:'Btech',image:'https://png.pngitem.com/pimgs/s/520-5208506_fat-reduction-questions-thinking-a-person-for-youtube.png'},
      {Id:'9', RollNo:'1009',StudentList:'I',Course:'Btech',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpW_7Igi_y5X2wXkVwRAaHvP8Ogab-nP57g81V9oSvew&usqp=CAU&ec=45682160'},
      {Id:'10', RollNo:'1010',StudentList:'J',Course:'Btech',image:'https://i2.wp.com/commsverse.blog/wp-content/uploads/2017/07/ant-man-portrait-session-1806x1254.jpeg?fit=1806%2C1254&ssl=1'}
    ];

    this.state={
       studentsList : StudentList,
       usersFiltered : StudentList

    };
  }

  searchUser(text){
    // alert(text);
    this.setState({
      usersFiltered: this.state.studentsList.filter(i =>
        i.RollNo.toLowerCase().includes(text.toLowerCase()),
      ),
    });
  };

  onClickAboutButton = ()=>{
    this.props.navigation.navigate('About');
 }

  render()
  {
  
  return (
   <View style={styles.container}>
    <Button title="Go to about Page" onPress={this.onClickAboutButton}/>
     <Header />
     <Item searchBar rounded>
       <Icon name="search"  />
       <Input placeholder="Search" onChangeText={text => this.searchUser(text)} />  
     </Item>
       
      <Content>
          {this.state.usersFiltered.map(item => (
              <TouchableOpacity key={item.Id} onPress={() => this.props.navigation.navigate('Details',item)}>
           <Card  style={styles.list} key={item.Id}>
           <View style={styles.item}  >
           <Image source = {{uri:`${item.image}`}}
                style = {{ width: 90, height: 90,marginLeft:10 }}
                />
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard}>{item.RollNo}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard}>{item.StudentList}</Text>
          </View>
          <View style={styles.cardview}>
            <Text style={styles.incard}>{item.Course}</Text>
          </View>
        </Card>
        </TouchableOpacity>
          ))}
        </Content>
        <FlexDirectionBasics />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    margin:6,
    backgroundColor:'#f0f8ff',
     borderRadius:0,
      borderColor:'#000000'
    },
    cardview:{
      flex:1,
      flexDirection:'row',
       padding: 10,
        marginLeft:20,
      },
    incard:{
      flex:1,
      fontSize:15,
      textAlign:'center',
    },
    item:{
      alignSelf: "flex-start",
      position:'absolute',
      paddingTop: 15
      }
});