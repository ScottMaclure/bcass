/**
 * Main site controller.
 */

var productService = require('../services/ProductService.js');

/**
 * Main index page for the site.
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
	res.render('index.html', {
		featuredProducts: productService.getFeaturedProducts(10)
	});
};