import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";
import Profile from "./Profile";
import EditScreenOne from "./EditScreenOne";
import EditScreenTwo from "./EditScreenTwo";

const DrawNav = createStackNavigator(
  {
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: "Profile"
  }
);
export default DrawNav;