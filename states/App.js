import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Switch,
} from 'react-native';
const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'kafa.exe', isFavorite: false},
  {id: 2, name: 'bug.exe', isFavorite: false},
  {id: 3, name: 'rock.exe', isFavorite: true},
  {id: 4, name: 'drink.exe', isFavorite: false},
  {id: 5, name: 'esc.exe', isFavorite: false},
];

const App = () => {
  const [cafeList, setcafeList] = useState(data);
  const [showOnlyFavourites, setshowOnlyFavourites] = useState(false);

  function onFavoChange(isSelected) {

    setshowOnlyFavourites(isSelected);
    isSelected ? 
      setcafeList(cafeList.filter(cafe => cafe.isFavorite)) 
      : setcafeList(data);
    
    
  }
  


  return (
    <SafeAreaView>
      <View style={{padding:10}}>
        <Text>Show only favourites</Text>
      </View>
      <Switch value={showOnlyFavourites} onValueChange={(onFavoChange)}></Switch>
      <FlatList
        data={cafeList}
        renderItem={({item}) => (
          <Text style={{fontSize: 25, textAlign: 'center'}}>{item.name}</Text>
        )}></FlatList>
    </SafeAreaView>
  );
};

export default App;
