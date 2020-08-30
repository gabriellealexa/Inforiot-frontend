/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs, Body, Title, Right, Left, Footer, FooterTab, Button, Text, Badge, Card, CardItem} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'


export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FA255E' }} hasTabs>
        <Left />
        <Body>
            <Title style={{ color: '#F8E5E5' }}>Info Riot</Title>
        </Body>
        <Right />
        </Header>

        <Tabs>
          <Tab heading="Top Headlines">
            <Tab1 />
          </Tab>
          <Tab heading="U.S. Politics">
            <Tab2 />
          </Tab>
        </Tabs>

       <Footer>
          <FooterTab>
            <Button active>
              <FontAwesomeIcon icon={ faNewspaper} />
            </Button>
            <Button>
              <FontAwesomeIcon icon={ faNewspaper } />
            </Button>
            <Button>
              <FontAwesomeIcon icon={ faNewspaper }/>
            </Button>
            <Button>
              <FontAwesomeIcon icon={ faNewspaper } />
            </Button>
          </FooterTab>
        </Footer>


      </Container>
    );
  }
}