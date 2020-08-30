/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {Image, Dimensions, StyleSheet, Alert, View, ActivityIndicator } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  Container,
  Header,
  Content,
  List,
  Text,
  H3,
  Card,
  CardItem,
  Icon,
  H2,
  Left,
  Body,
  Thumbnail
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faStarOfLife} from '@fortawesome/free-solid-svg-icons';

import { getArticles } from '../../service/news';
import DataItem from '../../component/dataItem';


const deviceWidth = Dimensions.get("window").width;

export default class Tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, data: null };
  }

  componentDidMount() {
      getArticles().then(data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      }, error => {
        Alert.alert('Error', 'Something went wrong!');
      }
      );
}

  render() {
    console.log(this.state.data);

        var first =  function(array, n) {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

    let view = this.state.isLoading ? (
      <View>
      <ActivityIndicator animating={this.state.isLoading}/>
      <Text style={{marginTop: 10}}>Please Wait...</Text>
      </View>
    ) : (
      <List
          dataArray={this.state.data.slice(1)}
          renderRow={(item) => {
            return <DataItem data={item} />;
          }}
          />
    );

    let featured = this.state.isLoading ? (
      <View>
      <ActivityIndicator animating={this.state.isLoading}/>
      <Text style={{marginTop: 10}}>Please Wait...</Text>
      </View>
    ) : (
      <Card style={{flex: 0, marginLeft: 10, marginRight: 10}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{first(this.state.data).source.name}</Text>
                  <Text note>{first(this.state.data).publishedAt}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: first(this.state.data).urlToImage}} style={{height: 200, width: 370, flex: 1, alignSelf: 'center', resizeMode: 'cover' }}/>
                <Text style={{ textDecorationLine: 'underline', color: '#FA255E', fontSize: 16, marginTop: 10}}>{first(this.state.data).title}</Text>
                <Text numberOfLines={3} style={{marginBottom: 5}}>
                  {first(this.state.data).content}
                </Text>
              </Body>
            </CardItem>
            </Card>
    );

    return (
      <Container style={styles.container}>
            <Content padder>
            {featured}
          {view}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb: {
    marginTop: 10,
    marginBottom: 15,
  },
  top: {
    textDecorationLine: 'underline',
  }
});