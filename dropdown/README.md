# Graviton Dropdown
Dropdown Web Component Designed By James Madden, Loosely following the Material Spec.
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="https://unpkg.com/@graviton/dropdown@latest"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<gvt-dropdown options='["Hello", "World", "Foo", "Bar", "Five", "Six"]'>Dropdown</gvt-dropdown>
```

## Install
```
npm install @graviton/dropdown
```

Import the component into your app:
```js
import '@graviton/dropdown';
```
To use your own build process on the component, import
```js
import '@graviton/dropdown/src/gvt-dropdown.js';
```

## Usage

To use Graviton Dropdown in html:
```html
<gvt-dropdown></gvt-dropdown>
```

To give the dropdown options, provide a valid JSON string for the `options` attribute:
```html
<gvt-dropdown options='["One", "Two", "Three"]'></gvt-dropdown>
```

If you're using a Framework that can send more advanced objects as properties, you can use that instead.

## Compatibility

Graviton Dropdown's default bundle should be compatible with the latest 2 versions of evergreen browsers, as well as IE 11. To build with different browser requirements, or to build a modern es2015 bundle, use the unbundled import (`import '@graviton/dropdown/src/gvt-dropdown.js'`) and your own build process.