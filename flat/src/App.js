import React from "react";
import { Text,SafeAreaView,View,FlatList,StyleSheet,Image,TextInput} from "react-native";
import pati_data from './patistore.json';
import Pcard from './components/PatiCard'

const App = ()=> {

  return(
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>PATIKASTORE</Text>
        <TextInput style={styles.inputType} placeholder="Search..."></TextInput>
        
        <View style={styles.flatlist}>

          <FlatList data={pati_data} numColumns={2} 
          renderItem={({item}) => <Pcard products={item}></Pcard>}>


          </FlatList>
        </View>
       
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
  flatlist:{
    backgroundColor:"white",
    alignItems:'center',
  },
  header:{
    fontSize:35,
    color:'purple',
    fontWeight:'bold',
    textAlign:'center'
  },
  inputType:{
    padding:10,
    borderRadius:18,
    margin:20,
    backgroundColor:'#eceff1',
    fontSize:20,
  }

});


export default App;
