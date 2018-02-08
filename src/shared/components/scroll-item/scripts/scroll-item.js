/**
 * Description of ScrollItem.
 *
 * @module ScrollItem
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
				opened: 'is-open',
				openedBody: 'is-case-opened'
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
			'{{Veams.EVENTS.scrollContainer.updateMeta}}': 'handleNewCase'
		};
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init ScrollItem');

		this.ctaHide = this.$el.find(this.options.selectors.ctaHide);
		this.body = $('body');
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}

	openCase() {
		this.$el.addClass(this.options.classes.opened);
		this.body.addClass(this.options.classes.openedBody);
		this.isOpened = true;

		// trigger event to detach scroll handler
		Veams.Vent.trigger(Veams.EVENTS.scrollItem.opened);
	}

	closeCase(e) {
		this.isOpened = false;

		$('html, body').animate({scrollTop: 0}, 400, 'swing', ()=> {
			this.$el.removeClass(this.options.classes.opened);
			this.body.removeClass(this.options.classes.openedBody);

			if(e && e.currentTarget === this.ctaHide[0]) {
				// trigger event to attach scroll handler
				Veams.Vent.trigger(Veams.EVENTS.scrollItem.closed);
			}
		});
	}

	handleNewCase(e) {
		if (this.isOpened && e.index !== e.prevIndex) {
			this.closeCase();
		}
	}
}

export default ScrollItem;
