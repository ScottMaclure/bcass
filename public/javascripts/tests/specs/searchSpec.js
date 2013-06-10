/*global $, beforeEach, afterEach, describe, it, expect*/
/**
 * test suite for search feature.
 * TODO Sinon
 */

describe('search suite', function () {

	var $container;
	var $searchElem;
	var plugin;

	function createHtml() {
		var out = [];

        // FIXME Interesting clash of conventions: m-search for "search scss module",
        // and fn-search for "search plugin".
        // Can a module have multiple plugins?

		out.push('<div class="m-search">');
		out.push('	<input name="search" type="text" placeholder="Search...">');
		out.push('	<a href="#" class="bc-searchButton prefix">Go</a>');
		out.push('	<div class="m-searchResults">');
		out.push('		<ul class="no-bullet"></ul>');
		out.push('	<div>');
        out.push('  <a href="/search/more/34834">View more</a></div>');
		out.push('</div>');

		return out.join('');
	}

	/**
	 * All tests will create mock html and init the JS plugin.
	 */
	beforeEach(function () {

        $container = $('<div></div>').append(createHtml()).appendTo('body');

		$searchElem = $container.find('.m-search');

        // init jQuery plugin
        $searchElem.search();

        // Cache reference to plugin object via data() API
		plugin = $searchElem.data('search');

	});

	/**
	 * Cleanup - remove container for the next test.
	 */
	afterEach(function () {
		$container.remove();
	});

	describe('when the plugin has initialized', function () {

		it('is setup with a valid search elem', function () {
			expect($searchElem.length).toBe(1);
		});

		it('has the plugin bound to the element', function () {
            expect(typeof plugin).toEqual('object');
			expect(plugin.constructor.name).toEqual('Search');
		});

		it('does not have the is-searchResultsAvailable state class', function () {
			expect($searchElem.hasClass('is-searchResultsAvailable')).toBe(false);
		});

	});

	describe('when a user types in a search term and clicks go', function () {

		it('shows a loading spinner', function () {

		});

		it('makes a GET request to the server', function () {

		});

		it('passes the search term', function () {

		});

	});

});
