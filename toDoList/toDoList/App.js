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
  const [text, setText] = useState(''); // TextInput'dan gelen metni saklamak için kullanıyoruz
  const [data, setData] = useState([]); // Eklenen metinleri saklamak için kullanıyoruz
  const [counter, setCounter] = useState(0);

  const handleAddText = () => {
    if (text.trim() !== '') {
      // Metin boş değilse ekle
      setData([...data, { text, id: counter }]);
      setCounter(counter + 1); // Sayaçı artır
      setText(''); // TextInput'u temizle
    }
  };

  const handleDeleteText = (id) => {
    // Metini silmeye çalıştığınızda, metinin üzerine çizgi çek ve sayaçı azalt
    const updatedData = data.map((item) => {
      if (item.id === id) {
        if (item.isPressed) {
          return { ...item, isPressed: false, isDeleted: false }; // Task'a bir daha basıldığında renk ve çizgiyi geri al
        } else {
          return { ...item, isPressed: true, isDeleted: true }; // Task'a basıldığında isPressed'i true yap ve çizgi çek
        }
      }
      return item;
    });
  
    setData(updatedData);
    setCounter(updatedData.filter((item) => !item.isDeleted).length); // Silinmemiş görevleri say
  };
  
  
  const renderListItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.tasks, item.isPressed ? styles.taskPressed : null]}
      onPress={() => handleDeleteText(item.id)}
 // Metin silinmişse dokunulamaz
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
    margin:10, // FlatList'in ekran dışına taşmasını önler
    flexDirection:'row',
    
    
  },
  deletedText: {
    textDecorationLine: 'line-through', // Metin üzerine çizgi çek
  },
  taskPressed: {
    backgroundColor: 'red',
    // Diğer stil özellikleri burada
  },
  
});

export default App;
