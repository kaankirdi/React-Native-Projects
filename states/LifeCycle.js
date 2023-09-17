import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

const LifeCycle = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('number updated : ' + number);
  }, [number]);
 
  useEffect(()=> {
    console.log('mounting...');
  },[])
  const [helloFlag, setHelloFlag] = useState(true);

  function uptadeFlag() {
        setHelloFlag(!helloFlag)
  
  }
  return (
    <SafeAreaView>
      <Text>asdas</Text>
      <Text>Number : {number}</Text>
      <Button 
      title="Up!" 
      onPress={() => setNumber(number + 1)}></Button>
      <Button title="asd" onPress={uptadeFlag}></Button>
      {helloFlag && <Hello/>} 
      {/* aşagıdaki Hello componentini yuakrıda cagirdim. ve kosulu ile  */}
    </SafeAreaView>
  );
};

export default LifeCycle;

function Hello() {
    useEffect(()=> {
        console.log("merhaba dünya")

        return() => {
            console.log("silindim")
        }
    },[])
    return (
        <View style={{backgroundColor:'aqua',padding:10}}>
             <Text>asd</Text>
        </View>
    )
  
}
