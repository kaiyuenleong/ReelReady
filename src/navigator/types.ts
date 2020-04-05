import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: {};
  Registration: {};
  ForgotPassword: {};
}

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type RegistrationScreenRouteProp = RouteProp<RootStackParamList, 'Registration'>;

type RegistrationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registration'>;

type ForgotPasswordScreenRouteProp = RouteProp<RootStackParamList, 'ForgotPassword'>;

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPassword'>;

export { 
  RootStackParamList, 
  LoginScreenRouteProp, 
  LoginScreenNavigationProp,
  RegistrationScreenRouteProp,
  RegistrationScreenNavigationProp,
  ForgotPasswordScreenRouteProp,
  ForgotPasswordScreenNavigationProp
};