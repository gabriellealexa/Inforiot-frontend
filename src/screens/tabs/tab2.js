/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {Image, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  H3,
  Left,
  Body,
  Right,
  Button,
  Card,
  CardItem,
  Icon,
  H2
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faStarOfLife} from '@fortawesome/free-solid-svg-icons';

const deviceWidth = Dimensions.get("window").width;


export default class Tab2 extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Card style={{flex: 0, marginLeft: 10, marginRight: 10}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://galoremag.com/wp-content/themes/galore/images/galore-logo-short-straight-black.png'}} />
                <Body>
                  <Text>Galore Magazine</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://code.gabriellealexa.com/icons/07.jpg'}} style={{height: 200, width: 375, flex: 1, alignSelf: 'center', resizeMode: 'cover' }}/>
                <Text style={{ textDecorationLine: 'underline', color: '#009387', fontSize: 18, marginTop: 10}}>This Woman Built A Media Brand Overnight</Text>
                <Text style={{marginBottom: 5}}>
                  She is redesigning what it means to be a leader during COVID-19 and she does it every single day.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <List>
          <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://code.gabriellealexa.com/icons/13.jpg' }} />
              </Left>
              <Body>
                <Text>What Therapists Still Need To Learn</Text>
                <Text note numberOfLines={3}>A post about how therapists need to marginalized people </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://code.gabriellealexa.com/icons/20.jpg' }} />
              </Left>
              <Body>
                <Text>Louis C.K. Is A Terrible Human</Text>
                <Text note numberOfLines={3}>This is not up for debate. And he continues to avoid accountability, it's tragic.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'http://code.gabriellealexa.com/icons/07.jpg' }} />
              </Left>
              <Body>
                <Text>This Woman Built A Media Brand Overnight</Text>
                <Text note numberOfLines={3}>Now, she's redesigning what it means to be a leader during COVID-19.</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
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