const _ = require('lodash');

// String awal
const inputString = "NEGIE1";

// Pisahkan huruf dan angka
const letters = inputString.slice(0, -1); // Ambil huruf tanpa angka
const number = inputString.slice(-1); // Ambil angka

// Balikkan urutan huruf
const reversedLetters = _.reverse(letters.split('')).join('');

// Hasil akhir
const result = reversedLetters + number;

console.log(result); // Output: "EIGEN1"