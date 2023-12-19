const isValidIPv4 = (ipAddress) => {
	// Solution 1 - Using `regex`
	// const ipRegex =
	// 	/^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/;
	// return ipRegex.test(ipAddress);
	// Solution 2 -
	// 	const ipFourOctets = ipAddress.split('.');
	// 	console.log(ipFourOctets);
	// 	const octetRegex = /[0-255]/;
	// 	if (
	// 		ipFourOctets.length === 4 &&
	// 		ipFourOctets.every((octet) => octetRegex.test(Number(octet)))
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}

	// Brad's Solution 3 -
	const octets = ipAddress.split('.');

	if (octets.length !== 4) return false;

	return octets.every((octet) => {
		const num = parseInt(octet);
		return num >= 0 && num <= 255 && octet === num.toString();
	});
};

module.exports = isValidIPv4;
