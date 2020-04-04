import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ForgotPasswordScreen from "../screens/ForgotPassword";
import RegistrationScreen from "../screens/Registration";
import LoginScreen from "../screens/Login";

const Stack = createStackNavigator();

class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} />
                    <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigator;