import React, {useState}from "react";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,TextInput} from "react-native";

const App2 = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);

    const sumNumbers = ()=> {
        const sum =  ( number1 +  number2) ;
        setSum(sum);
    }

    return(
        <SafeAreaView>
            <View>
                <TextInput value={number1.toString()} onChangeText={(text) => setNumber1(parseInt(text))}></TextInput>
                <TextInput value={number2.toString()} onChangeText={(text) => setNumber2(parseInt(text))}></TextInput>
                <Button onPress={sumNumbers} title="calcultate"></Button>
                <Text>{sum}</Text>
              
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#ccc',
        margin:100,
        padding:10,
        fontSize:25,
        textAlign:"center",
        



    }
})
export default App2;