
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: scroll-item, @tag: component-partial }}
{{#with scroll-item}}
	{{> scroll-item}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('scroll-item', ScrollItem);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for ScrollItem
 */
EVENTS.scrollItem = {
	eventName: 'scrollItem:eventName'
};
// @INSERT :: END
```
