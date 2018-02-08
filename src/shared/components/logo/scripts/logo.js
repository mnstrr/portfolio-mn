/**
 * Description of Logo.
 *
 * @module Logo
 * @version v0.0.0
 *
 * @author your_name
 */

// Imports
import { Veams } from 'app.veams';
import VeamsComponent from 'veams/src/js/common/component'; // Only use that in combination with browserify
// import VeamsComponent from 'veams/lib/common/component'; // Can be used in general

// Variables
const $ = Veams.$;
const Helpers = Veams.helpers;

class Logo extends VeamsComponent {
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			selectors: {},
			classes: {
				white: 'is-white'
			}
		};

		super(obj, options);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '0.0.0'
		};
	}

	/**
	* Event handling
	*/
	get events() {
		return {
			'click': 'logoClick'
		};
	}

	/**
	* Subscribe handling
	*/
	get subscribe() {
		return {
			'{{Veams.EVENTS.scrollContainer.updateMeta}}': 'render'
		};
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init Logo');
	}

	/**
	 * Render class
	 */
	render(e) {
		if(e && typeof e.index === 'number') {
			this.$el.toggleClass(this.options.classes.white, e.index > 0);
		}
	}

	logoClick() {
		Veams.Vent.trigger(Veams.EVENTS.logo.clicked);
	}
}

export default Logo;
