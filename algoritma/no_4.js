// Import lodash
const _ = require('lodash');

// Fungsi untuk menghitung hasil dari pengurangan jumlah diagonal matriks
function subtractDiagonal(matrix) {
    // Hitung jumlah diagonal pertama
    const diagonal1Sum = _.sum(_.map(matrix, (row, i) => row[i]));

    // Hitung jumlah diagonal kedua
    const diagonal2Sum = _.sum(_.map(matrix, (row, i) => row[matrix.length - 1 - i]));

    // Hitung hasil pengurangan
    const result = diagonal1Sum - diagonal2Sum;

    return result;
}

// Matriks contoh
const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

// Hitung hasil pengurangan jumlah diagonal
const result = subtractDiagonal(matrix);

// Cetak hasil
console.log(result); // Output: 3