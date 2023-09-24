import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const App = () => {
  const [text, setText] = useState(''); 
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleAddText = () => {
    if (text.trim() !== '') {
      // Metin boş değilse ekle
      setData([...data, { text, id: counter }]);
      setCounter(counter + 1); 
      setText(''); 
    }
  };

  const handleDeleteText = (id) => {
  
    const updatedData = data.map((item) => {
      if (item.id === id) {
        if (item.isPressed) {
          return { ...item, isPressed: false, isDeleted: false }; 
        } else {
          return { ...item, isPressed: true, isDeleted: true }; 
        }
      }
      return item;
    });
  
    setData(updatedData);
    setCounter(updatedData.filter((item) => !item.isDeleted).length); 
  };
  
  
  const renderListItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.tasks, item.isPressed ? styles.taskPressed : null]}
      onPress={() => handleDeleteText(item.id)}

    >
      <Text style={item.isDeleted ? styles.deletedText : {}}>{item.text}</Text>
    </TouchableOpacity>
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headrow}>
        <Text style={styles.header}>Yapılacaklar</Text>
        <Text style={styles.header}>{counter}</Text>
      </View>

      <View style={styles.flatlistContainer}>
        <FlatList
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View style={styles.body}>
        <TextInput
          autoCorrect
          value={text}
          style={styles.input}
          onChangeText={(newText) => setText(newText)}
          placeholderTextColor="white"
          placeholder="Yapılacak..."
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleAddText}>
          <Text style={styles.text}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  headrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    color: '#FFA500',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  body: {
    flex: 2,
    margin: 15,
    backgroundColor: '#36474F',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    padding: 30,
    borderRadius: 12,
  },
  input: {
    backgroundColor: '#36474F',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    color:'white',
  },
  button: {
    backgroundColor: 'grey',
    top: 15,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  tasks: {
    backgroundColor: 'green',
    padding: 10,
    margin: 12,
    borderRadius: 10,
  },
  flatlistContainer: {
    flex: 3,
    margin:10, 
    flexDirection:'row',
    
    
  },
  deletedText: {
    textDecorationLine: 'line-through', 
  },
  taskPressed: {
    backgroundColor: 'red',
 
  },
  
});

export default App;
