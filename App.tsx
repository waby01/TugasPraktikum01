/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

const PalindromeChecker = () => {
  const [inputText, setInputText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = () => {
    const formattedText = inputText.toLowerCase().replace(/\s/g, '');
    setIsPalindrome(formattedText === formattedText.split('').reverse().join(''));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan teks di sini"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Periksa" onPress={checkPalindrome} />
      {isPalindrome && <Text style={styles.result}>Ini adalah palindrome!</Text>}
      {!isPalindrome && <Text style={styles.result}>Ini bukan palindrome.</Text>}
      <Image
        style={{
          width: 240,
          height: 240,
        }}
        source= {{
          uri: "https://www.google.com/imgres?q=ice%20nine%20kills%20&imgurl=https%3A%2F%2Fphotos.bandsintown.com%2Flarge%2F15778768.jpeg&imgrefurl=https%3A%2F%2Ficeninekills.com%2F&docid=abcwF1Fbo32qhM&tbnid=tQuPvVYeBp5rNM&vet=12ahUKEwjflerT4fuFAxXjzTgGHWzGDrIQM3oECBUQAA..i&w=720&h=720&hcb=2&ved=2ahUKEwjflerT4fuFAxXjzTgGHWzGDrIQM3oECBUQAA"
        }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PalindromeChecker;
