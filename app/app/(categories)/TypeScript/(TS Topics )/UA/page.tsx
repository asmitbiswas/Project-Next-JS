
export default function UnionTypes() {
    return (
        <div>

            <h1>Union Types</h1>

            <p>
                Union types allow a variable to have more than one possible type.
                You create a union type using the <code>|</code> operator.
            </p>

            <h2>Basic Union</h2>

            <p>
                A variable with a union type can store a value of any of the
                specified types.
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
{`let id: string | number;

id = "abc123";
id = 123;`}
            </pre>

            <h2>Union with Boolean</h2>

            <p>
                A union can contain multiple different types, including
                <code>boolean</code>.
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
{`let value: string | number | boolean;

value = "Hello";
value = 100;
value = true;`}
            </pre>

            <h2>Union Types in Functions</h2>

            <p>
                Union types can also be used for function parameters when a
                function should accept different types of values.
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
{`function printId(id: string | number) {
    console.log(id);
}

printId("abc123");
printId(123);`}
            </pre>

            <h2>Union with Arrays</h2>

            <p>
                You can create an array that contains values of multiple types.
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
{`let values: (string | number)[] = [
    "Asmit",
    13,
    "TypeScript",
    100
];`}
            </pre>

            <h2>Literal Union Types</h2>

            <p>
                Union types can also be made from specific literal values.
                This is useful when only certain values are allowed.
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
{`let direction: "left" | "right" | "up" | "down";

direction = "left";
direction = "up";`}
            </pre>

            <h2>Union Type Narrowing</h2>

            <p>
                When working with a union type, TypeScript may require you to
                check the type before using type-specific methods or properties.
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
{`function format(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toFixed(2);
}`}
            </pre>

            <h2>Union Types with Objects</h2>

            <p>
                Union types can also be used when a value can be one of
                several different object shapes.
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
{`type Admin = {
    role: "admin";
    permissions: string[];
};

type User = {
    role: "user";
    username: string;
};

let account: Admin | User;`}
            </pre>

            <h2>Union vs Single Type</h2>

            <p>
                A normal type allows only one kind of value, while a union
                allows multiple possible types.
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
{`// Single type
let age: number = 13;

// Union type
let id: string | number;

id = "user123";
id = 123;`}
            </pre>

            <h2>Summary</h2>

            <p>
                Union types allow a value to have multiple possible types.
                They are created using the <code>|</code> operator and are
                useful when a variable or function needs to work with
                different kinds of values.
            </p>

        </div>
    );
}

