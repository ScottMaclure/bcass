/*global module*/
/**
 * Main app gruntfile.
 * Will be added to over time, as needed.
 */
module.exports = function (grunt) {

    // Load our config json
    var manifests = grunt.file.readJSON('conf/manifests.json');

    grunt.initConfig({

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


    // Load additional tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Define task aliases
    grunt.registerTask('dev', ['uglify:dev', 'watch']);
    grunt.registerTask('prod', ['uglify:prod']);


}