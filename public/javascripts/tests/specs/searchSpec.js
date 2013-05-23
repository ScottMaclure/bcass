/*global $,describe,it,expect,toBe*/
/**
 * test suite for search feature.
 */

describe("search suite", function () {

	var $container;
	var $searchElem;
	var plugin;

	function createHtml() {
		var out = [];

		out.push('<div class="m-search">');
		out.push('	<input name="search" type="text" placeholder="Search...">');
		out.push('	<a href="#" class="bc-searchButton prefix">Go</a>');
		out.push('	<div class="m-searchResults">');
		out.push('		<ul class="no-bullet"></ul>');
		out.push('	<div><a href="/search/more/34834">View more</a></div>');
		out.push('</div>');

		return out.join('');
	}

	beforeEach(function () {
		$container = $('<div></div>').append(createHtml()).appendTo('body');
		$searchElem = $container.find('.m-search');
		plugin = $searchElem.data('search');
	});

	it('is setup correctly', function () {
		expect($searchElem.length).toBe(1);
	});

	it('has the plugin bound to the element', function () {

	});

});