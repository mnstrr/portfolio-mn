module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: true
	},
	dev: {
		files: {
			'<%= paths.app %>/css/app.css': '<%= paths.src %>/app.tmp.scss'
		}
	},

	docs: {
		files: {
			'<%= paths.app %>/css/docs.css': '<%= paths.src %>/core/layouts/docs/docs.scss'
		}
	}
};