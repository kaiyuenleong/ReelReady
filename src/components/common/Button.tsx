import React from "react";
import CSS from 'csstype';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface ButtonProps {
	onPress: () => void;
}

const Button: React.StatelessComponent<ButtonProps> = ({children, onPress}) => {
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: '400',
		letterSpacing: 0.5,
	},
	buttonStyle: {
		justifyContent: 'center',
		alignSelf: 'center',
		width: '100%',
		height: 60,
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		borderRadius: 12,
		borderWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.4)',
	}
});

export { Button };