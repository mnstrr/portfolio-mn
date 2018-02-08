
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: pagination, @tag: component-partial }}
{{#with pagination}}
	{{> pagination}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('pagination', Pagination);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Pagination
 */
EVENTS.pagination = {
	eventName: 'pagination:eventName'
};
// @INSERT :: END
```
