
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: scroll-container, @tag: component-partial }}
{{#with scroll-container}}
	{{> scroll-container}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('scroll-container', ScrollContainer);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for ScrollContainer
 */
EVENTS.scrollContainer = {
	eventName: 'scrollContainer:eventName'
};
// @INSERT :: END
```
