/**
 * Description of Pagination.
 *
 * @module Pagination
 * @version v0.0.0
 *
 * @author your_name
 */
// Imports
import {Veams} from 'app.veams';
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
			'{{Veams.EVENTS.scrollContainer.updateMeta}}': 'render',
			'{{Veams.EVENTS.scrollItem.closed}}': 'showPagination',
			'{{Veams.EVENTS.scrollItem.opened}}': 'hidePagination'
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
		if (e && typeof e.index === 'number') {
			const needsUpdate = e.index > 0 && e.index < e.scrollItemsCount - 1;

			// toggle pagination visibility
			this.$el.toggleClass(this.options.classes.active, needsUpdate);

			if (needsUpdate) {
				// activate pagination item
				this.$paginationItems.removeClass(this.options.classes.active);
				this.$paginationItems.eq(e.index - 1).addClass(this.options.classes.active);
			}
		}
	}

	/**
	 * Handles click on pagination item
	 * @param e
	 */
	handleClick(e) {
		const $el = $(e.currentTarget);
		const index = this.$paginationItems.index($el);

		Veams.Vent.trigger(Veams.EVENTS.pagination.clicked, index + 1);
	}

	/**
	 * Adds class to hide pagination
	 */
	showPagination() {
		console.log('shownav');
		this.$el.addClass(this.options.classes.active);
	}

	/**
	 * Removes class to hide pagination
	 */
	hidePagination() {
		console.log('hidenav');
		this.$el.removeClass(this.options.classes.active);
	}
}

export default Pagination;
