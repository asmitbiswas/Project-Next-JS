
export default function AsyncAwait() {
    return (
        <div>

            <h1>Async / Await</h1>

            <p>
                Async and await make working with Promises easier.
                They allow asynchronous code to be written in a cleaner
                and more readable way.
            </p>

            <h2>async</h2>

            <p>
                The <code>async</code> keyword is used before a function.
                An async function always returns a Promise.
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
{`async function greet() {
    return "Hello, DevVault!";
}

greet().then((message) => {
    console.log(message);
});`}
            </pre>

            <h2>await</h2>

            <p>
                The <code>await</code> keyword waits for a Promise to
                finish before continuing the function.
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
    const result = await Promise.resolve("Data received");

    console.log(result);
}

getData();`}
            </pre>

            <h2>Using Async / Await with Fetch</h2>

            <p>
                Async and await are commonly used with the Fetch API
                to get data from a server.
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
{`async function getUsers() {
    const response = await fetch(
        "https://api.example.com/users"
    );

    const users = await response.json();

    console.log(users);
}

getUsers();`}
            </pre>

            <h2>Handling Errors</h2>

            <p>
                Use <code>try...catch</code> to handle errors in
                asynchronous functions.
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
        const response = await fetch(
            "https://api.example.com/data"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

getData();`}
            </pre>

            <h2>Multiple Await Operations</h2>

            <p>
                You can use multiple <code>await</code> statements inside
                the same async function.
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
{`async function start() {
    const first = await Promise.resolve("First");
    const second = await Promise.resolve("Second");

    console.log(first);
    console.log(second);
}

start();`}
            </pre>

            <h2>Async / Await vs then()</h2>

            <p>
                The same Promise can be handled using either
                <code>then()</code> or async / await.
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
{`// Using then()

fetch("/api/data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });`}
            </pre>

            <pre
                style={{
                    background: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`// Using async / await

async function getData() {
    const response = await fetch("/api/data");
    const data = await response.json();

    console.log(data);
}

getData();`}
            </pre>

            <h2>Important Rules</h2>

            <ul>
                <li><code>await</code> is normally used inside an <code>async</code> function.</li>
                <li>An <code>async</code> function always returns a Promise.</li>
                <li><code>try...catch</code> can be used to handle errors.</li>
                <li>Async / await makes Promise-based code easier to read.</li>
            </ul>

            <h2>Summary</h2>

            <p>
                Async and await provide a cleaner way to work with
                asynchronous JavaScript. The <code>async</code> keyword
                creates a Promise-based function, while <code>await</code>
                waits for a Promise to settle before continuing.
            </p>

        </div>
    );
}