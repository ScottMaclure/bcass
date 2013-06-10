/**
 * Main site controller.
 */

var utils = require('../services/Utils.js');
var storeService = require('../services/StoreService.js');

/**
 * Main index page for the site.
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
	res.render('index.html', {
		utils: utils,
		featuredProducts: storeService.getFeaturedProducts(10),
		productCategories: storeService.getPopularCategories(),
		recentProducts: storeService.getRecentProducts(3),
        storeDetails: storeService.getStoreDetails()
	});
};

/**
 * Error 404 handler
 * @param req
 * @param res
 */
exports.notFound = function (req, res) {
	res.render('errors/404.html');
}
