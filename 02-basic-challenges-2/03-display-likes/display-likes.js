function displayLikes(names) {
	let message = '';
	const numOthers = names.length;

	if (numOthers === 0) {
		message = `no one likes this`;
	} else if (numOthers === 1) {
		message = `${names[0]} likes this`;
	} else if (numOthers === 2) {
		message = `${names[0]} and ${names[1]} like this`;
	} else if (numOthers === 3) {
		message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
	} else {
		message = `${names[0]}, ${names[1]} and ${numOthers - 2} others like this`;
	}

	return message;
}

module.exports = displayLikes;
