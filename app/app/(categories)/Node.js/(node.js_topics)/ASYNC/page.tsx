export default function Async() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Async & Await</h1>

            <p>
                Node.js uses asynchronous programming to handle tasks without
                blocking the rest of the application. This is especially
                useful for file operations, network requests, and databases.
            </p>

            <h2>Synchronous vs Asynchronous</h2>

            <p>
                Synchronous code waits for an operation to finish before
                continuing. Asynchronous code can continue working while the
                operation is in progress.
            </p>

            <h2>Callbacks</h2>

            <p>
                A callback is a function that runs after an asynchronous
                operation finishes.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.readFile("hello.txt", "utf8", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
});

console.log("This runs first!");`}</code>
            </pre>

            <h2>Promises</h2>

            <p>
                Promises represent the eventual result of an asynchronous
                operation. They can be in a pending, fulfilled, or rejected
                state.
            </p>

            <pre style={codeStyle}>
                <code>{`const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise.then(result => {
    console.log(result);
});`}</code>
            </pre>

            <h2>async Functions</h2>

            <p>
                An <code>async</code> function always returns a Promise.
            </p>

            <pre style={codeStyle}>
                <code>{`async function greet() {
    return "Hello!";
}

greet().then(message => {
    console.log(message);
});`}</code>
            </pre>

            <h2>await</h2>

            <p>
                The <code>await</code> keyword waits for a Promise to settle
                inside an <code>async</code> function.
            </p>

            <pre style={codeStyle}>
                <code>{`function getData() {
    return Promise.resolve("Data received!");
}

async function main() {
    const data = await getData();

    console.log(data);
}

main();`}</code>
            </pre>

            <h2>Reading Files with async/await</h2>

            <p>
                Node.js provides a promise-based version of the
                <code>fs</code> module that works nicely with
                <code>async</code> and <code>await</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs/promises");

async function readFile() {
    const data = await fs.readFile(
        "hello.txt",
        "utf8"
    );

    console.log(data);
}

readFile();`}</code>
            </pre>

            <h2>Handling Errors</h2>

            <p>
                Use <code>try...catch</code> to handle errors from awaited
                Promises.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs/promises");

async function readFile() {
    try {
        const data = await fs.readFile(
            "hello.txt",
            "utf8"
        );

        console.log(data);
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}

readFile();`}</code>
            </pre>

            <h2>Promise.all()</h2>

            <p>
                <code>Promise.all()</code> allows multiple independent
                asynchronous operations to run together.
            </p>

            <pre style={codeStyle}>
                <code>{`async function loadData() {
    const [first, second] = await Promise.all([
        getFirstData(),
        getSecondData()
    ]);

    console.log(first);
    console.log(second);
}`}</code>
            </pre>

            <h2>Sequential vs Parallel</h2>

            <p>
                If operations do not depend on each other, running them
                together can be more efficient.
            </p>

            <pre style={codeStyle}>
                <code>{`// Sequential

const first = await getFirstData();
const second = await getSecondData();


// Parallel

const [first, second] = await Promise.all([
    getFirstData(),
    getSecondData()
]);`}</code>
            </pre>

            <h2>Why Async Matters in Node.js</h2>

            <p>
                Node.js is designed around asynchronous, non-blocking
                operations. This allows applications to handle many I/O
                operations efficiently without waiting for each one to
                finish before continuing.
            </p>

            <h2>Summary</h2>

            <p>
                Asynchronous programming is fundamental to Node.js.
                Callbacks, Promises, <code>async</code>, and
                <code>await</code> provide different ways to work with
                asynchronous operations. For modern Node.js applications,
                Promises with <code>async</code> and <code>await</code> are
                commonly used because they make asynchronous code easier to
                read and maintain.
            </p>

        </div>
    );
}