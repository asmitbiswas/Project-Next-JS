export default function Interfaces() {
    return (
        <div>

            <h1>Interfaces</h1>

            <p>
                Interfaces allow you to define the structure that an object
                should follow. They describe the properties and types that
                an object must have.
            </p>

            <h2>Basic Interface</h2>

            <p>
                You create an interface using the <code>interface</code> keyword.
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

let user: User = {
    name: "Asmit",
    age: 13
};`}
            </pre>

            <h2>Optional Properties</h2>

            <p>
                You can make a property optional by adding <code>?</code> after
                its name.
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
    email?: string;
}

let user: User = {
    name: "Asmit",
    age: 13
};`}
            </pre>

            <h2>Readonly Properties</h2>

            <p>
                The <code>readonly</code> keyword prevents a property from
                being changed after the object is created.
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

let user: User = {
    id: 1,
    name: "Asmit"
};

user.name = "Alex";

// user.id = 2; // Error`}
            </pre>

            <h2>Interfaces with Functions</h2>

            <p>
                Interfaces can describe the parameters and return type of a
                function.
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
{`interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => {
    return a + b;
};

console.log(add(10, 5));`}
            </pre>

            <h2>Extending Interfaces</h2>

            <p>
                An interface can extend another interface and inherit its
                properties.
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

interface Admin extends User {
    permissions: string[];
}

let admin: Admin = {
    name: "Asmit",
    age: 13,
    permissions: ["read", "write"]
};`}
            </pre>

            <h2>Multiple Interfaces</h2>

            <p>
                An interface can extend multiple interfaces at the same time.
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
{`interface Person {
    name: string;
}

interface Developer {
    language: string;
}

interface User extends Person, Developer {
    age: number;
}

let user: User = {
    name: "Asmit",
    language: "TypeScript",
    age: 13
};`}
            </pre>

            <h2>Interface vs Type Alias</h2>

            <p>
                Interfaces and type aliases can both describe object shapes.
                Interfaces are commonly used when defining the structure of
                objects and when you want to extend that structure.
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

type Product = {
    name: string;
    price: number;
};`}
            </pre>

            <h2>Interfaces with Arrays</h2>

            <p>
                You can use an interface to define the structure of objects
                stored inside an array.
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

let users: User[] = [
    {
        name: "Asmit",
        age: 13
    },
    {
        name: "Alex",
        age: 14
    }
];`}
            </pre>

            <h2>Summary</h2>

            <p>
                Interfaces define the structure of objects in TypeScript.
                They can contain required and optional properties, readonly
                properties, function definitions, and can extend other
                interfaces.
            </p>

        </div>
    );
}