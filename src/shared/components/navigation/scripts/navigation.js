/**
 * Description of Navigation.
 *
 * @module Navigation
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

class Navigation extends VeamsComponent {
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
				navItem: '[data-js-item="navigation-item"]',
				navLink: '[data-js-item="navigation-link"]'
			},
			classes: {
				active: 'is-active'
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
			'click {{this.options.selectors.navLink}}': 'handleClick'
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
		console.log('init Navigation');

		this.$navItems = this.$el.find(this.options.selectors.navItem);
	}

	/**
	 * Render class
	 */
	render(e) {
		if (e && typeof e.index === 'number') {
			// update nav-items
			$(this.$navItems[0]).toggleClass(this.options.classes.active, e.index === 0);
			$(this.$navItems[1]).toggleClass(this.options.classes.active, e.index > 0 && e.index < e.scrollItemsCount - 1);
			$(this.$navItems[2]).toggleClass(this.options.classes.active, e.index === e.scrollItemsCount - 1);
		}
	}

	/**
	 * Handles the click on a nav item
	 * @param e
	 */
	handleClick(e) {
		const id = $(e.currentTarget).attr('href');

		Veams.Vent.trigger(Veams.EVENTS.navigation.clicked, id);
		e.preventDefault();
	}
}

export default Navigation;
