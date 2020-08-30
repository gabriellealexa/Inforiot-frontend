/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import { Image } from 'react-native';
import { Left, Body, Text, Card, CardItem } from 'native-base';


export default class FeatItem extends Component {

constructor(props) {
    super(props);
    this.data = props.data;
}

render() {

var first =  function(array, n) {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

    return (
        <Card style={{flex: 0, marginLeft: 10, marginRight: 10, borderRadius: 20, borderColor: '#f8e5e5', borderWidth: 3, overflow: 'hidden' }}>
            <CardItem style={{backgroundColor: '#f8e5e5' }} >
              <Left>
                <Body>
                  <Text>{first(this.data).source.name}</Text>
                  <Text note>{first(this.data).publishedAt}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: first(this.data).urlToImage}} style={{height: 160, width: 360, flex: 1, alignSelf: 'center', resizeMode: 'cover' }}/>
                <Text style={{ textDecorationLine: 'underline', color: '#FA255E', fontSize: 16, marginTop: 10}}>{first(this.data).title}</Text>
                <Text numberOfLines={3} style={{marginBottom: 5}}>
                  {first(this.data).description}
                </Text>
              </Body>
            </CardItem>
            </Card>
        );
    }
}