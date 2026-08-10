export default function NodeBasics() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Node.js Basics</h1>

            <p>
                Node.js allows you to run JavaScript outside of a web browser.
                It is commonly used for backend development, APIs, servers,
                and command-line applications.
            </p>

            <h2>Running Node.js</h2>

            <p>
                The <code>node</code> command is used to run JavaScript files
                with Node.js.
            </p>

            <pre style={codeStyle}>
                <code>{`node app.js`}</code>
            </pre>

            <h2>Hello World</h2>

            <p>
                A simple Node.js program can use <code>console.log()</code>
                just like JavaScript in the browser.
            </p>

            <pre style={codeStyle}>
                <code>{`console.log("Hello from Node.js!");`}</code>
            </pre>

            <h2>Node.js REPL</h2>

            <p>
                Running <code>node</code> without a file starts the Node.js
                REPL, where you can execute JavaScript interactively.
            </p>

            <pre style={codeStyle}>
                <code>{`node

> 10 + 20
30

> console.log("Hello")
Hello`}</code>
            </pre>

            <h2>Global Objects</h2>

            <p>
                Node.js provides several global objects and functions that
                are available without importing them.
            </p>

            <pre style={codeStyle}>
                <code>{`console.log("Hello");

console.log(__dirname);
console.log(__filename);`}</code>
            </pre>

            <h2>Process Object</h2>

            <p>
                The <code>process</code> object provides information about
                the current Node.js process and its environment.
            </p>

            <pre style={codeStyle}>
                <code>{`console.log(process.version);
console.log(process.platform);`}</code>
            </pre>

            <h2>Command Line Arguments</h2>

            <p>
                Node.js provides command-line arguments through
                <code>process.argv</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`console.log(process.argv);`}</code>
            </pre>

            <p>
                For example, running:
            </p>

            <pre style={codeStyle}>
                <code>{`node app.js Asmit`}</code>
            </pre>

            <p>
                allows the program to access <code>"Asmit"</code> through
                the command-line arguments.
            </p>

            <h2>Creating a Package</h2>

            <p>
                Node.js projects commonly use <code>package.json</code> to
                store project information, scripts, and dependencies.
            </p>

            <pre style={codeStyle}>
                <code>{`npm init -y`}</code>
            </pre>

            <h2>Node.js Modules</h2>

            <p>
                Modules allow you to split your application into multiple
                files and reuse code between them.
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
                A module can be loaded using <code>require()</code> in the
                CommonJS module system.
            </p>

            <pre style={codeStyle}>
                <code>{`const add = require("./math");

console.log(add(10, 20));`}</code>
            </pre>

            <h2>Environment Variables</h2>

            <p>
                Environment variables can be accessed through
                <code>process.env</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`console.log(process.env.NODE_ENV);`}</code>
            </pre>

            <h2>Simple HTTP Server</h2>

            <p>
                Node.js includes the built-in <code>http</code> module,
                which can be used to create a web server.
            </p>

            <pre style={codeStyle}>
                <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Node.js lets you execute JavaScript outside the browser.
                The basics include running Node.js programs, using the REPL,
                working with the process object, handling command-line
                arguments, creating packages, using modules, accessing
                environment variables, and creating basic HTTP servers.
            </p>

        </div>
    );
}