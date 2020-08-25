/* eslint-disable react-native/no-inline-styles */
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

export default class Tab1 extends Component {
  constructor(props) {
    super(props);

    this.state = { topNews: [] };
  }

  componentDidMount() {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b01b6d6b77414a63807159aba9a2786e')
      .then(response => response.json())
      .then(data => {
        this.setState({ topNews: data.articles });
        console.log(data.articles);
      });
}

  render() {
    return (
      <Container style={styles.container}>
            <Content padder>
            <Grid>
            <Row>
            <Col style={{ height: 300 }}>
                <Image
                   source={{
                    uri: 'http://code.gabriellealexa.com/icons/28.jpg',
                  }}
                  style={{
                    height: 220,
                    width: 185,
                    borderRadius: 20,
                    alignSelf: 'center',
                    marginVertical: 5,
                  }} />
                  <Text note>Mashable</Text>
                <Text style={{ alignSelf: 'center' }}>Is #MeToo Almost Over? Experts Weigh In</Text>
                </Col>
                <Col style={{ height: 150 }}>
        <Image
                  source={{
                    uri: 'http://code.gabriellealexa.com/icons/23.jpg',
                  }}
                  style={{
                    height: 220,
                    width: 185,
                    borderRadius: 20,
                    alignSelf: 'center',
                    marginVertical: 5,
                  }}
                />
                <Text note>Vice</Text>
                <Text style={{ alignSelf: 'center' }}>What Ariana Grande's Bisexual Anthem Means</Text>
                </Col>
                </Row>
                </Grid>
                <H2 style={styles.top}>Top News</H2>
          <List>
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