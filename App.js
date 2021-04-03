import React, { Component } from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import {Card} from 'react-native-paper';
import Header from './components/header';
import FlexDirectionBasics from './components/bottom';
import { MaterialIcons } from '@expo/vector-icons';
import { Content,Icon,Thumbnail,Item,Input, } from 'native-base';


export default class App extends Component
{
  
  constructor(props)
  {
    super(props);
   const StudentList =[ 
      {Id:'1', RollNo:'JNTUK – FDP Brochure for Two Week ONLINE Faculty Development Programme on “RECENT ADVANCES IN MATERIALS AND CHALLENGES IN MANUFACTURING TECHNIQUES” Sponsored by AICTE during 22nd March- 3rd April 2021 – Reg.',StudentList:'DAP ',Course:'Posted Date: 19-03-2021'},
      {Id:'2', RollNo:'JNTUK – Tender Notice No.01/ JNTUK / ED / KKD / ELEC / 2020-21, Date: 12/03/2021 (Providing street lights & flood lights for Dr. B. R Ambedkar statue near Principal office junction at JNTUK Kakinada (1st call))- O/o Chief Engineer – Reg',StudentList:'DAP',Course:'Posted Date: 19-03-2021'},
      {Id:'3', RollNo:'Final B. Tech R20 REGULATIONS-12-03-2021-APPROVED IN SENATE',StudentList:'DAP',Course:'Posted Date: 12-03-2021'},
      {Id:'4', RollNo:'Notification for Renewal of the existing Research Centers / grant of New Research Centers from the affiliated colleges of JNTUK – 2021 (Click here).',StudentList:'DAP',Course:'Posted Date: 12-03-2021'},
      {Id:'5', RollNo:'JNTUK – FDP Brochure for Two Week ONLINE Faculty Development Programme on “RECENT ADVANCES IN MATERIALS AND CHALLENGES IN MANUFACTURING TECHNIQUES” Sponsored by AICTE during 22nd March- 3rd April 2021 – Reg.',StudentList:'DAP ',Course:'Posted Date: 19-03-2021'},
      {Id:'6', RollNo:'JNTUK – Tender Notice No.01/ JNTUK / ED / KKD / ELEC / 2020-21, Date: 12/03/2021 (Providing street lights & flood lights for Dr. B. R Ambedkar statue near Principal office junction at JNTUK Kakinada (1st call))- O/o Chief Engineer – Reg',StudentList:'DAP',Course:'Posted Date: 19-03-2021'},
      {Id:'7', RollNo:'Final B. Tech R20 REGULATIONS-12-03-2021-APPROVED IN SENATE',StudentList:'DAP',Course:'Posted Date: 12-03-2021'},
      {Id:'8', RollNo:'Notification for Renewal of the existing Research Centers / grant of New Research Centers from the affiliated colleges of JNTUK – 2021 (Click here).',StudentList:'DAP',Course:'Posted Date: 12-03-2021'},
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


  render()
  {
  
  return (
   <View style={styles.container}>
     <Header />
     <Item searchBar rounded>
       <Icon name="search"  />
       <Input placeholder="Search" onChangeText={text => this.searchUser(text)} />  
     </Item>
       
      <Content>
          {this.state.usersFiltered.map(item => (
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