
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: color, @tag: component-partial }}
{{#with color}}
	{{> color}}
{{/with}}
{{! @INSERT :: END }}
```
