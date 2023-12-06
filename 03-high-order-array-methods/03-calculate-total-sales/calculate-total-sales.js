function calculateTotalSalesWithTax(products, taxRate) {
	const subTotal = products
		.map(({ price, quantity }) => price * quantity)
		.reduce((sum, sale) => sum + sale, 0);
	const tax = subTotal * taxRate * 0.01;

	return subTotal + tax;
}

module.exports = calculateTotalSalesWithTax;
