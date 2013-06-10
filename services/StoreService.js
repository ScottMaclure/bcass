/**
 * Mock store service
 * Responsible for fetching data at the store level.
 * TODO How to initialize for each store? By domain? By some key config?
 */

var utils = require('../services/Utils.js');

exports.getStoreDetails = function () {

    return {
      name: 'Ze Example Store'
    };

};

/**
 * Dummy function to grab N products to feature on the home page.
 * TODO Move into JSON file.
 */
exports.getFeaturedProducts = function (numProducts) {

    var data = [];

    // Create dummy content for the rest
    for (var i = 1; i <= numProducts; i++) {

        // Randomly create a reference to 3 dummy images.
        var j = utils.getRandomNumber(1, 3);

        data.push({
            id: utils.getRandomNumber(1, 100000),
            imgLarge: '/images/catalogue/' + j + '.png',
            imgThumb: '/images/catalogue/thumbs/' + j + '.png',
            title: 'Google Nexus ' + i,
            description: '<p>' + i + utils.getLorem() + '</p>',
            rating: utils.getRandomNumber(1, 5),
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
            id: utils.getRandomNumber(1, 1000),
            title: 'Google',
            url: '/category/google'
        },
        {
            id: utils.getRandomNumber(1, 1000),
            title: 'HTC',
            url: '/category/htc'
        },
        {
            id: utils.getRandomNumber(1, 1000),
            title: 'Samsung',
            url: '/category/samsung'
        },
        {
            id: utils.getRandomNumber(1, 1000),
            title: 'Crumpler',
            url: '/category/crumpler'
        },
        {
            id: utils.getRandomNumber(1, 1000),
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

