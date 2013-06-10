/**
 * Helper object for generic functions that don't have a home (to begin with).
 * Later, refactoring often will group these into dedicated objects.
 */

/**
 * Helper function to display prices in a standard format.
 * $149.00
 */
exports.formatCurrency = function (cents) {
	return (cents / 100).toFixed(2);
}

/**
 * FIXME Move into utils class
 */
exports.getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * max) + min;
};

/**
 * FIXME Move into utils. Or remove.
 */
exports.getLorem = function () {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu urna in nibh varius euismod sed non velit.';
}
