/**
 * Cares about wheel/touch/keybourd input events and updates child items
 *
 * @module ScrollContainer
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

class ScrollContainer extends VeamsComponent {
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
				scrollItems: '[data-js-item="scroll-item"]'
			},
			classes: {
				active: 'is-active'
			},
			scrollDelta: 20,
			transitionDuration: 1500,
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
			// '{{Veams.EVENTS.resize}}': 'render'
		};
	}

	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		this.$scrollItems = this.$el.find(this.options.selectors.scrollItems);
		this.activeIndex = 0;
		this.canScroll = true;

		this.attatchInputHandler();
	}

	/**
	 * Render class
	 */
	render() {
		this.$scrollItems.eq(this.activeIndex).addClass(this.options.classes.active);

		return this;
	}


	/**
	 * Adds wheel and keydown input handler
	 */
	attatchInputHandler() {
		$(window).on('DOMMouseScroll mousewheel keydown', (e) => this.detectInput(e));
	}

	/**
	 * Removes wheel and keydown input handler
	 */
	detatchInputHandler() {
		$(window).off('DOMMouseScroll mousewheel keydown', (e) => this.detectInput(e));
	}

	/**
	 * Decides whether the scroll should be handled or not
	 * Uses a timeout to block the scroll as long as the transition is ongoing
	 * Further the timeout helps to get around mac trackpads firing the event for over a second
	 * TODO: use transition end-event
	 * TODO: add touch support
	 * @param e
	 */
	detectInput(e) {
		if (this.canScroll) {
			this.detatchInputHandler();
			this.handleInput(e);
			this.canScroll = false;

			clearTimeout((this.scrollTimeout));

			// start timeout for attatching the handler
			this.scrollTimeout = setTimeout(() => {
				this.canScroll = true;
				this.attatchInputHandler();
			}, this.options.transitionDuration)
		}
	}

	/**
	 * Handle the scroll event and keydown event and determine action
	 * @param e
	 */
	handleInput(e) {
		// normalize wheel event data
		const wheelData = e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : e.originalEvent.detail;

		if ((wheelData && wheelData < 0) || e.keyCode === 40) {
			//scroll down or down key
			this.activateNextSection();
		} else if ((wheelData && wheelData > 0) || e.keyCode === 38) {
			//scroll up ur up key
			this.activatePrevSection();
		}
	}

	/**
	 * Activates the next section based on the saved index
	 */
	activateNextSection() {
		// only if last slide isn't active
		if (this.activeIndex < this.$scrollItems.length - 1) {
			const newIndex = this.activeIndex + 1;

			this.updateClasses(this.activeIndex, newIndex);
			this.activeIndex = newIndex;
		}
	}

	/**
	 * Activates the previous section based on the index
	 */
	activatePrevSection() {
		// only if the first slide isn't active
		if (this.activeIndex > 0) {
			const newIndex = this.activeIndex - 1;

			this.updateClasses(this.activeIndex, newIndex);
			this.activeIndex = newIndex;
		}
	}

	/**
	 * Updates the classes on the old and new item
	 * @param prev
	 * @param next
	 */
	updateClasses(prev, next) {
		this.$scrollItems.eq(prev).removeClass(this.options.classes.active);
		this.$scrollItems.eq(next).addClass(this.options.classes.active);
	}

	/**
	 * Fires events to update external components
	 */
	updateExternalComponents() {
		//TODO: Update Metadata
	}
}

export default ScrollContainer;
