import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PatiCard.style';

const Pcard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.image_product}
          source={{uri: props.products.imgURL}}></Image>
      </View>
      <Text style={styles.product_title}>{props.products.title}</Text>
      <Text style={styles.product_price}>Price : {props.products.price}</Text>
      <Text style={styles.product_instock}>In Stock : {props.products.inStock ? 'In Stock' : 'Out Of Stock'}</Text>
    </View>
  );
};
export default Pcard;
