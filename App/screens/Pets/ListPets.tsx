import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Button,
  Icon,
  Right,
} from 'native-base';
import { Image } from 'react-native';
import mockPets from '../../util/Moks/api';
import { iPet } from '../../util/models/pets';

export const PetItem = ({ pet }: { pet: iPet }) => (
  <Card>
    <CardItem>
      <Left>
        <Body>
          <Text>{pet.name}</Text>
          <Text note>{pet.category}</Text>
        </Body>
      </Left>
      <Right>
        <Body>
          <Text>{'price/day'}</Text>
          <Text note>{'$' + pet.price}</Text>
        </Body>
      </Right>
    </CardItem>
    <CardItem cardBody>
      <Image
        source={{ uri: pet.image }}
        style={{ height: 200, width: 0, flex: 1 }}
      />
    </CardItem>
    <CardItem>
      <Body>
        <Text numberOfLines={2}>{pet.description}</Text>
      </Body>
    </CardItem>
    <Button block>
      <Text>{'Order'}</Text>
    </Button>
  </Card>
);

export class ListPets extends Component {
  pets = mockPets;
  render() {
    return this.pets.map(pet => <PetItem key={pet.id} pet={pet} />);
  }
}

export default ListPets;
