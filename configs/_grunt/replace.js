module.exports = {
	fallbackData: {
		src: ['<%= paths.src %>/shared/styles/icons/_icons-data-fallback.scss'],             // source files array (supports minimatch)
		dest: '<%= paths.src %>/shared/styles/icons/_icons-data-fallback.scss',               // destination directory or file
		replacements: [
			{
				from: '../../assets/img/',                                      // string replacement
				to: '../img/'
			}
		]
	},
	fallback: {
		src: ['<%= paths.src %>/shared/styles/icons/_icons-fallback.scss'],             // source files array (supports minimatch)
		dest: '<%= paths.src %>/shared/styles/icons/_icons-fallback.scss',               // destination directory or file
		replacements: [
			{
				from: '../../assets/img/',                                      // string replacement
				to: '../img/'
			}
		]
	},
	jsTemplates: {
		src: ['<%= paths.src %>/shared/scripts/templates.js'],             // source files array (supports minimatch)
		dest: '<%= paths.src %>/shared/scripts/templates.js',               // destination directory or file
		replacements: [
			{
				from: 'this[\"App\"]',                                      // string replacement
				to: 'window[\"App\"]'
			}
		]
	}
	
};