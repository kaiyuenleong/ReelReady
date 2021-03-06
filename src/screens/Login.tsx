import React, { Component } from "react";
import { Text, Image, View, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from "react-native";
import { LoginScreenRouteProp, LoginScreenNavigationProp } from "../navigator/types";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Gradient, Button, Input } from "../components/common";
import { Images } from "../../assets/images";
import styles from "../styles/Login";

interface LoginAction {
	type: string;
	payload: string;
}

interface LoginProps {
	email: string;
	password: string;
	error: string;
	loading: boolean;

	emailChanged: (text: string) => LoginAction;
	passwordChanged: (text: string) => LoginAction;
	loginUser: any;

	route: LoginScreenRouteProp;
	navigation: LoginScreenNavigationProp;
}

class Login extends Component<LoginProps> {

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
				<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.contentContainer}>
							<View style={styles.imageContainer}>
								<Image
									source={Images.logoWithText}
									resizeMode="contain"
									style={styles.image}
								/>
							</View>
							<View style={styles.centerContainer}>
								<View style={styles.commonContainer}>
									<View style={styles.fieldsContainer}>
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
									<View style={styles.textContainer}>
										<Text style={styles.errorText}>{this.props.error}</Text>
										<TouchableOpacity onPress={this.forgotPassword}>
											<Text style={styles.forgotPasswordText}>
												Forgot password?
										</Text>
										</TouchableOpacity>
									</View>
								</View>
								<View style={styles.commonContainer}>
									{this.renderButton()}
									<TouchableOpacity onPress={this.register}>
										<Text style={styles.registrationText}>
											New user?  
											<Text style={styles.registrationSubtext}> Create an account</Text>
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</Gradient>
		)
	}
}

const mapStateToProps = ({ login }: any) => {
	const { email, password, error, loading } = login;
	return { email, password, error, loading };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);