# ES Modules (ESM) Syntax Cheat Sheet

## What is an ES Module?

ES Modules (ESM) are JavaScript's standard module system.

A module can:

- Export variables, functions, classes, or values
- Import exports from another module
- Have its own scope
- Execute only once

---

# Export Syntax

## Named Export

```javascript
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export class Calculator {}
```

---

## Export Existing Variables

```javascript
const name = "Alice";
const age = 25;

export { name, age };
```

Rename exports:

```javascript
export { name as username };
```

---

## Export Multiple

```javascript
const a = 1;
const b = 2;
const c = 3;

export { a, b, c };
```

---

## Default Export

Only one default export is allowed per module.

```javascript
export default function App() {}
```

```javascript
export default class User {}
```

```javascript
const config = {};

export default config;
```

---

## Default + Named Together

```javascript
export const version = "1.0";

export default function App() {}
```

---

# Import Syntax

## Import Named

```javascript
import { add } from "./math.js";
```

---

## Import Multiple

```javascript
import { add, subtract, multiply } from "./math.js";
```

---

## Rename Imports

```javascript
import { add as plus } from "./math.js";
```

---

## Import Default

```javascript
import App from "./App.js";
```

The imported name is arbitrary.

```javascript
import MainComponent from "./App.js";
```

---

## Import Default + Named

```javascript
import App, { version } from "./App.js";
```

---

## Namespace Import

```javascript
import * as MathUtils from "./math.js";

MathUtils.add(1, 2);
MathUtils.subtract(5, 1);
```

---

## Side Effect Import

Runs the module without importing bindings.

```javascript
import "./styles.css";

import "./polyfills.js";
```

---

## Import Everything

```javascript
import * as Utils from "./utils.js";
```

---

# Re-export

## Re-export Named

```javascript
export { add } from "./math.js";
```

---

## Re-export Multiple

```javascript
export { add, subtract } from "./math.js";
```

---

## Re-export Default

```javascript
export { default } from "./App.js";
```

Rename default:

```javascript
export { default as App } from "./App.js";
```

---

## Export Everything

```javascript
export * from "./math.js";
```

---

## Export Everything As Namespace

```javascript
export * as Utils from "./utils.js";
```

---

# Dynamic Import

Returns a Promise.

```javascript
const module = await import("./math.js");
```

```javascript
import("./math.js").then((module) => {
  module.add(1, 2);
});
```

---

# Top-Level Await

```javascript
const data = await fetch("/api");
```

Only valid inside ES modules.

---

# Module Specifiers

Relative:

```javascript
import "./file.js";
import "../utils.js";
```

Absolute:

```javascript
import "/src/app.js";
```

Package:

```javascript
import React from "react";
```

Scoped package:

```javascript
import express from "@scope/package";
```

URL:

```javascript
import config from "https://example.com/config.js";
```

Node built-in:

```javascript
import fs from "node:fs";
```

---

# Import Assertions / Attributes

JSON:

```javascript
import data from "./data.json" with { type: "json" };
```

Dynamic:

```javascript
await import("./data.json", {
  with: { type: "json" }
});
```

---

# Aliasing

Export alias:

```javascript
export { value as answer };
```

Import alias:

```javascript
import { answer as result } from "./values.js";
```

---

# Anonymous Default Export

```javascript
export default function () {}
```

```javascript
export default class {}
```

---

# Default Export Expressions

```javascript
export default 42;
```

```javascript
export default {};
```

```javascript
export default [];
```

```javascript
export default () => {};
```

---

# Mixing Default and Named

module.js

```javascript
export const a = 1;
export const b = 2;
export default 3;
```

consumer.js

```javascript
import value, { a, b } from "./module.js";
```

---

# Circular Dependencies

```javascript
// a.js
import { b } from "./b.js";

export const a = 1;
```

```javascript
// b.js
import { a } from "./a.js";

export const b = 2;
```

ESM supports circular references using live bindings.

---

# Live Bindings

exporter.js

```javascript
export let counter = 0;

export function increment() {
  counter++;
}
```

consumer.js

```javascript
import { counter, increment } from "./counter.js";

increment();

console.log(counter);
```

Imported bindings update automatically.

---

# Invalid Syntax

❌ Multiple defaults

```javascript
export default 1;
export default 2;
```

❌ Import inside a block

```javascript
if (true) {
  import { x } from "./a.js";
}
```

Use dynamic import instead.

❌ Reassign imported bindings

```javascript
import { count } from "./counter.js";

count++;
```

Imports are read-only.

---

# File Extensions

Common:

```text
.js
.mjs
.cjs (CommonJS, not ESM)
```

---

# Node.js ESM

Enable via:

package.json

```json
{
  "type": "module"
}
```

or use

```text
.mjs
```

---

# Browser Module

```html
<script type="module" src="app.js"></script>
```

---

# Useful Patterns

Barrel file:

```javascript
export * from "./math.js";
export * from "./string.js";
export * from "./date.js";
```

Consumer:

```javascript
import { add, capitalize } from "./index.js";
```

---

# Cheat Sheet

Named export

```javascript
export const a = 1;
```

Named import

```javascript
import { a } from "./module.js";
```

Default export

```javascript
export default function () {}
```

Default import

```javascript
import App from "./App.js";
```

Namespace import

```javascript
import * as Utils from "./utils.js";
```

Export all

```javascript
export * from "./module.js";
```

Namespace export

```javascript
export * as Utils from "./utils.js";
```

Dynamic import

```javascript
await import("./module.js");
```

Side-effect import

```javascript
import "./setup.js";
```

Top-level await

```javascript
await fetch("/api");
```

JSON module

```javascript
import config from "./config.json" with { type: "json" };
```

Node built-in

```javascript
import fs from "node:fs";
```