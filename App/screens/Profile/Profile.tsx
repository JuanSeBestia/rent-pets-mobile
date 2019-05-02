import React from "react";
import { Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
} from "native-base";

import {  NavigationScreenProps } from "react-navigation";

interface Props extends NavigationScreenProps {}

export default class Profile extends React.Component<Props> {
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  static navigationOptions = ({ navigation } : NavigationScreenProps) => {
    return {
      header: (
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
      )
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Goto EditScreen One</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}