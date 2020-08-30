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
import FeatItem from '../../component/featItem';


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
          data: data
        });
      }, error => {
        Alert.alert('Error', 'Something went wrong!');
      }
      );
  }

  render() {
    console.log(this.state.data);

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
      <FeatItem data={this.state.data} />
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