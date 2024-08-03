<div align="center">
<img src="logo-white.png#gh-dark-mode-only" height="40">
<img src="logo.png#gh-light-mode-only" height="40">

<hr />
<p>This source code is distributed under the <a href="LICENSE">AGPL 3.0</a>
license, while Vanilla OS is a product of <a href="//fabricators.ltd" target="_blank">fabricators.ltd</a>.

Please note that all assets on this website are owned by fabricators.ltd and
the Vanilla OS Contributors Team.</p>
</div>

## Development

### CSS Convention

Our framework follows the [BEM (Block, Element, Modifier)](https://en.bem.info/methodology/quick-start/)
convention for CSS classes.

Colors are defined in the `assets/css/colors/default.css` and `assets/css/colors/dark.css`
files, they must be unique and not overlap with each other.

Each new component (block) must be defined in a separate file in the `assets/css/components`
directory and must follow the following structure:

```css
.block {
    /* Color Variables */
    --block-color: var(--color-primary);
    --block-element-color: var(--color-secondary);
}

.block {
    /* Block Styles */
    background-color: var(--block-color);
}

.block-element {
    /* Element Styles */
    background-color: var(--block-element-color);
    width: 100px;
    height: 100px;
}

.block--modifier {
    /* Modifier Styles */
    width: 200px;
    height: 200px;
}

/* Media Queries */
```

### Build and Run

To run the Vanilla OS website locally, you need to have [Vue.js](https://vuejs.org/) and
[Vite](https://vitejs.dev/) installed.

#### Build articles index

```bash
pnpm generate-articles
```

#### Run the website locally

This will also build the articles index.

```bash
pnpm dev
```

## Production Build

This will also build the articles index.

```bash
pnpm build
```
