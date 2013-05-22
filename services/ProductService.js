/**
 * Mock service.
 */

/**
 * Dummy function to grab N products to feature on the home page.
 * TODO Move into JSON file.
 */
exports.getFeaturedProducts = function (numProducts) {

	var data = [];

	// Create dummy content for the rest
	for (var i = 1; i <= numProducts; i++) {

		// Randomly create a reference to 3 dummy images.
		var j = this.getRandomNumber(1, 3);

		data.push({
			id: this.getRandomNumber(1, 100000),
			imgLarge: '/images/catalogue/' + j + '.png',
			imgThumb: '/images/catalogue/thumbs/' + j + '.png',
			title: 'Google Nexus ' + i,
			description: '<p>' + i + this.getLorem() + '</p>',
			rating: this.getRandomNumber(1, 5),
			price: 45000 + i
		});
	}

	return data;
};

/**
 * Return mocked list of "popular" categories (subset of all categories).
 */
exports.getPopularCategories = function () {

	var data = [
		{
			id: this.getRandomNumber(1, 1000),
			title: 'Google',
			url: '/category/google'
		},
		{
			id: this.getRandomNumber(1, 1000),
			title: 'HTC',
			url: '/category/htc'
		},
		{
			id: this.getRandomNumber(1, 1000),
			title: 'Samsung',
			url: '/category/samsung'
		},
		{
			id: this.getRandomNumber(1, 1000),
			title: 'Crumpler',
			url: '/category/crumpler'
		},
		{
			id: this.getRandomNumber(1, 1000),
			title: 'Apple',
			url: '/category/crapple'
		},
	];

	// Just for fun, sort data by title.
	data.sort(function (a, b) {
		return a.title.toUpperCase() > b.title.toUpperCase();
	});

	return data;

}

/**
 * Fetch list of recent products.
 * For now, just mocking via getFeaturedProducts, but these two APIs have different intentions for real.
 * @param count
 */
exports.getRecentProducts = function (numProducts) {
	return this.getFeaturedProducts(numProducts);
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