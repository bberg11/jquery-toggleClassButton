# jQuery Toggle Class Button

jQuery plugin for toggling class names on a target element when triggering an event on another element

## Installation

```html
<script type="text/javascript" src="/path/to/jquery"></script>
<script type="text/javascript" src="/path/to/jquery.toggleClassButton"></script>
```
## Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
event | string | 'event' | Choose any jQuery event to trigger toggle
target | string | '' | jQuery selector for element you want class toggle on
className | string | '' | class name you want toggled
context | string | 'body' | jQuery selector for a context to query the target within
