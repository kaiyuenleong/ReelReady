import React, { Component } from "react";
import { Text, Image, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { LoginScreenRouteProp, LoginScreenNavigationProp } from "..//navigator/types";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Gradient, Button, Input } from "../components/common";
import styles from "../styles/Login";

interface LoginProps {
	email: string;
	password: string;
	error: string;
	loading: boolean;
	emailChanged: any;
	passwordChanged: any;
	loginUser: any;
	route: LoginScreenRouteProp;
	navigation: LoginScreenNavigationProp;
}

interface LoginState {

}

class Login extends Component<LoginProps, LoginState> {

	register = () => {
		this.props.navigation.navigate('Registration');
	}

	forgotPassword = () => {
		this.props.navigation.navigate('ForgotPassword');
	}

	onEmailChange = (text: string) => {
		this.props.emailChanged(text);
	}

	onPasswordChange = (text: string) => {
		this.props.passwordChanged(text);
	}

	onButtonPress = () => {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderButton() {
		return (
			<Button onPress={this.onButtonPress}>SIGN IN</Button>
		)
	}

	render() {
		return (
			<Gradient>
				<KeyboardAvoidingView behavior="padding" style={styles.contentContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../../assets/images/logo_w_text.png')}
							resizeMode="contain"
							style={styles.image}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Input
							placeholder="EMAIL"
							onChangeText={this.onEmailChange}
							value={this.props.email}
						/>
						<Input
							secureTextEntry
							placeholder="PASSWORD"
							onChangeText={this.onPasswordChange}
							value={this.props.password}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<View style={styles.textContainer}>
							<Text style={styles.errorText}>
								{/* Error message should disappear after a short while or if a button is pressed */}
								{this.props.error}
							</Text>
							<TouchableOpacity onPress={this.forgotPassword}>
								<Text style={styles.forgotPasswordText}>
									Forgot password?
								</Text>
							</TouchableOpacity>
						</View>
						{this.renderButton()}
						<TouchableOpacity onPress={this.register}>
							<Text style={styles.registrationText}>New User? Create an Account</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</Gradient>
		)
	}
}

const mapStateToProps = ({ auth }: any) => {
	const { email, password, error, loading } = auth;
	return { email, password, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);