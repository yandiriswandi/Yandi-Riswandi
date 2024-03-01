// Import lodash
const _ = require('lodash');

// Fungsi untuk mencari kata terpanjang dari sebuah kalimat
function longest(sentence) {
    // Pisahkan kalimat menjadi array kata-kata
    const words = sentence.split(' ');
    
    // Temukan kata terpanjang dengan menggunakan _.maxBy()
    const longestWord = _.maxBy(words, word => word.length);
    
    return longestWord;
}

// Contoh kalimat
const sentence = "Saya sangat senang mengerjakan soal algoritma";

// Cetak hasil
console.log(longest(sentence)); // Output: "mengerjakan"