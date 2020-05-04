import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
// import * as ImagePicker from "expo-image-picker";
import { RegistrationScreenRouteProp, RegistrationScreenNavigationProp } from "../navigator/types";
import { connect } from "react-redux";
import { newNameChanged, newEmailChanged, newPasswordChanged, newConfirmPasswordChanged, registerUser } from "../actions";
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

	newNameChanged: (name: string) => RegistrationAction;
	newEmailChanged: (email: string) => RegistrationAction;
	newPasswordChanged: (password: string) => RegistrationAction;
	newConfirmPasswordChanged: (password: string) => RegistrationAction;
	registerUser: any;

	route: RegistrationScreenRouteProp;
	navigation: RegistrationScreenNavigationProp;
}

class Registration extends Component<RegistrationProps> {
	onCancel = () => {
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
		const { name, email, password, confirmPassword } = this.props;
		this.props.registerUser({ name, email, password, confirmPassword });
	}

	renderButton() {
		return (
			<Button onPress={this.onButtonPress}>SIGN UP</Button>
		)
	}

	render() {
		return (
			<Gradient>
				<View style={styles.contentContainer}>
					{/* Need to add image picker */}
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
					</View>
					<View style={styles.buttonContainer}>
						{this.renderButton()}
						<TouchableOpacity onPress={this.onCancel}>
							<Text style={styles.cancelText}>
								Cancel
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Gradient>
		)
	}
}

const mapStateToProps = (state: any) => {
	const { name, email, password, confirmPassword, error } = state;
	return { name, email, password, confirmPassword, error };
}

export default connect(
	mapStateToProps,
	{ newNameChanged, newEmailChanged, newPasswordChanged, newConfirmPasswordChanged, registerUser })(Registration);