# Simple Encryption and Decryption

This repository contains two JavaScript functions that demonstrate a simple way to encrypt and decrypt text using ASCII character codes. The encryption function takes a string as input, shifts each character's ASCII value by 5, and returns an encrypted string. The decryption function reverses this process, shifting each character's ASCII value back by 5 to retrieve the original text.

## Features

1. Encrypt text by shifting each character's ASCII value by 5
2. Decrypt encrypted text by reversing the shift
3. Easy to understand and implement

## Prerequisites

- Basic knowledge of JavaScript

## Functions

### encrypt

`function encrypt(text)`

This function takes a string `text` as input and encrypts it by shifting each character's ASCII value by 5. The encrypted text is then logged to the console.

### decrypt

`function decrypt(text)`

This function takes an encrypted string `text` as input and decrypts it by shifting each character's ASCII value back by 5. The decrypted text is then logged to the console.

## Usage

1. Copy the `encrypt` and `decrypt` functions into your JavaScript code.
2. Call the `encrypt` function with a string you want to encrypt, e.g., `encrypt("Hello")`.
3. The encrypted text will be logged to the console.
4. Call the `decrypt` function with the encrypted text to retrieve the original text, e.g., `decrypt("Mjqqt")`.
5. The decrypted text will be logged to the console.

## Note

This simple encryption and decryption method is not secure and should not be used for protecting sensitive data. It is meant for educational purposes and as an introduction to basic encryption concepts. For secure encryption, consider using more advanced encryption algorithms like AES or RSA.

## License

This code is not licensed and is free for public use.
