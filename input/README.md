# Graviton Input
Input Web Component Designed By James Madden, Loosely following the Material Spec.
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="https://unpkg.com/@graviton/input@latest"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<gvt-input>Input</gvt-input>
<gvt-input type="date">Date Input</gvt-input>
<gvt-input type="time">Time Input</gvt-input>
<gvt-input value="Jay">Name</gvt-input>
```

## Install
```
npm install @graviton/input
```

Import the component into your app:
```js
import '@graviton/input';
```
To use your own build process on the component, import
```js
import '@graviton/input/src/gvt-input.js';
```

## Usage

To use Graviton Input in html:
```html
<gvt-input></gvt-input>
```

Provide a label for the input:
```html
<gvt-input>Username</gvt-input>
```

Set the input type:
```html
<gvt-input type="password">Password</gvt-input>
```

Set an autocomplete type:
```html
<gvt-input type="password" autocomplete="password">Password</gvt-input>
```

Provide a default value:
```html
<gvt-input type="password" autocomplete="password" value="Hello World!">Password</gvt-input>
```

## Compatibility

Graviton Input's default bundle should be compatible with the latest 2 versions of evergreen browsers, as well as IE 11. To build with different browser requirements, or to build a modern es2015 bundle, use the unbundled import (`import '@graviton/input/src/gvt-input.js'`) and your own build process.