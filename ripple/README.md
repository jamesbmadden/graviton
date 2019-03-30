# Graviton Ripple
Ripple Web Component Designed By James Madden, Loosely following the Material Spec.

## Install
```
npm install @graviton/ripple
```

Import the component into your app:
```js
import '@graviton/ripple';
```
To use your own build process on the component, import
```js
import '@graviton/ripple/src/gvt-ripple.js';
```

## Usage

To use Graviton Ripple in html:
```html
<gvt-ripple></gvt-ripple>
```

Specify the ripple's colour using the `colour` attribute. Otherwise, the ripple will be black.
```html
<gvt-ripple colour="red"></gvt-ripple>
```
Any valid CSS colour can be used.

## Compatibility

Graviton Ripple's default bundle should be compatible with the latest 2 versions of evergreen browsers, as well as IE 11. To build with different browser requirements, or to build a modern es2015 bundle, use the unbundled import (`import '@graviton/ripple/src/gvt-ripple.js'`) and your own build process.