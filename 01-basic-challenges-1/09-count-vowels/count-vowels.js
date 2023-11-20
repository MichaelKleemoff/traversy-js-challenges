function countVowels(str) {
	// Solution 1 -
	// let count = 0;
	// const vowels = ['a', 'e', 'i', 'o', 'u'];

	// for (let i = 0; i < str.length; i++) {
	// 	if (vowels.includes(str[i].toLowerCase())) {
	// 		count++;
	// 	}
	// }
	// return count;

	// Solution 2 -
	return str.replace(/[^aeiou]/gi, '').length;
}

module.exports = countVowels;
