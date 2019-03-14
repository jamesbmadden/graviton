# Graviton Code
Code Web Component Designed By James Madden, Loosely following the Material Spec.

## Install
```
npm install @graviton/code
```

Import the component into your app:
```js
import '@graviton/code';
```
To use your own build process on the component, import
```js
import '@graviton/code/src/gvt-code.js';
```

## Usage

To use Graviton Code in html:
```html
<gvt-code></gvt-code>
```

To have the code filled, give it a `filled` attribute.
```html
<gvt-code filled></gvt-code>
```

## Compatibility

Graviton Code's default bundle should be compatible with the latest 2 versions of evergreen browsers, as well as IE 11. To build with different browser requirements, or to build a modern es2015 bundle, use the unbundled import (`import '@graviton/code/src/gvt-code.js'`) and your own build process.