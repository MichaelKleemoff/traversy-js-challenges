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

	// Solution 3 (Brad's solution) -
	// const formattedStr = str.toLowerCase();
	// let count = 0;

	// for (let i = 0; i < formattedStr.length; i++) {
	//   const char = formattedStr[i];

	//   if (
	//     char === 'a' ||
	//     char === 'e' ||
	//     char === 'i' ||
	//     char === 'o' ||
	//     char === 'u'
	//   ) {
	//     count++;
	//   }
	// }
	// return count;
}

module.exports = countVowels;
