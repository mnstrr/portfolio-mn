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
					name: "1100",
					width: 1100,
					quality: 80
				},
				{
					name: "1400",
					width: 1400,
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
