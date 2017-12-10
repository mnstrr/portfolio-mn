/**
 * Cares about wheel/touch/keyboard input events and updates child items
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
			'{{Veams.EVENTS.logo.clicked}}': 'activateFirstSection',
			'{{Veams.EVENTS.navigation.clicked}}': 'activateSectionByID',
			'{{Veams.EVENTS.pagination.clicked}}': 'activateSectionByIndex',
			'{{Veams.EVENTS.scrollItem.opened}}': 'detachInputHandler',
			'{{Veams.EVENTS.scrollItem.closed}}': 'attachInputHandler',
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

		this.attachInputHandler();
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
	attachInputHandler() {
		console.log('attach');
		$(window).on('DOMMouseScroll mousewheel keydown', (e) => this.handleInput(e));
	}

	/**
	 * Removes wheel and keydown input handler
	 */
	detachInputHandler() {
		console.log('detach');
		$(window).off('DOMMouseScroll mousewheel keydown');
	}


	/**
	 * Decides whether the scroll should be handled or not
	 * Uses a timeout to block the scroll as long as the transition is ongoing
	 */
	blockEvents() {
		this.detachInputHandler();
		this.canScroll = false;

		clearTimeout((this.scrollTimeout));

		// start timeout for attaching the handler
		this.scrollTimeout = setTimeout(() => {
			this.canScroll = true;
			this.attachInputHandler();
		}, this.options.transitionDuration)
	}

	/**
	 * Handle the scroll event and keydown event and determine action
	 * @param e
	 */
	handleInput(e) {
		if(this.canScroll) {
			// normalize wheel event data
			const wheelData = e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : e.originalEvent.detail * -1;

			if ((wheelData && wheelData < 0) || e.keyCode === 40) {
				//scroll down or down key
				this.activateNextSection();
			} else if ((wheelData && wheelData > 0) || e.keyCode === 38) {
				//scroll up ur up key
				this.activatePrevSection();
			}
		}
	}

	/**
	 * Activates the next section based on the saved index
	 */
	activateNextSection() {
		// only if last slide isn't active
		if (this.activeIndex < this.$scrollItems.length - 1 && this.canScroll) {
			this.goToSection(this.activeIndex + 1);
		}
	}

	/**
	 * Activates the previous section based on the index
	 */
	activatePrevSection() {
		// only if the first slide isn't active
		if (this.activeIndex > 0 && this.canScroll) {
			this.goToSection(this.activeIndex - 1);
		}
	}

	/**
	 * Activates the first section
	 */
	activateFirstSection() {
		// only if the first slide isn't active
		if (this.activeIndex > 0 && this.canScroll) {
			this.goToSection(0);
		}
	}

	/**
	 * Activates last section
	 */
	activateLastSection() {
		// only if last slide isn't active
		if (this.activeIndex < this.$scrollItems.length - 1 && this.canScroll) {
			this.goToSection(this.$scrollItems.length -1);
		}
	}

	/**
	 * Activates a section by given index
	 * Called from external components
	 * @param index
	 */
	activateSectionByIndex(index) {
		if(typeof index === 'number' && index <= this.$scrollItems.length && this.canScroll) {
			this.goToSection(index);
		}
	}

	/**
	 * Activates a section by a given id string
	 * @param id
	 */
	activateSectionByID(id) {
		if(id && typeof id === 'string' && this.canScroll) {
			const $el = $(id, this.$el);
			const index = this.$scrollItems.index($el);

			this.activateSectionByIndex(index);
		}
	}

	/**
	 * Delegates section and updates index
	 * @param newIndex
	 */
	goToSection(newIndex) {
		if(this.activeIndex === newIndex) return;

		this.blockEvents();
		this.updateClasses(this.activeIndex, newIndex);
		this.updateExternalComponents(this.activeIndex, newIndex);
		this.activeIndex = newIndex;
	}

	/**
	 * Updates the classes on the old and new item
	 * //TODO: handles classes in item componenet via event
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
	updateExternalComponents(prevIdx, newIdx) {
		Veams.Vent.trigger(Veams.EVENTS.scrollContainer.updateMeta, {
			index: newIdx,
			prevIndex: prevIdx,
			scrollItemsCount: this.$scrollItems.length
		});
	}
}

export default ScrollContainer;
