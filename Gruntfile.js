"use strict";

module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-jasmine-html-spec-runner');

	grunt.initConfig({
		connect: {
			testServerHeadless: {
				options: {port: 9001}
			},
			testServer: {
				options: {
					port: 9001,
					keepalive: true
				}
			}
		},
		jasmine: {
			core14: {
				src: ['http://localhost:9001/Specs/Runner/runner.html?preset=core-1.4']
			}
		}
	});

	grunt.registerTask('test', [
		'connect:testServerHeadless',
		'jasmine:core14'
	]);

};
