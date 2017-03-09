module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif,jpeg,svg}'],
					dest: 'min_images/'
				}]
			}
		},
		uglify: {
			target: {
				files: {
					'js/theme_functions.min.js' : ['js/*.js','!js/*.min.js']
				},
				concat: {
					options: {
						separator: ';'
					},
					dist: {
						src: ['js/*.js','!js/*.min.js'],
						dest: 'js/theme_functions.min.js',
					}
				}
			}
		},
		watch: {
			imagemin: {
				files: 'images/*.{png,jpg,gif}',
				tasks: ['imagemin']
			},
			uglify: {
				files: ['js/*.js','!js/*.min.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			},

		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.registerTask('default',['newer:imagemin:target','uglify','watch']);
};
