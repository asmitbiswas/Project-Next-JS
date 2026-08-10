export default function FileSystem() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>File System</h1>

            <p>
                Node.js provides the built-in <code>fs</code> module for
                working with files and directories. You can read, write,
                update, delete, and manage files using it.
            </p>

            <h2>Importing the fs Module</h2>

            <p>
                The <code>fs</code> module is built into Node.js, so you don't
                need to install it separately.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");`}</code>
            </pre>

            <h2>Reading a File</h2>

            <p>
                <code>readFileSync()</code> reads a file synchronously.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

const data = fs.readFileSync("hello.txt", "utf8");

console.log(data);`}</code>
            </pre>

            <h2>Reading Files Asynchronously</h2>

            <p>
                <code>readFile()</code> allows you to read a file
                asynchronously.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.readFile("hello.txt", "utf8", (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
});`}</code>
            </pre>

            <h2>Writing to a File</h2>

            <p>
                <code>writeFile()</code> creates a file or replaces its
                existing contents.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.writeFile(
    "hello.txt",
    "Hello from Node.js!",
    (error) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log("File written!");
    }
);`}</code>
            </pre>

            <h2>Appending to a File</h2>

            <p>
                <code>appendFile()</code> adds content to the end of an
                existing file.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.appendFile(
    "hello.txt",
    "\\nAnother line!",
    (error) => {
        if (error) {
            console.error(error);
        }
    }
);`}</code>
            </pre>

            <h2>Deleting a File</h2>

            <p>
                Use <code>unlink()</code> to delete a file.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.unlink("hello.txt", (error) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log("File deleted!");
});`}</code>
            </pre>

            <h2>Checking if a File Exists</h2>

            <p>
                You can use <code>existsSync()</code> to synchronously check
                whether a path exists.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

if (fs.existsSync("hello.txt")) {
    console.log("File exists!");
} else {
    console.log("File does not exist.");
}`}</code>
            </pre>

            <h2>Creating a Directory</h2>

            <p>
                <code>mkdir()</code> creates a new directory.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.mkdir("my-folder", (error) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log("Directory created!");
});`}</code>
            </pre>

            <h2>Reading a Directory</h2>

            <p>
                <code>readdir()</code> returns the files and folders inside a
                directory.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.readdir(".", (error, files) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(files);
});`}</code>
            </pre>

            <h2>Removing a Directory</h2>

            <p>
                <code>rmdir()</code> can remove an empty directory.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

fs.rmdir("my-folder", (error) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log("Directory removed!");
});`}</code>
            </pre>

            <h2>Promises API</h2>

            <p>
                Node.js also provides a promise-based version of the
                <code>fs</code> API, which works nicely with
                <code>async</code> and <code>await</code>.
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
        console.error(error);
    }
}

readFile();`}</code>
            </pre>

            <h2>File System Structure</h2>

            <pre style={codeStyle}>
                <code>{`project/
├── index.js
├── hello.txt
└── my-folder/
    └── data.txt`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                The Node.js <code>fs</code> module provides tools for
                interacting with files and directories. Common operations
                include reading, writing, appending, deleting, and creating
                directories. The promise-based API can also be used with
                <code>async</code> and <code>await</code>.
            </p>

        </div>
    );
}