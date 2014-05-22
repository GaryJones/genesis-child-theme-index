module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// pkg: grunt.file.readJSON('package.json'),

		// JavaScript
		
		// Lint JS code standards
		jshint: {
			grunt: {
				options: {
					jshintrc: '.gruntjshintrc'
				},
				src: ['Gruntfile.js']
			}
		},

		// Lint JSON
		jsonlint: {
			project: {
				src: [ '*.json' ]
			},
			themes: {
				src: [ 'themes/*.json' ]
			}
		},

		// Check theme files against schema
		tv4: {
			options: {
				root: grunt.file.readJSON( 'schema.json' ),
				multi: true,
				fresh: true
			},
			themes: {
				src: [ 'themes/*.json' ]
			}
		}

	});


	// Register tasks
	
	grunt.registerTask( 'check', [
		'jshint',
		'jsonlint',
		'tv4'
	] );

	grunt.registerTask( 'default', [
		'check'
	] );

};
