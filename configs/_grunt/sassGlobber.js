module.exports = {
	options: {
		sassRoot: '<%= paths.src %>',
		source: 'app.scss',
		output: 'app.tmp.scss'
	},
	dev: {
		options: {
			watch: true
		}
	},
	dist: {
		options: {
			watch: false
		}
	}
};