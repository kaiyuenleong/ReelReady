import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import CodeInput from "react-native-confirmation-code-input";

interface VerificationModalProps {
  isVisible: boolean;
  error?: string;
  setModalVisible: () => void;
}

class VerificationModal extends Component<VerificationModalProps> {
  constructor(props: VerificationModalProps) {
    super(props);
  }

  onResendCode = () => {
    console.log("On resend code pressed");
  }

  onVerificationFulfill = () => {
    console.log("Verification fulfilled");
  }
  
  render() {
    const { isVisible } = this.props;
    const { 
      modalStyle,
      modalTopViewStyle,
      modalBottomViewStyle,
      verificationCodeHeaderStyle,
      verificationCodeContentStyle,
      errorTextStyle,
      resendCodeStyle
    } = styles;

    return (
      <View>
        <Modal
          isVisible={isVisible}
          avoidKeyboard={true}
          onBackdropPress={this.props.setModalVisible}
        >
          <View style={modalStyle}>
            <View style={modalTopViewStyle}>
              <Text style={verificationCodeHeaderStyle}>Enter Verification Code</Text>
              <Text style={verificationCodeContentStyle}>
                Please check your email and enter the verification code below.
              </Text>
            </View>
            <View style={modalBottomViewStyle}>
              <View style={{ flex: 2 }}>
                <CodeInput
                  keyboardType="numeric"
                  codeLength={6}
                  size={30}
                  space={10}
                  className="border-b"
                  onFulfill={this.onVerificationFulfill}
                  codeInputStyle={{ fontWeight: "800", color: "#000000", fontSize: 16 }}
                  activeColor="#4FD3CA"
                  inactiveColor="#000000"
                  containerStyle={{ marginTop: 0 }}
                />
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={errorTextStyle}>{this.props.error}</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.onResendCode}>
                  <Text style={resendCodeStyle}>Resend Code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: "white",
    borderRadius: 12,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  modalTopViewStyle: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly"
  },
  modalBottomViewStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  verificationCodeHeaderStyle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  verificationCodeContentStyle: {
    fontSize: 16,
    lineHeight: 20
  },
  errorTextStyle: {
    fontSize: 13,
    color: "#F5606D",
    textAlign: "center"
  },
  resendCodeStyle: {
    fontSize: 16,
    color: "#4FD3CA"
  }
});

export default VerificationModal;