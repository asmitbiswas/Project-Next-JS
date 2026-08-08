export default function TypeNarrowing() {
    return (
        <div>

            <h1>Type Narrowing</h1>

            <p>
                Type narrowing allows TypeScript to determine a more specific
                type for a value that has a union or broader type.
            </p>

            <h2>Why Type Narrowing?</h2>

            <p>
                When a value can have multiple types, TypeScript cannot always
                use type-specific methods until the type has been narrowed.
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
{`function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}`}
            </pre>

            <h2>typeof Narrowing</h2>

            <p>
                The <code>typeof</code> operator can be used to check primitive
                types such as <code>string</code>, <code>number</code>, and
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
{`function format(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toFixed(2);
}`}
            </pre>

            <h2>Equality Narrowing</h2>

            <p>
                TypeScript can narrow a type when you compare a value with
                another value.
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
{`function checkValue(value: string | number) {
    if (value === "hello") {
        console.log("The value is hello");
    } else {
        console.log(value);
    }
}`}
            </pre>

            <h2>in Operator</h2>

            <p>
                The <code>in</code> operator can narrow object types by checking
                whether a property exists.
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
    username: string;
    permissions: string[];
};

type User = {
    username: string;
};

function showUser(user: Admin | User) {
    if ("permissions" in user) {
        console.log(user.permissions);
    } else {
        console.log(user.username);
    }
}`}
            </pre>

            <h2>instanceof Narrowing</h2>

            <p>
                The <code>instanceof</code> operator can narrow a value by
                checking whether it is an instance of a class.
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
{`function printDate(value: Date | string) {
    if (value instanceof Date) {
        console.log(value.getFullYear());
    } else {
        console.log(value.toUpperCase());
    }
}`}
            </pre>

            <h2>Truthiness Narrowing</h2>

            <p>
                TypeScript can narrow values based on whether they are
                truthy or falsy.
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
{`function greet(name: string | undefined) {
    if (name) {
        console.log("Hello " + name);
    }
}`}
            </pre>

            <h2>Discriminated Unions</h2>

            <p>
                A discriminated union uses a common property to help
                TypeScript determine which type a value is.
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
{`type Success = {
    status: "success";
    data: string;
};

type ErrorResponse = {
    status: "error";
    message: string;
};

function handleResponse(
    response: Success | ErrorResponse
) {
    if (response.status === "success") {
        console.log(response.data);
    } else {
        console.log(response.message);
    }
}`}
            </pre>

            <h2>Type Guards</h2>

            <p>
                A type guard is a condition or function that helps TypeScript
                determine the type of a value.
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
{`function isString(value: unknown): value is string {
    return typeof value === "string";
}

function print(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
}`}
            </pre>

            <h2>Summary</h2>

            <p>
                Type narrowing helps TypeScript work with more specific types
                inside conditions. Common narrowing techniques include
                <code>typeof</code>, equality checks, <code>in</code>,
                <code>instanceof</code>, truthiness checks, and custom type
                guards.
            </p>

        </div>
    );
}