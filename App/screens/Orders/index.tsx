import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { navigatorDefaultOptions } from '../../util/navigator';
import I18n from '../../I18n';
import { Container, Content, Text, View } from 'native-base';
import { OrderStore } from '../../mobx/OrderStore';

interface Props {
  OrderStore: OrderStore;
}

@inject('OrderStore')
@observer
export class Orders extends Component<Props> {
  static navigationOptions = navigatorDefaultOptions({
    title: I18n.t('Orders'),
  });
  render() {
    console.log('Orders:props', { props: this.props });

    return (
      <Container>
        <Content padder>
          <Text>ORDERS</Text>
          {this.props.OrderStore.orders.map(order => (
            <View>
              <Text>
                {I18n.t('id')}:{order.id}
              </Text>
              <Text>
                {I18n.t('name')}:{order.pet.name}
              </Text>
              <Text>
                {I18n.t('price')}:{order.price}
              </Text>
            </View>
          ))}
        </Content>
      </Container>
    );
  }
}

export default Orders;
