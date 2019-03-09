# Graviton Panel
Panel Web Component Designed By James Madden, Loosely following the Material Spec.

## Install
```
git install @graviton/panel
```

Import the component into your app:
```js
import '@graviton/panel';
```
To use your own build process on the component, import
```js
import '@graviton/panel/src/gvt-panel.js';
```

## Usage

To use Graviton Panel in html:
```html
<gvt-panel></gvt-panel>
```

To put content inside the panel, use html slots:
```html
<gvt-panel>
  <h1 slot="title">Panel</h1>
  <p slot="body">
    This is a panel.
  </p>
</gvt-panel>
```

To provide a value next to the title on the panel, use the `value` attribute:
```html
<gvt-panel value="23">
  ...
</gvt-panel>
```

## Compatibility

Graviton Panel's default bundle should be compatible with the latest 2 versions of evergreen browsers, as well as IE 11. To build with different browser requirements, or to build a modern es2015 bundle, use the unbundled import (`import '@graviton/panel/src/gvt-panel.js'`) and your own build process.