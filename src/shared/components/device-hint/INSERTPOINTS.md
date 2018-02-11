
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: device-hint, @tag: component-partial }}
{{#with device-hint}}
	{{> device-hint}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('device-hint', DeviceHint);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for DeviceHint
 */
EVENTS.deviceHint = {
	eventName: 'deviceHint:eventName'
};
// @INSERT :: END
```
