export default function ErrorHandling() {
    return (
        <div>

            <h1>Error Handling</h1>

            <p>
                Error handling allows JavaScript programs to detect and
                respond to errors without completely stopping the application.
            </p>

            <h2>What Is an Error?</h2>

            <p>
                An error is a problem that occurs while JavaScript is
                executing code. Errors can happen because of invalid syntax,
                incorrect values, missing variables, or other unexpected
                situations.
            </p>

            <h2>try...catch</h2>

            <p>
                The <code>try...catch</code> statement is one of the most
                common ways to handle errors in JavaScript.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    console.log("Running code...");
} catch (error) {
    console.log("An error occurred:", error);
}`}
            </pre>

            <h2>The try Block</h2>

            <p>
                Code that might produce an error is placed inside the
                <code>try</code> block.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    let result = unknownVariable;
}`}
            </pre>

            <h2>The catch Block</h2>

            <p>
                If an error occurs inside the <code>try</code> block,
                JavaScript transfers control to the <code>catch</code> block.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    let result = unknownVariable;
} catch (error) {
    console.log(error);
}`}
            </pre>

            <h2>The Error Object</h2>

            <p>
                The <code>catch</code> block receives an error object that
                contains information about the error.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error);
}`}
            </pre>

            <h2>error.message</h2>

            <p>
                The <code>message</code> property contains the error message.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    throw new Error("Invalid username");
} catch (error) {
    console.log(error.message);
}`}
            </pre>

            <h2>finally</h2>

            <p>
                The <code>finally</code> block runs after the
                <code>try</code> and <code>catch</code> blocks, regardless
                of whether an error occurred.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    console.log("Trying...");
} catch (error) {
    console.log("Error:", error);
} finally {
    console.log("Finished.");
}`}
            </pre>

            <h2>throw</h2>

            <p>
                The <code>throw</code> statement allows you to create your
                own errors.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18 or older.");
    }

    return "Access granted";
}

try {
    console.log(checkAge(15));
} catch (error) {
    console.log(error.message);
}`}
            </pre>

            <h2>Throwing Different Values</h2>

            <p>
                JavaScript allows different types of values to be thrown,
                although throwing an <code>Error</code> object is generally
                preferred.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`throw new Error("Something went wrong!");`}
            </pre>

            <h2>ReferenceError</h2>

            <p>
                A <code>ReferenceError</code> occurs when JavaScript tries
                to access a variable that does not exist.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    console.log(username);
} catch (error) {
    console.log(error.name);
}`}
            </pre>

            <h2>TypeError</h2>

            <p>
                A <code>TypeError</code> occurs when a value is used in an
                invalid way.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    const number = 10;
    number.toUpperCase();
} catch (error) {
    console.log(error.name);
}`}
            </pre>

            <h2>SyntaxError</h2>

            <p>
                A <code>SyntaxError</code> occurs when JavaScript encounters
                invalid syntax.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`const name = ;`}
            </pre>

            <h2>RangeError</h2>

            <p>
                A <code>RangeError</code> occurs when a value is outside the
                allowed range.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    const number = 10;
    number.toFixed(200);
} catch (error) {
    console.log(error.name);
}`}
            </pre>

            <h2>Handling Errors in Functions</h2>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
}`}
            </pre>

            <h2>Error Handling with Promises</h2>

            <p>
                Promise errors can be handled using <code>catch()</code>.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`Promise.reject("Something went wrong!")
    .catch((error) => {
        console.log(error);
    });`}
            </pre>

            <h2>Error Handling with Async / Await</h2>

            <p>
                Errors from asynchronous operations can be handled using
                <code>try...catch</code>.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`async function getData() {
    try {
        const response = await fetch("/api/data");

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Request failed:", error);
    }
}

getData();`}
            </pre>

            <h2>Nested try...catch</h2>

            <p>
                A <code>try...catch</code> statement can be placed inside
                another <code>try</code> block when different levels of
                error handling are required.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`try {
    try {
        throw new Error("Inner error");
    } catch (error) {
        console.log("Inner:", error.message);
    }
} catch (error) {
    console.log("Outer:", error.message);
}`}
            </pre>

            <h2>Custom Error Classes</h2>

            <p>
                You can create custom error classes by extending the
                built-in <code>Error</code> class.
            </p>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid input");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}`}
            </pre>

            <h2>Common Error Types</h2>

            <table>
                <tbody>
                    <tr>
                        <th>Error</th>
                        <th>Description</th>
                    </tr>

                    <tr>
                        <td>Error</td>
                        <td>Generic error.</td>
                    </tr>

                    <tr>
                        <td>ReferenceError</td>
                        <td>Invalid variable reference.</td>
                    </tr>

                    <tr>
                        <td>TypeError</td>
                        <td>Invalid operation on a value.</td>
                    </tr>

                    <tr>
                        <td>SyntaxError</td>
                        <td>Invalid JavaScript syntax.</td>
                    </tr>

                    <tr>
                        <td>RangeError</td>
                        <td>A value is outside an allowed range.</td>
                    </tr>
                </tbody>
            </table>

            <h2>Best Practices</h2>

            <ul>
                <li>Use <code>try...catch</code> when an operation can fail.</li>
                <li>Use meaningful error messages.</li>
                <li>Use <code>Error</code> objects instead of throwing random values.</li>
                <li>Handle asynchronous errors properly.</li>
                <li>Do not silently ignore important errors.</li>
                <li>Use custom errors when they make your application clearer.</li>
            </ul>

            <h2>Summary</h2>

            <p>
                Error handling allows JavaScript applications to respond
                safely when something goes wrong. The main tools are
                <code>try</code>, <code>catch</code>, <code>finally</code>,
                and <code>throw</code>.
            </p>

        </div>
    );
}