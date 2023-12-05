function validateEmail(email) {
	// Solution 1 - Using `regex`
	// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	// return emailRegex.test(email);

	// Solution 2 - Without `regex`
	if (email.indexOf('@') === -1) {
		return false;
	}

	// Destructuring an array
	const [localPart, domain] = email.split('@');

	if (localPart.length === 0 || domain.length < 3) {
		return false;
	}

	const domainExtension = domain.split('.');

	if (domainExtension.length < 2 || domainExtension[1] < 2) {
		return false;
	}

	return true;
}

module.exports = validateEmail;
