# Understanding `any`, `unknown`, and `never` in TypeScript

## Introduction

TypeScript uses `any`, `unknown`, and `never` to represent very different levels of type information. Knowing how they behave is important for writing safe and predictable code.

## Detailed Explanation

`any` and `unknown` are on the highest level of type hierarchy in TS. We can assign any type i.e literal, number, string, object, array or complex types to them.

The `any` type isn't actually made to use when we actually know the type of the data we are working with. Declaring some data with type `any` will disable any type checking from typescript which is not intended.

```ts
let value: any = "hello"; // though value is string, we force it to take any type
value.toFixed(); //calling toFixed() on type any disables type checking from typescript, fails at runtime
```

When we are unsure about the type of the data we are working with, we can use `any` but still
we need to be reasonable about using it instead of `unknown`

The `unknown` type can also hold any type of value, but TypeScript does not allow us to use that value until you narrow its type.

```ts
let input: unknown = "hello";

input.toUpperCase(); //gives error, we need to narrow it down
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

This is why `unknown` is safer than `any` because it forces us to check the type of the data first before using it.

The `never` type on the bottom most tier of type hierarchy. It can never hold any type but all other types can hold it. When throwing errors we get this `never` type.

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

## Conclusion

We can think of using `any` when we don't want to go through type checking. We need to use `unknown` when dealing with data from inputs or Apis in order to use those data through proper type checking. `never` is the type we get from throwing errors.
