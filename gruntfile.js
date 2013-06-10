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
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

    // App grunt config
    grunt.initConfig({

        // Later, we'll add Jasmine and app JS files.
        // @see http://www.jshint.com/docs/
        jshint: {
            all: {
                src: [ 'Gruntfile.js' ],
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
        // FIXME uglify apperas to fail for zepto?
        uglify: {
            dev: {
                options: {
                    compress: false,
                    preserveComments: true,
                    mangle: false,
                    beautify: true
                },
                files: {
                    'public/javascripts/compiled/foundation.min.js': manifests.js.foundation
                }
            },
            prod: {
                options: {
                    compress: true,
                    preserveComments: false,
                    mangle: true
                },
                files: {
                    'public/javascripts/compiled/foundation.min.js': manifests.js.foundation
                }
            }
        },

        // SASS generation using Compass. Gives us tools like sprite generation.
        compass: {
            options: {
                sassDir: 'sass',
                cssDir: 'public/stylesheets',
                imagesDir: 'public/images',
                // For correct sprite css generation (for later)
                raw: 'http_images_path = \'/images\' \nhttp_generated_images_path = \'/images\'',
                require: [ 'zurb-foundation', 'sass-globbing' ]
            },
            dev: {
                options: {
                    outputStyle: 'expanded'
                }
            },
            prod: {
                options: {
                    force: true,
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        },

		// HTTP server
		connect: {
			jasmine: {
				options: {
					hostname: 'localhost',
					// It's over nine-thousand!!!
					port: 9001
				}
			}
		},

		// BDD suite
		jasmine: {
			all : {
				src: manifests.js.app,
				options: {
					vendor: manifests.js.jasmineVendor,
					specs: manifests.js.specs,
					host: 'http://localhost:9001/'
				}
			}
		},

        // Watch filesystem for changes and run relevant tasks.
        watch: {
            uglify: {
                files: manifests.js.foundation,
                tasks: [ 'uglify:dev' ]
            },
            compass: {
                files: 'sass/**/*.scss',
                tasks: [ 'compass:dev' ]
            }
        }

    });

    // Define task aliases
    grunt.registerTask('dev', ['jshint', 'uglify:dev', 'compass:dev', 'watch']);
	grunt.registerTask('test', ['jshint', 'connect', 'jasmine']);
    grunt.registerTask('deploy', ['jshint', 'uglify:prod', 'compass:prod']);

};
