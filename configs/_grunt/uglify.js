module.exports = {
	options: {
		compress: {
			global_defs: {
				"DEBUG": false
			},
			dead_code: true
		},
		sourceMap: false
	},
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.app %>/scripts/',
				src: '**/*.js',
				dest: '<%= paths.app %>/scripts/'
			}
		]
	}
};