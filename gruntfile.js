module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development:{
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production:{
                options: {
                    compress: true,
                },
                files:{
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'EDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'EDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:production', 'replace:dist', 'clean', 'uglify']);
}