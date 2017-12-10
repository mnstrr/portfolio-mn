module.exports = {
	"stageBackgrounds": {
		options: {
			sizes: [
				{
					name: '480',
					width: 480,
					quality: 80
				},
				{
					name: "960",
					width: 960,
					quality: 80
				},
				{
					name: "1200",
					width: 1200,
					quality: 80
				},
				{
					name: "1600",
					width: 1600,
					quality: 80
				},
				{
					name: "2000",
					width: 2000,
					quality: 80
				}
			]
		},
		files: [
			{
				expand: true,
				src: ['**.{jpg,gif,png}'],
				cwd: '<%= paths.src %>/shared/assets/img/png-src/stage-backgrounds',
				dest: '<%= paths.src %>/assets/media/images/png/stage-backgrounds'
			}
		]
	}
};
