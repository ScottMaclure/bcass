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
		data.push({
			id: 1234560 + i,
			img: '/path/to/img' + i,
			title: 'Google Nexus ' + i,
			description: '<p>' + i + this.getLorem() + '</p>',
			rating: this.getRandomRating(),
			price: 45000 + i
		});
	}

	return data;
};

/**
 * FIXME Move into utils class
 */
exports.getRandomRating = function () {
	return Math.floor(Math.random() * 5) + 1;
};

/**
 * FIXME Move into utils. Or remove.
 */
exports.getLorem = function () {
	return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu urna in nibh varius euismod sed non velit. Nunc faucibus, augue et ornare dapibus, elit augue faucibus eros, ut vulputate sem elit et lacus. Fusce ultrices, turpis hendrerit viverra convallis, nisl velit faucibus felis, ac tempus urna odio vel lacus. Nam ac sapien elit.';
}