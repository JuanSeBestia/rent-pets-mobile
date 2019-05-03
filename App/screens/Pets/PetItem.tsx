import React from 'react';
import { Card, CardItem, Left, Body, Text, Button, Right } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import { iPet } from '../../util/models/pets';
import { NavigationService } from '../../util/navigator';
import { NavigationActions } from 'react-navigation';

export const PetItem = ({ pet }: { pet: iPet }) => {
  const onPress = () => {
    NavigationService.dispatch(
      NavigationActions.navigate({
        routeName: 'PetScreenDetail',
        params: { pet: pet },
      }),
    );
  };
  return (
    <TouchableOpacity onPress={onPress}>
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
        <Button block onPress={onPress}>
          <Text>{'Order'}</Text>
        </Button>
      </Card>
    </TouchableOpacity>
  );
};
