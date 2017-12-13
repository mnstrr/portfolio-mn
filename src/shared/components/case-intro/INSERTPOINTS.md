
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: case-content, @tag: component-partial }}
{{#with case-content}}
	{{> case-content}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('case-content', CaseContent);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for CaseContent
 */
EVENTS.caseContent = {
	eventName: 'caseContent:eventName'
};
// @INSERT :: END
```
