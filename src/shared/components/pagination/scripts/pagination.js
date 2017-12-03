/**
 * Description of Pagination.
 *
 * @module Pagination
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

class Pagination extends VeamsComponent {
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
				paginationItems: '[data-js-item="pagination-item"]'
			},
			classes: {
				active: 'is-active',
				dark: 'is-dark'
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
			'click {{this.options.selectors.paginationItems}}': 'handleClick'
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
		console.log('init Pagination');
		this.$paginationItems = this.$el.find(this.options.selectors.paginationItems)
	}

	/**
	 * Render class
	 */
	render(e) {
		if(e && typeof e.index === 'number') {
			console.log(e);

			// toggle pagination visibility
			this.$el.toggleClass(this.options.classes.active, e.index > 0 && e.index < e.scrollItemsCount -1);

			// activate pagination item
			this.$paginationItems.eq(e.index -1).addClass(this.options.classes.active);
			this.$paginationItems.eq(e.prevIndex -1).removeClass(this.options.classes.active);

			// toggle color class
			this.$el.toggleClass(this.options.classes.dark, )
		}
	}

	/**
	 * Handles click on pagination item
	 * @param e
	 */
	handleClick(e) {

	}
}

export default Pagination;
