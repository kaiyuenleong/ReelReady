import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientProps {
}

const Gradient: React.FC<GradientProps> = ({children}) => {
	const { viewStyle, linearGradientStyle } = styles;

	return (
		<View style={viewStyle}>
			<LinearGradient 
				colors={['#A7F8D8', '#4CECD9', '#191558', '#110038']}
				locations={[0, 0.10, 0.80, 1]}
				style={linearGradientStyle}
			>
				{children}
			</LinearGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1
	},
	linearGradientStyle: {
		flex: 1
	}
});

export { Gradient };