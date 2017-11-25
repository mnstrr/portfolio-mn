'use strict';

const config = require('../../veams-cli');

const internalLibs = [
	`./${config.paths.src}/app.veams.js:app.veams`,
	// `./${config.paths.src}/app.store.js:store`,
	`./${config.paths.config}/environments/environment.${process.env.NODE_ENV}.js:env`,
];

module.exports = {
	options: {
		transform: [
			['babelify',
				{
					compact: true,
					// ignore: [
					// 	'<%= paths.app %>/scripts/vendor/'
					// ],
					presets: [
						'es2015',
						'es2017',
						'stage-0',
						['env', {
							targets: {
								browsers: ['last 2 versions', 'ie >= 11', 'iOS >= 10', 'Android >= 6']
							},
							useBuiltIns: false
						}]
					],
					plugins: [
						'transform-decorators-legacy',
						'transform-class-properties'
					]
				}
			]
		],
		ignore: []
	},
	dev: {
		options: {
			alias: internalLibs,
			browserifyOptions: {
				debug: true
			},
			watch: true
		},
		files: {
			'<%= paths.app %>/scripts/app.bundle.js': '<%= paths.src %>/app.js'
		}
	},
	dist: {
		options: {
			alias: internalLibs
		},
		files: {
			'<%= paths.app %>/scripts/app.bundle.js': '<%= paths.src %>/app.js'
		}
	}
};