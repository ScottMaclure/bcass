/**
 * Main site controller.
 */

var utils = require('../services/Utils.js');
var productService = require('../services/ProductService.js');

/**
 * Main index page for the site.
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
	res.render('index.html', {
		utils: utils,
		featuredProducts: productService.getFeaturedProducts(10),
		productCategories: productService.getPopularCategories(),
		recentProducts: productService.getRecentProducts(3)
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