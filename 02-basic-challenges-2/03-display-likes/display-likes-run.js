const displayLikes = require('./display-likes');

const result = displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']);
const result2 = displayLikes(['Alex']);
const result3 = displayLikes(['Alex', 'Jacob']);
const result4 = displayLikes([]);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
