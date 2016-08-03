// Gruntfile.js

module.exports = function(grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'app/styles/main.css': 'app/styles/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['app/styles/**/*.scss'],
                tasks: ['sass']
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['watch', 'nodemon']
        },
        svgstore: {
            options: {
                svg: {
                    style: 'display: none',
                    viewBox : '0 0 100 100'
                }
            },
            default: {
                files: {
                    'app/assets/svgs.svg': ['app/assets/svgs/*.svg'],
                    'app/assets/partners.svg': ['app/assets/partners/**/*.svg']
                },
            },
        }
    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('serve', ['sass', 'svgstore', 'concurrent']);
};
