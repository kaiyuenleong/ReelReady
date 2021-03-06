import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Keyboard,
	Platform
} from "react-native";
import { RegistrationScreenRouteProp, RegistrationScreenNavigationProp } from "../navigator/types";
import { connect } from "react-redux";
import { newNameChanged, newEmailChanged, newPasswordChanged, newConfirmPasswordChanged, registerUser, cancelRegistration } from "../actions";
import ImagePickerComponent from "../components/ImagePicker";
import VerificationModal from "../components/VerificationModal";
import { Gradient, Button, Input } from "../components/common";
import styles from "../styles/Registration";

interface RegistrationAction {
	type: string;
	payload: string;
}

interface RegistrationProps {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	error: string;
	image: string;

	newNameChanged: (name: string) => RegistrationAction;
	newEmailChanged: (email: string) => RegistrationAction;
	newPasswordChanged: (password: string) => RegistrationAction;
	newConfirmPasswordChanged: (password: string) => RegistrationAction;
	cancelRegistration: any;
	registerUser: any;

	route: RegistrationScreenRouteProp;
	navigation: RegistrationScreenNavigationProp;
}

class Registration extends Component<RegistrationProps> {
	constructor(props: RegistrationProps) {
		super(props);
	}

	onCancel = () => {
		this.props.cancelRegistration();
		this.props.navigation.navigate('Login');
	}

	onNameChange = (name: string) => {
		this.props.newNameChanged(name);
	}

	onEmailChange = (email: string) => {
		this.props.newEmailChanged(email);
	}

	onPasswordChange = (password: string) => {
		this.props.newPasswordChanged(password);
	}

	onConfirmPasswordChange = (password: string) => {
		this.props.newConfirmPasswordChanged(password);
	}

	onButtonPress = () => {
		const { name, email, password, confirmPassword, image } = this.props;
		this.props.registerUser({ name, email, password, confirmPassword, image });
	}

	renderButton() {
		return (
			<Button onPress={this.onButtonPress}>SIGN UP</Button>
		)
	}

	render() {
		return (
			<Gradient>
				<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.contentContainer}>
							<ImagePickerComponent />
							<View style={styles.inputContainer}>
								<Input
									placeholder="NAME"
									onChangeText={this.onNameChange}
									value={this.props.name}
								/>
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
								<Input
									secureTextEntry
									placeholder="CONFIRM PASSWORD"
									onChangeText={this.onConfirmPasswordChange}
									value={this.props.confirmPassword}
								/>
								<Text style={styles.errorText}>{this.props.error}</Text>
							</View>
							<View style={styles.bottomContainer}>
								{this.renderButton()}
								<TouchableOpacity onPress={this.onCancel}>
									<Text style={styles.cancelText}>Cancel</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableWithoutFeedback>
					<VerificationModal />
				</KeyboardAvoidingView>
			</Gradient>
		)
	}
}

const mapStateToProps = ({ registration }: any) => {
	const { name, email, password, confirmPassword, error, loading, image } = registration;
	return { name, email, password, confirmPassword, error, loading, image };
}

export default connect(
	mapStateToProps,
	{ newNameChanged, newEmailChanged, newPasswordChanged, newConfirmPasswordChanged, registerUser, cancelRegistration })(Registration);