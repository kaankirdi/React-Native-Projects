import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  //flatlist icince yazip tekrar tekrar tetiklenmesini onledik.

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => ( //ust tarafta component kullanilacaksa 
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrolView}>
            
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()} //ayirt etme isleminde kullanilir.
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign:'center',
  },
  scrolView:{
    margin:10,
    borderRadius:15,
  }
});

export default App;
