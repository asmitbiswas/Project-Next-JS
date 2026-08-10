import Link from "next/link";

export default function NodeJS() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Node.js</h1>

            <p>
                Node.js is a JavaScript runtime that allows JavaScript to run
                outside of the browser. It is commonly used to build
                servers, APIs, command-line tools, and backend applications.
            </p>

            <h2>What is Node.js?</h2>

            <p>
                Node.js is built on Chrome's V8 JavaScript engine. It allows
                developers to use JavaScript for both frontend and backend
                development.
            </p>

            <pre style={codeStyle}>
                <code>{`console.log("Hello from Node.js!");`}</code>
            </pre>

            <h2>Why Use Node.js?</h2>

            <p>
                Node.js is popular because it is fast, lightweight, and has
                a large ecosystem of packages through npm.
            </p>

            <ul>
                <li>Run JavaScript outside the browser</li>
                <li>Build backend applications</li>
                <li>Create APIs and web servers</li>
                <li>Use thousands of npm packages</li>
                <li>Build command-line applications</li>
            </ul>

            <h2>Node.js vs JavaScript</h2>

            <p>
                JavaScript is a programming language, while Node.js is a
                runtime environment that allows JavaScript to run outside
                the browser.
            </p>

            <pre style={codeStyle}>
                <code>{`// Browser JavaScript
console.log("Running in the browser");

// Node.js
console.log("Running with Node.js");`}</code>
            </pre>

            <h2>Node.js and npm</h2>

            <p>
                npm is the default package manager that comes with Node.js.
                It allows you to install and manage packages created by
                other developers.
            </p>

            <pre style={codeStyle}>
                <code>{`npm init
npm install express`}</code>
            </pre>

            <h2>Creating a Node.js Project</h2>

            <p>
                A Node.js project can be initialized using
                <code>npm init</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`mkdir my-app
cd my-app

npm init -y`}</code>
            </pre>

            <h2>Running a Node.js File</h2>

            <p>
                JavaScript files can be executed using the
                <code>node</code> command.
            </p>

            <pre style={codeStyle}>
                <code>{`node index.js`}</code>
            </pre>

            <h2>Node.js Modules</h2>

            <p>
                Node.js applications can be split into modules so that code
                can be organized and reused across different files.
            </p>

            <pre style={codeStyle}>
                <code>{`// math.js

export function add(a, b) {
    return a + b;
}`}</code>
            </pre>

            <h2>Node.js Web Servers</h2>

            <p>
                Node.js provides APIs that can be used to create HTTP
                servers.
            </p>

            <pre style={codeStyle}>
                <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js!");
});

server.listen(3000);`}</code>
            </pre>

            <h2>What You Can Build</h2>

            <ul>
                <li>REST APIs</li>
                <li>Web servers</li>
                <li>Real-time applications</li>
                <li>Command-line tools</li>
                <li>Backend services</li>
                <li>Full-stack applications</li>
            </ul>

            <h2>Node.js Roadmap</h2>

            <ol>
                <li><Link href="/Node.js/basics" style={{color:"white"}}>Node.js basics</Link></li>
                <li><Link href="/Node.js/Modules" style={{color:"white"}}>Modules</Link></li>
                <li>npm</li>
                <li>File system</li>
                <li>HTTP</li>
                <li>Asynchronous programming</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>Databases</li>
                <li>Authentication</li>
            </ol>

            <h2>Summary</h2>

            <p>
                Node.js allows JavaScript to run outside the browser and is
                widely used for backend development. It provides tools for
                creating servers, APIs, command-line applications, and other
                backend systems.
            </p>

        </div>
    );
}