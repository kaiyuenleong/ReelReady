import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./types";

// Unauthenticated Screens
import ForgotPasswordScreen from "../screens/ForgotPassword";
import RegistrationScreen from "../screens/Registration";
import LoginScreen from "../screens/Login";

// Authenticated Screens
import HomeScreen from "../screens/Home";

const RootStack = createStackNavigator<RootStackParamList>();

interface AppNavigatorProps {
	isAuthenticated: boolean;
}

class AppNavigator extends Component<AppNavigatorProps> {
	constructor(props: AppNavigatorProps) {
		super(props);
	}

	returnNonAuthenticatedScreens() {
		return (
			<RootStack.Navigator>
				<RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, animationEnabled: false }} />
				<RootStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false, animationEnabled: false }} />
				<RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false, animationEnabled: false }} />
			</RootStack.Navigator>
		)
	}

	returnAuthenticatedScreens() {
		return (
			<RootStack.Navigator>
				<RootStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
			</RootStack.Navigator>
		)
	}

	render() {
		return (
			<NavigationContainer>
				{this.props.isAuthenticated ? this.returnAuthenticatedScreens() : this.returnNonAuthenticatedScreens()}
			</NavigationContainer>
		)
	}
}

export default AppNavigator;