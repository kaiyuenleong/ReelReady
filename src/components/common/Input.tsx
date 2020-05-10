import React from "react";
import { TextInput, View, StyleSheet } from 'react-native';

interface InputProps {
    value: string;
    onChangeText: ((text: string) => void);
    placeholder: string;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#FFFFFF',
    fontSize: 15,
    padding: 2,
    borderBottomColor: 'rgba(217, 217, 217, 1)',
    borderBottomWidth: 0.5,
    flex: 1
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { Input };
