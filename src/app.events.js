/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

/**
 * Events Global
 */
const EVENTS = {};


/**
 * Events for ScrollContainer
 */
EVENTS.scrollContainer = {
	updateMeta: 'scrollContainer:updateMeta'
};


/**
 * Events for ScrollItem
 */
EVENTS.scrollItem = {
	eventName: 'scrollItem:eventName'
};


/**
 * Events for Logo
 */
EVENTS.logo = {
	clicked: 'logo:clicked'
};


/**
 * Events for Navigation
 */
EVENTS.navigation = {
	clicked: 'navigation:clicked'
};


/**
 * Events for Pagination
 */
EVENTS.pagination = {
	eventName: 'pagination:eventName'
};

// @INSERTPOINT :: @ref: js-events

export default EVENTS;
