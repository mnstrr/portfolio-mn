
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: logo, @tag: component-partial }}
{{#with logo}}
	{{> logo}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('logo', Logo);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Logo
 */
EVENTS.logo = {
	eventName: 'logo:eventName'
};
// @INSERT :: END
```
