module.exports = {
	options: {
		log: true,
		processors: [
			require('lost'),
			require('autoprefixer')({
				browsers: ['last 2 versions', 'ie >= 10']
			})
		]
	},
	dev: {
		options: {
			map: true
		},
		src: '<%= paths.app %>/css/app.css'
	},
	dist: {
		options: {
			map: false
		},
		src: '<%= paths.app %>/css/app.css'
	}
};
