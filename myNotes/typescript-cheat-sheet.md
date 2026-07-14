# TypeScript Cheat Sheet (Coming from JavaScript)

If you already know JavaScript, TypeScript is just JavaScript **plus types**.

---

# 1. Type Annotation

The basic syntax is:

```ts
variable: Type
```

Example:

```ts
let age: number = 25;
let name: string = "John";
let isLoggedIn: boolean = true;
```

Without TypeScript:

```js
let age = 25;
```

---

# 2. Type Inference

Most of the time you don't need to specify the type.

```ts
let age = 25;
```

TypeScript automatically knows:

```ts
age // number
```

Likewise:

```ts
let username = "John"; // string
let online = false; // boolean
```

---

# 3. Primitive Types

```ts
string
number
boolean
null
undefined
bigint
symbol
```

Example:

```ts
let age: number = 25;
let username: string = "Alex";
let active: boolean = true;
```

---

# 4. Arrays

JavaScript:

```js
const numbers = [1,2,3];
```

TypeScript:

```ts
const numbers: number[] = [1,2,3];
```

or

```ts
const numbers: Array<number> = [1,2,3];
```

Strings:

```ts
const names: string[] = ["John", "Jane"];
```

Objects:

```ts
const users: User[] = [];
```

---

# 5. Objects

```ts
const person: {
    name: string;
    age: number;
} = {
    name: "John",
    age: 30
};
```

Usually you'll use an interface instead.

---

# 6. Interfaces

```ts
interface Person {
    name: string;
    age: number;
}
```

Use it:

```ts
const user: Person = {
    name: "Alex",
    age: 25
};
```

---

# 7. Type Aliases

Instead of interface:

```ts
type Person = {
    name: string;
    age: number;
}
```

Usage:

```ts
const user: Person = {
    name: "Alex",
    age: 30
};
```

---

# 8. Optional Properties

```ts
interface User {
    name: string;
    age?: number;
}
```

Now this is valid:

```ts
const user = {
    name: "John"
}
```

---

# 9. Readonly Properties

```ts
interface User {
    readonly id: number;
}
```

Cannot do:

```ts
user.id = 10;
```

---

# 10. Functions

Parameter types:

```ts
function greet(name: string) {
    return `Hello ${name}`;
}
```

Return type:

```ts
function greet(name: string): string {
    return `Hello ${name}`;
}
```

Void:

```ts
function log(message: string): void {
    console.log(message);
}
```

---

# 11. Arrow Functions

```ts
const add = (a: number, b: number): number => {
    return a + b;
}
```

---

# 12. Function Parameters

Optional:

```ts
function greet(name?: string) {}
```

Default:

```ts
function greet(name: string = "Guest") {}
```

---

# 13. Union Types

A variable can have multiple types.

```ts
let id: string | number;
```

Example:

```ts
id = 10;
id = "abc";
```

---

# 14. Literal Types

```ts
let direction: "left" | "right";
```

Only these values work.

---

# 15. Any

Turns TypeScript off.

```ts
let data: any;
```

Avoid when possible.

---

# 16. Unknown

Safer than any.

```ts
let value: unknown;
```

Need to check before using.

```ts
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

---

# 17. Never

Function never returns.

```ts
function throwError(): never {
    throw new Error();
}
```

---

# 18. Tuples

Fixed-length arrays.

```ts
let person: [string, number];

person = ["John", 30];
```

---

# 19. Enums

```ts
enum Role {
    Admin,
    User,
    Guest
}
```

Usage:

```ts
let role = Role.Admin;
```

---

# 20. Type Assertions

Tell TypeScript what something is.

```ts
const input = document.getElementById("name") as HTMLInputElement;
```

or

```ts
const input = <HTMLInputElement>document.getElementById("name");
```

(JSX projects use `as`.)

---

# 21. Interfaces for Functions

```ts
interface Add {
    (a: number, b: number): number;
}
```

Usage:

```ts
const add: Add = (a,b) => a+b;
```

---

# 22. Extending Interfaces

```ts
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}
```

---

# 23. Extending Types

```ts
type Animal = {
    name: string;
}

type Dog = Animal & {
    breed: string;
}
```

---

# 24. Classes

```ts
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
```

---

# 25. Access Modifiers

```ts
public
private
protected
```

Example:

```ts
class User {

    public username: string;

    private password: string;

    protected id: number;

}
```

---

# 26. Generics

Without generics:

```ts
function identity(value: any) {
    return value;
}
```

With generics:

```ts
function identity<T>(value: T): T {
    return value;
}
```

Usage:

```ts
identity<string>("Hello");
identity<number>(10);
```

Usually TypeScript infers it.

---

# 27. Generic Arrays

```ts
const users: Array<User> = [];
```

Same as:

```ts
const users: User[] = [];
```

---

# 28. Record

```ts
const ages: Record<string, number> = {
    Alex: 30,
    John: 22
};
```

Equivalent to:

```ts
{
    [key: string]: number
}
```

---

# 29. Index Signature

```ts
interface Scores {
    [player: string]: number;
}
```

---

# 30. keyof

```ts
interface User {
    name: string;
    age: number;
}

type UserKeys = keyof User;
```

Result:

```ts
"name" | "age"
```

---

# 31. typeof

```ts
const user = {
    name: "John"
};

type User = typeof user;
```

---

# 32. Partial

Makes everything optional.

```ts
Partial<User>
```

Equivalent:

```ts
{
    name?: string;
    age?: number;
}
```

---

# 33. Pick

```ts
type BasicUser = Pick<User, "name" | "age">
```

---

# 34. Omit

```ts
type PublicUser = Omit<User, "password">
```

---

# 35. React Props

```tsx
interface ButtonProps {
    text: string;
}
```

Component:

```tsx
function Button({ text }: ButtonProps) {
    return <button>{text}</button>;
}
```

---

# 36. React Children

```tsx
interface LayoutProps {
    children: React.ReactNode;
}
```

---

# 37. React useState

```tsx
const [count, setCount] = useState<number>(0);
```

Objects:

```tsx
const [user, setUser] = useState<User | null>(null);
```

---

# 38. React Events

```tsx
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {}
```

Input:

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {}
```

---

# 39. Type Imports

```ts
import type { User } from "./types";
```

---

# 40. Export Types

```ts
export interface User {}
```

or

```ts
export type User = {}
```

---

# 41. Difference Between ":" and "="

This confuses almost everyone.

```ts
const age: number = 25;
```

Read as:

```
age is a number and equals 25
```

- `:` → specifies the type
- `=` → assigns the value

---

# 42. Function Syntax

Parameters:

```ts
function greet(name: string)
```

Return type:

```ts
function greet(name: string): string
```

---

# 43. Destructuring with Types

JavaScript:

```js
function hello({name}) {}
```

TypeScript:

```ts
function hello({name}: User) {}
```

---

# 44. Interfaces vs Types

Use **interface** for object shapes.

```ts
interface User {
    name: string;
}
```

Use **type** for everything else.

```ts
type Status = "loading" | "success" | "error";
```

---

# 45. Remember This Rule

Most TypeScript syntax follows this pattern:

```
name: Type
```

Examples:

const age: number

const names: string[]

const user: User

props: Props

children: React.ReactNode

(event: MouseEvent)

function add(a: number): number