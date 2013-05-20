/*global module*/
/**
 * Main app gruntfile.
 * Will be added to over time, as needed.
 */
module.exports = function (grunt) {

    // Load our config json
    var manifests = grunt.file.readJSON('conf/manifests.json');

    // Load additional tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // App grunt config
    grunt.initConfig({

        // Later, we'll add Jasmine and app JS files.
        // @see http://www.jshint.com/docs/
        jshint: {
            all: {
                src: [ './Gruntfile.js' ],
                options: {
                    bitwise: true,
                    camelcase: true,
                    curly: true,
                    eqeqeq: true,
                    forin: true,
                    immed: true,
                    indent: 4,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    noempty: true,
                    nonew: true,
                    quotmark: 'single',
                    regexp: true,
                    undef: true,
                    unused: true,
                    trailing: true,
                    maxlen: 120
                },
                ignores: []
            }
        },

        // JS minification
        uglify: {
            dev: {
                options: {
                    compress: false,
                    preserveComments: true,
                    mangle: false,
                    beautify: true
                },
                files: {
                    'public/javascripts/compiled/jquery.min.js': manifests.js.jquery,
                    'public/javascripts/compiled/zepto.min.js': manifests.js.zepto,
                    'public/javascripts/compiled/foundation.min.js': manifests.js.foundation
                }
            },
            prod: {
                files: {
                    'public/javascripts/compiled/jquery.min.js': manifests.js.jquery,
                    'public/javascripts/compiled/zepto.min.js': manifests.js.zepto,
                    'public/javascripts/compiled/foundation.min.js': manifests.js.foundation
                }
            }
        },

        // Watch filesystem for changes and run relevant tasks
        watch: {
            uglify: {
                files: [].concat(manifests.js.jquery, manifests.js.zepto, manifests.js.foundation),
                tasks: [ 'uglify:dev' ]
            }
        }

    });

    // Define task aliases
    grunt.registerTask('dev', ['jshint', 'uglify:dev', 'watch']);
    grunt.registerTask('prod', ['jshint', 'uglify:prod']);

}