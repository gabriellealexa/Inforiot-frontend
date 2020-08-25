/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {Image, Dimensions, StyleSheet } from 'react-native';
import GithubIcon from 'react-native-eva-icons/icons/Github';
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
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faStarOfLife} from '@fortawesome/free-solid-svg-icons';

const deviceWidth = Dimensions.get("window").width;

export default class Tab1 extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <FontAwesomeIcon icon={faStarOfLife} />
                <Body>
                  <Text>Associated Press</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri: 'http://code.gabriellealexa.com/icons/25.jpg',
                  }}
                  style={{
                    height: 200,
                    width: deviceWidth / 1.18,
                    alignSelf: 'center',
                    resizeMode: 'cover',
                    marginVertical: 5,
                  }}
                />
                <H3>Headline Will Go Here</H3>
                <Text>
                <GithubIcon width={48} height={48}/>
                  We don't need apologies or pity in the Trump era. We need
                  loved ones who make it easier to cope.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <FontAwesomeIcon icon={faHeart} />
                  <Text>1,926 hearts</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
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
    marginBottom: 15
  }
});