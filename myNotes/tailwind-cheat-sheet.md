# Tailwind CSS Cheat Sheet

> A quick reference for the most commonly used Tailwind CSS utility classes.

---

# Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

Import Tailwind:

```css
@import "tailwindcss";
```

---

# Layout

## Display

```html
block
inline-block
inline
flex
inline-flex
grid
inline-grid
hidden
```

## Position

```html
static
relative
absolute
fixed
sticky
```

## Top / Right / Bottom / Left

```html
top-0
right-0
bottom-0
left-0

inset-0
inset-x-0
inset-y-0
```

## Z-Index

```html
z-0
z-10
z-20
z-30
z-40
z-50
z-auto
```

---

# Flexbox

## Direction

```html
flex-row
flex-row-reverse
flex-col
flex-col-reverse
```

## Wrap

```html
flex-wrap
flex-nowrap
```

## Justify

```html
justify-start
justify-center
justify-end
justify-between
justify-around
justify-evenly
```

## Align Items

```html
items-start
items-center
items-end
items-baseline
items-stretch
```

## Align Self

```html
self-auto
self-start
self-center
self-end
self-stretch
```

## Grow / Shrink

```html
grow
grow-0

shrink
shrink-0
```

---

# Grid

## Columns

```html
grid
grid-cols-1
grid-cols-2
grid-cols-3
grid-cols-4
grid-cols-6
grid-cols-12
```

## Rows

```html
grid-rows-1
grid-rows-2
grid-rows-3
```

## Gap

```html
gap-1
gap-2
gap-4
gap-6
gap-8

gap-x-4
gap-y-4
```

## Column Span

```html
col-span-1
col-span-2
col-span-3
col-span-full
```

---

# Spacing

## Padding

```html
p-0
p-1
p-2
p-4
p-6
p-8
p-10

px-4
py-4

pt-4
pr-4
pb-4
pl-4
```

## Margin

```html
m-0
m-2
m-4
m-6
m-8

mx-auto
mx-4
my-4

mt-4
mr-4
mb-4
ml-4
```

---

# Sizing

## Width

```html
w-0
w-1/2
w-1/3
w-2/3
w-1/4
w-full
w-screen
w-fit
w-auto
```

## Height

```html
h-0
h-32
h-64
h-full
h-screen
h-fit
h-auto
```

## Min / Max

```html
min-w-0
min-w-full

max-w-sm
max-w-md
max-w-lg
max-w-xl
max-w-2xl
max-w-screen-lg

min-h-screen
max-h-screen
```

---

# Typography

## Font Size

```html
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
text-5xl
```

## Font Weight

```html
font-thin
font-light
font-normal
font-medium
font-semibold
font-bold
font-extrabold
```

## Text Align

```html
text-left
text-center
text-right
text-justify
```

## Text Transform

```html
uppercase
lowercase
capitalize
normal-case
```

## Line Height

```html
leading-none
leading-tight
leading-normal
leading-relaxed
leading-loose
```

## Letter Spacing

```html
tracking-tight
tracking-normal
tracking-wide
tracking-wider
```

---

# Colors

## Text

```html
text-white
text-black

text-gray-500
text-red-500
text-blue-500
text-green-500
text-yellow-500
text-purple-500
```

## Background

```html
bg-white
bg-black

bg-gray-100
bg-blue-500
bg-red-500
bg-green-500
bg-yellow-500
```

## Border

```html
border
border-2

border-gray-300
border-blue-500
border-red-500
```

---

# Borders

## Radius

```html
rounded
rounded-sm
rounded-md
rounded-lg
rounded-xl
rounded-2xl
rounded-full
```

## Width

```html
border
border-2
border-4
border-8
```

---

# Effects

## Shadow

```html
shadow-sm
shadow
shadow-md
shadow-lg
shadow-xl
shadow-2xl
shadow-none
```

## Opacity

```html
opacity-0
opacity-25
opacity-50
opacity-75
opacity-100
```

---

# Background

## Size

```html
bg-cover
bg-contain
bg-auto
```

## Position

```html
bg-center
bg-top
bg-bottom
bg-left
bg-right
```

## Repeat

```html
bg-repeat
bg-no-repeat
bg-repeat-x
bg-repeat-y
```

---

# Overflow

```html
overflow-auto
overflow-hidden
overflow-scroll
overflow-x-auto
overflow-y-auto
```

---

# Cursor

```html
cursor-pointer
cursor-default
cursor-not-allowed
cursor-wait
cursor-text
cursor-move
```

---

# Transition

## Transition

```html
transition
transition-all
transition-colors
transition-opacity
transition-transform
```

## Duration

```html
duration-75
duration-150
duration-300
duration-500
duration-700
duration-1000
```

## Ease

```html
ease-linear
ease-in
ease-out
ease-in-out
```

---

# Transform

```html
scale-95
scale-100
scale-105
scale-110

rotate-45
-rotate-45

translate-x-2
translate-y-2

skew-x-6
skew-y-6
```

---

# Hover

```html
hover:bg-blue-600
hover:text-white
hover:scale-105
hover:shadow-lg
hover:opacity-80
```

---

# Focus

```html
focus:outline-none
focus:ring
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
```

---

# Active

```html
active:scale-95
active:bg-blue-700
```

---

# Disabled

```html
disabled:opacity-50
disabled:cursor-not-allowed
```

---

# Dark Mode

```html
dark:bg-gray-900
dark:text-white
dark:border-gray-700
dark:hover:bg-gray-800
```

---

# Responsive Breakpoints

| Prefix | Min Width |
|---------|----------:|
| sm: | 640px |
| md: | 768px |
| lg: | 1024px |
| xl: | 1280px |
| 2xl: | 1536px |

Example:

```html
<div class="text-sm md:text-lg lg:text-2xl">
```

---

# Common Responsive Example

```html
<div class="
w-full
md:w-1/2
lg:w-1/3
xl:w-1/4
">
```

---

# Common Component

## Button

```html
<button
  class="
  px-4 py-2
  bg-blue-600
  text-white
  rounded-lg
  hover:bg-blue-700
  transition
  "
>
  Button
</button>
```

## Card

```html
<div
  class="
  bg-white
  rounded-xl
  shadow-lg
  p-6
  border
  "
>
  Card Content
</div>
```

## Center Everything

```html
<div class="flex items-center justify-center min-h-screen">
```

---

# Useful Utilities

```html
container
mx-auto

sr-only

select-none

truncate

aspect-square

aspect-video

object-cover

object-contain

whitespace-nowrap

break-words

divide-y

divide-x

ring

ring-2

ring-blue-500
```

---

# Arbitrary Values

```html
w-[250px]

h-[calc(100vh-4rem)]

bg-[#1e293b]

text-[18px]

rounded-[12px]

mt-[37px]
```

---

# Arbitrary Variants

```html
hover:[background:#2563eb]

[&>*]:p-4

[&_img]:rounded-lg

[&_a]:underline
```

---

# Quick Reference

```text
Layout
------
flex
grid
block
hidden

Spacing
--------
p-4
px-6
py-2
m-4
mx-auto

Sizing
------
w-full
h-screen
max-w-xl

Typography
----------
text-xl
font-bold
text-center

Colors
------
bg-blue-500
text-white
border-gray-300

Effects
-------
rounded-lg
shadow-md

Responsive
----------
sm:
md:
lg:
xl:
2xl:

States
------
hover:
focus:
active:
disabled:
dark:
```