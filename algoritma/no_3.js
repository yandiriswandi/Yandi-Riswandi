// Import lodash
const _ = require('lodash');

// Fungsi untuk menghitung kemunculan kata-kata QUERY dalam INPUT
function countOccurrences(INPUT, QUERY) {
    // Hitung kemunculan kata-kata dalam INPUT
    const inputCounts = _.countBy(INPUT);

    // Map hasil ke array output
    const output = QUERY.map(word => inputCounts[word] || 0);

    return output;
}

// Array INPUT dan QUERY
const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

// Hitung kemunculan kata-kata QUERY dalam INPUT
const OUTPUT = countOccurrences(INPUT, QUERY);

// Cetak hasil
console.log(OUTPUT); // Output: [1, 0, 2]