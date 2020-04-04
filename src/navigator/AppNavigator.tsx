import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./types";

import ForgotPasswordScreen from "../screens/ForgotPassword";
import RegistrationScreen from "../screens/Registration";
import LoginScreen from "../screens/Login";

const RootStack = createStackNavigator<RootStackParamList>();

class AppNavigator extends Component {
	render() {
		return (
			<NavigationContainer>
				<RootStack.Navigator>
					<RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
					<RootStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
					<RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
				</RootStack.Navigator>
			</NavigationContainer>
		)
	}
}

export default AppNavigator;