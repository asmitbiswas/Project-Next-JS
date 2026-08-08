export default function TypeInterface() {
    return (
        <div>

            <h1>Type & Interface</h1>

            <p>
                Type aliases and interfaces allow you to define the shape and
                structure of data in TypeScript. They make complex types
                easier to reuse and understand.
            </p>

            <h2>Type Alias</h2>

            <p>
                A type alias allows you to create a custom name for a type.
                The <code>type</code> keyword is used to create one.
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

            <h2>Object Types</h2>

            <p>
                Type aliases can describe the structure of objects.
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

const user: User = {
    name: "Asmit",
    age: 13
};`}
            </pre>

            <h2>Optional Properties</h2>

            <p>
                Add <code>?</code> after a property name to make that
                property optional.
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
    age?: number;
};

const user: User = {
    name: "Asmit"
};`}
            </pre>

            <h2>Union Types</h2>

            <p>
                A union type allows a value to be one of several types.
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

let userId: ID = 101;

userId = "user-101";`}
            </pre>

            <h2>Type Aliases with Functions</h2>

            <p>
                You can use type aliases to describe function signatures.
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
};`}
            </pre>

            <h2>Interface</h2>

            <p>
                An interface describes the structure of an object. It is
                commonly used when working with objects and classes.
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
{`interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Asmit",
    age: 13
};`}
            </pre>

            <h2>Optional Interface Properties</h2>

            <p>
                Interfaces can also have optional properties using
                <code>?</code>.
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
{`interface User {
    name: string;
    age?: number;
}

const user: User = {
    name: "Asmit"
};`}
            </pre>

            <h2>Readonly Properties</h2>

            <p>
                The <code>readonly</code> keyword prevents a property from
                being reassigned after the object is created.
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
{`interface User {
    readonly id: number;
    name: string;
}

const user: User = {
    id: 101,
    name: "Asmit"
};

user.name = "Alex";

// user.id = 202; // Error`}
            </pre>

            <h2>Extending Interfaces</h2>

            <p>
                An interface can extend another interface using the
                <code>extends</code> keyword.
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
{`interface User {
    name: string;
}

interface Admin extends User {
    permissions: string[];
}

const admin: Admin = {
    name: "Asmit",
    permissions: ["manage-users"]
};`}
            </pre>

            <h2>Interface with Functions</h2>

            <p>
                Interfaces can describe the parameters and return type of
                function-like objects.
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
{`interface Calculator {
    (a: number, b: number): number;
}

const add: Calculator = (a, b) => {
    return a + b;
};`}
            </pre>

            <h2>Type vs Interface</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    margin: "24px 0"
                }}
            >
                <tbody>
                    <tr>
                        <th
                            style={{
                                border: "1px solid #333",
                                padding: "12px",
                                textAlign: "left",
                                backgroundColor: "#111"
                            }}
                        >
                            Feature
                        </th>

                        <th
                            style={{
                                border: "1px solid #333",
                                padding: "12px",
                                textAlign: "left",
                                backgroundColor: "#111"
                            }}
                        >
                            Type
                        </th>

                        <th
                            style={{
                                border: "1px solid #333",
                                padding: "12px",
                                textAlign: "left",
                                backgroundColor: "#111"
                            }}
                        >
                            Interface
                        </th>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Objects
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Yes
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Yes
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Union Types
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Yes
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            No
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Extends
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Intersections
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            <code>extends</code>
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Function Types
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Yes
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Yes
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>When to Use Type</h2>

            <p>
                Use <code>type</code> when you need unions, intersections,
                tuples, or more complex type compositions.
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
{`type Status = "loading" | "success" | "error";`}
            </pre>

            <h2>When to Use Interface</h2>

            <p>
                Interfaces are especially useful for defining the shape of
                objects and creating structures that can be extended.
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
{`interface Product {
    name: string;
    price: number;
}`}
            </pre>

            <h2>Summary</h2>

            <p>
                Both <code>type</code> and <code>interface</code> are powerful
                ways to describe data in TypeScript. Interfaces are commonly
                used for object structures, while type aliases are especially
                useful for unions, intersections, tuples, and other type
                combinations.
            </p>

        </div>
    );
}