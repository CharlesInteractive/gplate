const sass = require('node-sass');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        // Compile handlebars templates
        handlebars: {
            compile: {
                options: {
        
                    // configure a namespace for your templates
                    namespace: 'custom.templates',
            
                    // convert file path into a function name
                    // in this example, I convert grab just the filename without the extension 
                    processName: function(filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    }
            
                },
                files: {
                    'handlebars/compiled/template.js': 'handlebars/template.hbs',
                    'handlebars/compiled/template_secondary.js': 'handlebars/template_secondary.hbs',
                    'handlebars/compiled/faicons.js': 'handlebars/faicons.hbs',
                    'handlebars/compiled/all/all.js': [ 'handlebars/*.hbs' ]
                }
            }
        },

        // Copy font awesome fonts into project
        copy: {
            font_awesome: {
                expand: true,
                flatten: true,
                src: 'node_modules/@fortawesome/fontawesome-free/webfonts/*',
                dest: 'webfonts'
            }
        },

        // Sass compilation
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'css/main.css': 'css/scss/main.scss'
                }
            }
        },

        // js compilation
        terser: {
            options: {
                sourceMap: true,
            },
            my_target: {
                files: {
                    'js/min/main.min.js': [ 'js/main.js' ],
                    'js/min/imports.min.js': [
                        'node_modules/handlebars/dist/handlebars.js',
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/slick-carousel/slick/slick.js',
                        'node_modules/jquery-popup-overlay/jquery.popupoverlay.js',
                        'node_modules/lozad/dist/lozad.js'
                    ],
                    'js/templates/template.js': [ 'handlebars/compiled/template.js' ],
                    'js/templates/template_secondary.js': [ 'handlebars/compiled/template_secondary.js' ],
                    'js/templates/faicons.js': [ 'handlebars/compiled/faicons.js' ],
                    'js/templates/all.js': [ 'handlebars/compiled/all/all.js' ]

                }
            }
        },

        // Add vendor prefixes to CSS rules
        postcss: {
            options: {
                map: false,
                processors: [
                    require('pixrem')(),
                    require('autoprefixer')({overrideBrowerslist: ['last 2 versions']})
                ]
            },
            dist: {
                expand: true,
                src: 'css/*.css'
            }
        },

        // detect errors and potential problems in your js code
        jshint: {
            options: {
                'esversion': 6
            },
            all: ['Gruntfile.js', 'js/main.js']
        },

        // Start a web server
        connect: {
            server: {
                options: {
                    port: 8765,
                    base: ''
                }
            }
        },

        // Open project index in started web server
        open : {
            dev : {
                path: 'http://localhost:8765'
            }
        },
        
        watch: {
            files: [
                '*.html',
                'js/*.js',
                'css/**/*.scss',
                'img/**/*.{png,jpg,gif,svg)',
                'handlebars/*.hbs',
                'data/*.json'
            ],
            tasks: [
                'handlebars', 'copy', 'sass', 'jshint', 'terser', 'postcss'
            ],
            options: {
                interrupt: true
            }
        }
    });
    grunt.registerTask('default', [ 'connect', 'open', 'watch' ]);
};