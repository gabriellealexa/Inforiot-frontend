/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, View } from 'native-base';


export default class DataItem extends Component {

constructor(props) {
    super(props);
    this.data = props.data;
}

render() {
    return (
        <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 'http://via.placeholder.com/150' }} />
              </Left>
              <Body>
                <Text numberOfLines={3}>{this.data.title}</Text>
                <Text note numberOfLines={3}>{this.data.description}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
        );
    }
}