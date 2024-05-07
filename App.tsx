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
          uri: "https://beebom.com/wp-content/uploads/2024/02/firefly-and-trailblazer-honkai-star-rail.jpg?w=1024"
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
