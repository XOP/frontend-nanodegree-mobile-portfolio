module.exports = function(grunt) {

    //
    // config
    //

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'index.html', dest: 'css/style.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'css/style.css', dest: 'css/style.css' },
                    { src: 'css/raw/print.css', dest: 'css/print.css' }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'raw/index.html'
                }
            }
        },
        watch: {
            html: {
                files: 'raw/index.html',
                tasks: ['htmlmin']
            }
        }
    });


    //
    // register tasks
    //

    grunt.registerTask('css', ['uncss', 'cssmin']);
    grunt.registerTask('html', ['htmlmin']);
    grunt.registerTask('dev', ['html', 'watch']);

};