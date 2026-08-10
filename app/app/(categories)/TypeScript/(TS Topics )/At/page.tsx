export default function AdvancedTypes() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Advanced Types</h1>

            <p>
                Advanced types allow TypeScript to describe more complex
                relationships between values. They are useful when basic
                types are not enough to model your application's data.
            </p>

            <h2>Intersection Types</h2>

            <p>
                Intersection types combine multiple types into one type using
                the <code>&amp;</code> operator.
            </p>

            <pre style={codeStyle}>
                <code>{`type Person = {
    name: string;
};

type Developer = {
    language: string;
};

type DeveloperPerson = Person & Developer;

const user: DeveloperPerson = {
    name: "Asmit",
    language: "TypeScript"
};`}</code>
            </pre>

            <h2>Discriminated Unions</h2>

            <p>
                A discriminated union uses a common property to determine
                which type a value represents.
            </p>

            <pre style={codeStyle}>
                <code>{`type Success = {
    status: "success";
    data: string;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

type Response = Success | ErrorResponse;

function handleResponse(response: Response) {
    if (response.status === "success") {
        console.log(response.data);
    } else {
        console.log(response.message);
    }
}`}</code>
            </pre>

            <h2>Type Guards</h2>

            <p>
                Type guards allow TypeScript to narrow a value to a more
                specific type.
            </p>

            <pre style={codeStyle}>
                <code>{`function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

printValue("Hello");
printValue(100);`}</code>
            </pre>

            <h2>Custom Type Guards</h2>

            <p>
                You can create your own type guard using a type predicate.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
};

function isUser(value: unknown): value is User {
    return (
        typeof value === "object" &&
        value !== null &&
        "name" in value
    );
}

const value: unknown = {
    name: "Asmit"
};

if (isUser(value)) {
    console.log(value.name);
}`}</code>
            </pre>

            <h2>Keyof</h2>

            <p>
                The <code>keyof</code> operator creates a union of the keys
                of an object type.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age: number;
};

type UserKey = keyof User;

let key: UserKey;

key = "name";
key = "age";`}</code>
            </pre>

            <h2>Indexed Access Types</h2>

            <p>
                Indexed access types allow you to access the type of a
                specific property from another type.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age: number;
};

type UserName = User["name"];
type UserAge = User["age"];

let name: UserName = "Asmit";
let age: UserAge = 13;`}</code>
            </pre>

            <h2>Conditional Types</h2>

            <p>
                Conditional types choose one type or another depending on
                whether a type satisfies a condition.
            </p>

            <pre style={codeStyle}>
                <code>{`type IsString<T> = T extends string
    ? true
    : false;

type A = IsString<string>;
type B = IsString<number>;`}</code>
            </pre>

            <h2>Mapped Types</h2>

            <p>
                Mapped types allow you to create a new type by transforming
                the properties of an existing type.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age: number;
};

type OptionalUser = {
    [K in keyof User]?: User[K];
};

const user: OptionalUser = {
    name: "Asmit"
};`}</code>
            </pre>

            <h2>Template Literal Types</h2>

            <p>
                Template literal types allow you to create types based on
                string patterns.
            </p>

            <pre style={codeStyle}>
                <code>{`type EventName = "click" | "focus";

type HandlerName = \`on\${Capitalize<EventName>}\`;

let handler: HandlerName;

handler = "onClick";
handler = "onFocus";`}</code>
            </pre>

            <h2>Type Assertions</h2>

            <p>
                Type assertions tell TypeScript to treat a value as a
                specific type. They do not perform runtime type checking.
            </p>

            <pre style={codeStyle}>
                <code>{`const value: unknown = "Hello";

const message = value as string;

console.log(message.toUpperCase());`}</code>
            </pre>

            <h2>The unknown Type</h2>

            <p>
                The <code>unknown</code> type can represent any value, but
                TypeScript requires you to check the value before using it.
            </p>

            <pre style={codeStyle}>
                <code>{`function print(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}

print("Hello");`}</code>
            </pre>

            <h2>Never Type</h2>

            <p>
                The <code>never</code> type represents values that never
                occur. It is commonly used for functions that never finish
                normally or exhaustive checks.
            </p>

            <pre style={codeStyle}>
                <code>{`function throwError(message: string): never {
    throw new Error(message);
}`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Advanced types allow TypeScript to model complex data and
                relationships. Important concepts include intersection types,
                discriminated unions, type guards, <code>keyof</code>,
                indexed access types, conditional types, mapped types,
                template literal types, type assertions, <code>unknown</code>,
                and <code>never</code>.
            </p>

        </div>
    );
}