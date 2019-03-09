# Graviton Button
Button Web Component Designed By James Madden, Loosely following the Material Spec.

## Install
```
git install @graviton/button
```

Import the component into your app:
```js
import '@graviton/button';
```
To use your own build process on the component, import
```js
import '@graviton/button/src/gvt-button.js';
```

## Usage

To use Graviton Button in html:
```html
<gvt-button></gvt-button>
```

To have the button filled, give it a `filled` attribute.
```html
<gvt-button filled></gvt-button>
```

## Compatibility

Graviton Button's default bundle should be compatible with the latest 2 versions of evergreen browsers, as well as IE 11. To build with different browser requirements, or to build a modern es2015 bundle, use the unbundled import (`import '@graviton/button/src/gvt-button.js'`) and your own build process.