# clsx Cheat Sheet

> A quick reference for using **clsx** to conditionally build class names in JavaScript, TypeScript, React, and Next.js.

---

# Installation

```bash
npm install clsx
```

or

```bash
yarn add clsx
```

or

```bash
pnpm add clsx
```

---

# Import

```tsx
import clsx from "clsx";
```

---

# Basic Usage

```tsx
clsx("btn");
```

Result

```text
btn
```

---

# Multiple Classes

```tsx
clsx("btn", "btn-primary", "rounded");
```

Result

```text
btn btn-primary rounded
```

---

# Conditional Classes

```tsx
clsx(
  "btn",
  isActive && "bg-blue-500",
  disabled && "opacity-50"
);
```

If

```tsx
isActive = true
disabled = false
```

Result

```text
btn bg-blue-500
```

---

# Ternary Expressions

```tsx
clsx(
  isDark
    ? "bg-black text-white"
    : "bg-white text-black"
);
```

---

# Objects

Only keys with truthy values are included.

```tsx
clsx({
  active: isActive,
  disabled: isDisabled,
  loading: isLoading,
});
```

If

```tsx
isActive = true
isDisabled = false
isLoading = true
```

Result

```text
active loading
```

---

# Arrays

```tsx
clsx([
  "btn",
  isActive && "active",
  isLarge && "text-lg",
]);
```

---

# Nested Arrays

```tsx
clsx(
  "btn",
  [
    "rounded",
    [
      "shadow",
      isActive && "bg-blue-500",
    ],
  ]
);
```

Result

```text
btn rounded shadow bg-blue-500
```

---

# Ignored Values

These values are ignored automatically.

```tsx
clsx(
  null,
  undefined,
  false,
  0,
  "",
  NaN
);
```

Result

```text
""
```

---

# Mixing Everything

```tsx
clsx(
  "btn",
  isPrimary && "bg-blue-600",
  ["rounded", "shadow"],
  {
    disabled: isDisabled,
    loading: isLoading,
  }
);
```

---

# React Example

```tsx
<button
  className={clsx(
    "px-4 py-2 rounded transition",
    isPrimary && "bg-blue-600 text-white",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
>
  Submit
</button>
```

---

# Card Example

```tsx
<div
  className={clsx(
    "rounded-xl p-6 shadow",
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  )}
>
  Content
</div>
```

---

# Active Navigation

```tsx
<Link
  className={clsx(
    "px-3 py-2",
    pathname === "/dashboard" &&
      "font-bold text-blue-600"
  )}
>
  Dashboard
</Link>
```

---

# Tailwind Example

```tsx
<div
  className={clsx(
    "flex items-center",
    "justify-between",
    "rounded-lg",
    "p-4",
    isDark && "bg-slate-900",
    isDark
      ? "text-white"
      : "text-slate-900"
  )}
>
```

---

# Variant Pattern

```tsx
const buttonClass = clsx(
  "rounded px-4 py-2 transition",
  {
    "bg-blue-600 text-white": variant === "primary",
    "bg-red-600 text-white": variant === "danger",
    "bg-gray-200": variant === "secondary",
  }
);
```

---

# Size Variants

```tsx
const buttonClass = clsx(
  "rounded",
  {
    "text-sm px-2 py-1": size === "sm",
    "text-base px-4 py-2": size === "md",
    "text-lg px-6 py-3": size === "lg",
  }
);
```

---

# Disabled State

```tsx
const buttonClass = clsx(
  "transition",
  disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:bg-blue-600"
);
```

---

# Loading State

```tsx
const buttonClass = clsx(
  "flex items-center gap-2",
  loading && "pointer-events-none opacity-70"
);
```

---

# Combining External Class Names

```tsx
function Button({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      className={clsx(
        "rounded px-4 py-2",
        className
      )}
    />
  );
}
```

Usage

```tsx
<Button className="bg-red-500" />
```

Result

```text
rounded px-4 py-2 bg-red-500
```

---

# Combining with Props

```tsx
function Alert({
  success,
  error,
}: {
  success?: boolean;
  error?: boolean;
}) {
  return (
    <div
      className={clsx(
        "rounded p-4",
        success && "bg-green-500",
        error && "bg-red-500"
      )}
    />
  );
}
```

---

# Reusable Styles

```tsx
const base =
  "rounded px-4 py-2 transition";

const button = clsx(
  base,
  "bg-blue-600 text-white"
);
```

---

# Multiple Conditions

```tsx
clsx(
  isAdmin && "border",
  isOwner && "bg-yellow-100",
  isDark && "text-white",
  isLoading && "opacity-50"
);
```

---

# Dynamic Values

```tsx
clsx(
  `grid-cols-${columns}`
);
```

⚠️ **Avoid this with Tailwind CSS**, as the classes may not be detected during build time.

Prefer:

```tsx
clsx({
  "grid-cols-1": columns === 1,
  "grid-cols-2": columns === 2,
  "grid-cols-3": columns === 3,
});
```

---

# Common Patterns

## Boolean

```tsx
clsx(
  isOpen && "block"
);
```

---

## Object

```tsx
clsx({
  hidden: !isOpen,
  block: isOpen,
});
```

---

## Ternary

```tsx
clsx(
  isDark
    ? "bg-black"
    : "bg-white"
);
```

---

## Array

```tsx
clsx([
  "flex",
  isOpen && "block",
]);
```

---

## Mix

```tsx
clsx(
  "flex",
  ["gap-4"],
  {
    hidden: loading,
  },
  isDark && "bg-black"
);
```

---

# Common React Pattern

```tsx
const className = clsx(
  "transition-all duration-200",
  "rounded-lg",
  "px-4 py-2",
  {
    "bg-blue-600 text-white":
      primary,

    "bg-red-600 text-white":
      danger,

    "opacity-50 cursor-not-allowed":
      disabled,
  }
);
```

---

# Quick Reference

```text
Strings
-------
clsx("btn")

Multiple
--------
clsx("btn", "active")

Boolean
-------
clsx(isOpen && "block")

Object
------
clsx({
  active: isActive,
  disabled: isDisabled
})

Array
-----
clsx([
  "btn",
  isOpen && "block"
])

Nested
------
clsx(
  "btn",
  [
    "rounded",
    isDark && "bg-black"
  ]
)

Merge Props
-----------
clsx(
  "btn",
  className
)

Falsy Values Ignored
--------------------
false
null
undefined
0
NaN
""

Best For
--------
✔ React
✔ Next.js
✔ Tailwind CSS
✔ Conditional classes
✔ Component variants
✔ State-based styling