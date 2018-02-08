
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: header, @tag: component-partial }}
{{#with header}}
	{{> header}}
{{/with}}
{{! @INSERT :: END }}
```
