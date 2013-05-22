/**
 * Helper function to display prices in a standard format.
 * $149.00
 */
exports.formatCurrency = function (cents) {
	return (cents / 100).toFixed(2);
}