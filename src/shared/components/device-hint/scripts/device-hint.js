/**
 * Description of DeviceHint.
 *
 * @module DeviceHint
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

class DeviceHint extends VeamsComponent {
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
				size: '[data-js-item="device-size"]',
				mobile: '[data-js-item="device-browser"]',
				mainContent: '[data-js-module="scroll-container"]'
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
			// 'click': 'render'
		};
	}

	/**
	 * Subscribe handling
	 */
	get subscribe() {
		return {
			'{{Veams.EVENTS.resize}}': 'render'
		};
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init DeviceHint');

		this.$sizeWrapper = this.$el.find(this.options.selectors.size);
		this.$browserWrapper = this.$el.find(this.options.selectors.mobile);
		this.$main = $(document).find(this.options.selectors.mainContent);
		this.browserToggled = false;

		this.checkBrowser();
	}

	/**
	 * Render class
	 */
	render() {
		if (this.browserToggled) return;

		if (Veams.detections.width < 724) {
			this.toggleWrapper(true, 'size');
		} else {
			this.toggleWrapper(false, 'size');
		}
	}

	checkBrowser() {
		const ua = window.navigator.userAgent;
		const isIE = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1 || ua.indexOf('Edge/') > -1;

		if (isIE) {
			this.toggleWrapper(true, 'browser');
			this.browserToggled = true;
		}
	}

	toggleWrapper(toggle, type) {
		this.$el.toggleClass(this.options.classes.active, toggle);
		this.$main.toggleClass(this.options.classes.active, !toggle);

		if (type === 'size') {
			this.$sizeWrapper.toggleClass(this.options.classes.active, toggle);
		}
		if (type === 'browser') {
			console.log(this.$browserWrapper, type);
			this.$browserWrapper.toggleClass(this.options.classes.active, toggle);
		}
	}
}

export default DeviceHint;
