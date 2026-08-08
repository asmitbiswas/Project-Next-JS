export default function TypeAliases() {
    return (
        <div>

            <h1>Type Aliases</h1>

            <p>
                Type aliases allow you to create a custom name for a type.
                You create a type alias using the <code>type</code> keyword.
            </p>

            <h2>Basic Type Alias</h2>

            <p>
                A type alias can give a name to a simple type such as
                <code>string</code> or <code>number</code>.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type Username = string;

let username: Username = "Asmit";`}
            </pre>

            <h2>Object Type Alias</h2>

            <p>
                Type aliases are commonly used to describe the structure of
                objects.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type User = {
    name: string;
    age: number;
};

let user: User = {
    name: "Asmit",
    age: 13
};`}
            </pre>

            <h2>Optional Properties</h2>

            <p>
                You can make properties optional by adding
                <code>?</code> after the property name.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type User = {
    name: string;
    age: number;
    email?: string;
};

let user: User = {
    name: "Asmit",
    age: 13
};`}
            </pre>

            <h2>Union Type Alias</h2>

            <p>
                Type aliases can also be used to create union types.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type ID = string | number;

let userId: ID;

userId = "abc123";
userId = 123;`}
            </pre>

            <h2>Literal Type Alias</h2>

            <p>
                A type alias can contain specific allowed values using
                literal types.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type Direction = "left" | "right" | "up" | "down";

let direction: Direction = "left";`}
            </pre>

            <h2>Type Alias for Arrays</h2>

            <p>
                You can create a type alias for an array type.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type Numbers = number[];

let scores: Numbers = [10, 20, 30, 40];`}
            </pre>

            <h2>Type Alias for Functions</h2>

            <p>
                Type aliases can describe the parameters and return type of
                a function.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));`}
            </pre>

            <h2>Combining Type Aliases</h2>

            <p>
                Type aliases can be combined with intersections using the
                <code>&amp;</code> operator.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type Person = {
    name: string;
};

type Developer = {
    language: string;
};

type User = Person & Developer;

let user: User = {
    name: "Asmit",
    language: "TypeScript"
};`}
            </pre>

            <h2>Type Alias vs Interface</h2>

            <p>
                Type aliases and interfaces can both describe object shapes.
                Type aliases are especially useful when working with unions,
                intersections, and other more complex types.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`type User = {
    name: string;
    age: number;
};

interface Admin {
    name: string;
    permissions: string[];
}`}
            </pre>

            <h2>Summary</h2>

            <p>
                Type aliases let you create reusable names for types.
                They can represent simple types, objects, arrays, functions,
                unions, intersections, and literal types.
            </p>

        </div>
    );
}