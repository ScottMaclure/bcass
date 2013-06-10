/*global window, document, console*/
/**
 * Search box jQuery plugin.
 * TODO Rename search to searchBox? Something not quite so generic as "search".
 */

(function (window, undefined) {

    // FIXME Zepto then jQuery?
    var $ = window.Zepto || window.jQuery;

    /**
     * Constructor invocation pattern.
     */
    function Search($elem) {
        this.$elem = $elem;
        this.init();
    }

    // Use jQuery's extend function to enhance the object prototype with behaviours.
    Search.prototype = $.extend(Search.prototype, {

        init: function () {
            console.log('TODO search init called');
        }

    });

    // Define jQuery plugin API
    $.fn.search = function () {
        return this.each(function () {
            var $elem = $(this);
            $elem.data('search', new Search($elem));
        });
    };

    // Init the plugin on DOMContentReady and ajaxContentLoaded, for partial DOM updates.
    $(document).ready(function () {
        $('.fn-search').search();
    });

    // Example of binding plugins to a subset of the DOM, i.e. after an XHR response with html().
    $(document).on('ajaxContentLoaded', function (e) {
        var $target = $(e.target);
        $target.find('.fn-search').search();
    });

}(window));
