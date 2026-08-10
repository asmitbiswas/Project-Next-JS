export default function NodeModules() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Node.js Modules</h1>

            <p>
                Modules allow you to split a Node.js application into
                separate files. Each module can contain reusable code that
                can be imported into other parts of your application.
            </p>

            <h2>Why Use Modules?</h2>

            <p>
                Modules make applications easier to organize, maintain, and
                reuse. Instead of putting everything into one large file,
                related functionality can be separated into different
                modules.
            </p>

            <h2>CommonJS Modules</h2>

            <p>
                CommonJS is the traditional module system used by Node.js.
                It uses <code>require()</code> to import modules and
                <code>module.exports</code> to export them.
            </p>

            <h2>Exporting a Function</h2>

            <p>
                A function can be exported using
                <code>module.exports</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`// math.js

function add(a, b) {
    return a + b;
}

module.exports = add;`}</code>
            </pre>

            <h2>Importing a Module</h2>

            <p>
                Use <code>require()</code> to load a CommonJS module.
            </p>

            <pre style={codeStyle}>
                <code>{`// app.js

const add = require("./math");

console.log(add(10, 20));`}</code>
            </pre>

            <h2>Exporting Multiple Values</h2>

            <p>
                Multiple functions or values can be exported using an
                object.
            </p>

            <pre style={codeStyle}>
                <code>{`// math.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};`}</code>
            </pre>

            <h2>Importing Multiple Values</h2>

            <pre style={codeStyle}>
                <code>{`// app.js

const { add, subtract } = require("./math");

console.log(add(10, 20));
console.log(subtract(20, 10));`}</code>
            </pre>

            <h2>Built-in Modules</h2>

            <p>
                Node.js provides many built-in modules that can be used
                without installing additional packages.
            </p>

            <p>
                Some commonly used modules include
                <code>fs</code>, <code>path</code>, <code>http</code>, and
                <code>os</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`const os = require("os");

console.log(os.platform());
console.log(os.cpus().length);`}</code>
            </pre>

            <h2>The File System Module</h2>

            <p>
                The <code>fs</code> module provides APIs for working with
                files and directories.
            </p>

            <pre style={codeStyle}>
                <code>{`const fs = require("fs");

const data = fs.readFileSync("hello.txt", "utf8");

console.log(data);`}</code>
            </pre>

            <h2>The Path Module</h2>

            <p>
                The <code>path</code> module provides utilities for working
                with file and directory paths.
            </p>

            <pre style={codeStyle}>
                <code>{`const path = require("path");

const filePath = path.join("src", "app.js");

console.log(filePath);`}</code>
            </pre>

            <h2>ES Modules</h2>

            <p>
                Node.js also supports the modern ES Module system, which uses
                <code>import</code> and <code>export</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`// math.js

export function add(a, b) {
    return a + b;
}`}</code>
            </pre>

            <h2>Importing ES Modules</h2>

            <pre style={codeStyle}>
                <code>{`// app.js

import { add } from "./math.js";

console.log(add(10, 20));`}</code>
            </pre>

            <h2>CommonJS vs ES Modules</h2>

            <pre style={codeStyle}>
                <code>{`// CommonJS

const math = require("./math");

module.exports = math;


// ES Modules

import math from "./math.js";

export default math;`}</code>
            </pre>

            <h2>Module Scope</h2>

            <p>
                Each Node.js module has its own scope. Variables declared
                inside a module are not automatically available in other
                modules.
            </p>

            <pre style={codeStyle}>
                <code>{`// secret.js

const secret = "hidden";

// This variable is only available inside this module.`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Node.js modules allow applications to organize and reuse
                code across multiple files. CommonJS uses
                <code>require()</code> and <code>module.exports</code>,
                while ES Modules use <code>import</code> and
                <code>export</code>. Node.js also provides many built-in
                modules such as <code>fs</code>, <code>path</code>,
                <code>http</code>, and <code>os</code>.
            </p>

        </div>
    );
}