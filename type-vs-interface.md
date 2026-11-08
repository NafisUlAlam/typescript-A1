# Type Aliases vs. Interfaces in TypeScript

## Introduction

TypeScript provides both `type aliases` and `interface` declarations to describe the shape of data. Although they look quite similar, they have different usage depending on situation.

## Detailed Explanation

An `interface` is used to describe object shapes or prototype. We can declare the same interface multiple times with different keys and all those keys get merged into one single interface.

```ts
interface User {
  //initial declaration of User
  name: string;
}

interface User {
  //re-declaring it second time with no error
  age: number;
}

interface User {
  // another declaration
  nid: number;
}

const user: User = { name: "Nafis", age: 32, nid: 11111101 };
```

These declarations merge into one interface. When we are working on a framework or library, interface can help with re-declarations and merging prototypes. Since multiple developers might work on the same files, interfaces make their work easier by allowing re-declarations of the same interface in multiple files.

A `type alias` on the otherhand, can do multiple things. It can describe object shapes too, but it can also represent unions, intersections, primitives, tuples, and other types.

```ts
type Status = "pending" | "success" | "failed"; // union of literal types

type Coordinates = [number, number]; // a tuple
type Admin = User & { role: "admin" }; //intersection
```

One thing we can't do with `type alias` is merging object keys through re-declarations. `interface` uses `extends` keyword to take on new shapes whereas `type alias` uses `union(|)` or `intersection(&)` to merge multiple object prototypes.

## When Should You Choose One?

We can choose `interface` whenenever we are working on a library and describing an object shape. We can use `type` for primitive types or unions or intersections to create complex types. For an object shape, Typescipt documentation suggests us to use `interface` whenever we can. It also suggests using `type` in cases where objects are not involved.

## Conclusion

Programming doesn't have a solid set of rules to do a certain task. Some programmers prefer `type alias` while some prefer `interface`. Neither is wrong. It depends on the programmer's own choice. But we also must make sure that consistency is maintained while choosing an option throughout the project.
