/**
 * Description of CaseContent.
 *
 * @module CaseContent
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

class CaseContent extends VeamsComponent {
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
			classes: {}
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
		};
	}

	/**
	* Subscribe handling
	*/
	get subscribe() {
		return {
		};
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		console.log('init CaseContent');
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}
}

export default CaseContent;
