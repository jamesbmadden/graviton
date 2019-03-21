# Graviton Panel
Panel Web Component Designed By James Madden, Loosely following the Material Spec.
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="https://unpkg.com/@graviton/panel@latest"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<gvt-panel>
  <h3 slot="title">Graviton Panel</h3>
  <p slot="body">Graviton Panel is a component that allows hiding content until the panel is expanded.</p>
</gvt-panel>
<gvt-panel id="value-panel" value="Jay">
  <h3 slot="title">With Value</h3>
  <div slot="body">
    <label for="name-input">Name: </label>
    <input id="name-input" value="Jay" />
    <script>
      document.querySelector('#name-input').addEventListener('input', event => {
        document.querySelector('#value-panel').value = event.target.value;
      });
    </script>
  </div>
</gvt-panel>
```

## Install
```
npm install @graviton/panel
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