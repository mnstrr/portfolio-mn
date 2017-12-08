/**
 * Description of ScrollItem.
 *
 * @module ScrollItem
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

class ScrollItem extends VeamsComponent {
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
			selectors: {
				ctaShow: '[data-js-item="open-case"]',
				ctaHide: '[data-js-item="close-case"]'
			},
			classes: {
				opened: 'is-open'
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
			'click {{this.options.selectors.ctaShow}}': 'openCase',
			'click {{this.options.selectors.ctaHide}}': 'closeCase',
		};
	}

	/**
	* Subscribe handling
	*/
	get subscribe() {
		return {
			// '{{Veams.EVENTS.resize}}': 'render'
		};
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init ScrollItem');
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}

	openCase() {
		console.log('open', this.$el);
		this.$el.addClass(this.options.classes.opened);
	}

	closeCase() {
		console.log('close');
		this.$el.removeClass(this.options.classes.opened);
	}
}

export default ScrollItem;
