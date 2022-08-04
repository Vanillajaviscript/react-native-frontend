import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          // value={}
          // onChangeText={text =>}
          style={styles.input}
          />
        <TextInput
          placeholder="Password"
          // value={}
          // onChangeText={text =>}
          style={styles.input}
          secureTextEntry
          />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
        />
        <Text style={styles.button}>Login</Text>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
        />
        <Text style={styles.button}>Register</Text>
      </View>
    </KeyboardAvoidingView>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})