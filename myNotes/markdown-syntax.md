# Markdown Syntax Cheat Sheet

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## Paragraphs

Just write text separated by a blank line.

This is another paragraph.

---

## Line Breaks

End a line with two spaces.
Or use an empty line for a new paragraph.

---

## Emphasis

*Italic*
_Italic_

**Bold**
__Bold__

***Bold Italic***
___Bold Italic___

~~Strikethrough~~

---

## Blockquotes

> This is a blockquote.
>
> It can span multiple lines.

Nested:

> Level 1
>> Level 2
>>> Level 3

---

## Lists

### Unordered

- Item
- Item
  - Nested Item
    - Deep Nested

* Item
+ Item

### Ordered

1. First
2. Second
3. Third

Nested:

1. First
   1. Sub item
   2. Sub item

---

## Task Lists

- [ ] Incomplete
- [x] Complete

---

## Inline Code

Use `code` inside text.

---

## Code Blocks

```python
print("Hello")
```

```javascript
console.log("Hello");
```

```bash
ls -la
```

Plain:

```
Some text
```

---

## Horizontal Rule

---

***

___

---

## Links

[OpenAI](https://openai.com)

Reference style:

[Google][google]

[google]: https://google.com

Automatic:

<https://example.com>

Email:

<user@example.com>

---

## Images

![Alt text](image.png)

With title:

![Alt text](image.png "Title")

Reference style:

![Logo][logo]

[logo]: logo.png

---

## Tables

| Name | Age | City |
|------|----:|:----:|
| Alice | 20 | NY |
| Bob | 30 | LA |

Alignment:

| Left | Center | Right |
|:-----|:------:|------:|
| A | B | C |

---

## Escaping Characters

\*
\_
\`
\\
\[
\]

---

## Footnotes

Here is a sentence.[^1]

[^1]: Footnote text.

---

## Definition Lists (supported by some parsers)

Term
: Definition

---

## HTML

<b>Bold</b>

<i>Italic</i>

<details>
<summary>Click me</summary>

Hidden content.

</details>

---

## Checkboxes

- [ ] Task
- [x] Done

---

## Emoji (GitHub)

:smile:
:rocket:
:heart:

---

## Mentions (GitHub)

@username

---

## Issue References (GitHub)

#123

---

## Math (supported by some parsers)

Inline:

$E = mc^2$

Block:

$$
\int_a^b f(x)\,dx
$$

---

## Superscript (some parsers)

X^2^

---

## Subscript (some parsers)

H~2~O

---

## Highlight (some parsers)

==Highlighted==

---

## Keyboard Keys (HTML)

<kbd>Ctrl</kbd> + <kbd>C</kbd>

---

## Comments

<!-- This won't appear -->

---

## Collapsible Section (HTML)

<details>
<summary>Expand</summary>

Hidden text.

</details>

---

## Automatic URL

https://example.com

---

## Mixed Example

# Project

> Simple Markdown example.

## Features

- Fast
- Easy
- Free

### Install

```bash
npm install
```

### Usage

```javascript
import app from "./app";
```

Visit:

https://example.com

| Command | Description |
|----------|-------------|
| npm run dev | Start |
| npm test | Test |

- [x] Documentation
- [ ] Deployment

**Done!**
-------------