export default function Http() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>HTTP</h1>

            <p>
                Node.js provides the built-in <code>http</code> module for
                creating HTTP servers and handling requests and responses.
            </p>

            <h2>Importing the HTTP Module</h2>

            <pre style={codeStyle}>
                <code>{`const http = require("http");`}</code>
            </pre>

            <h2>Creating a Server</h2>

            <p>
                The <code>createServer()</code> method creates an HTTP server.
                It receives a request and sends a response.
            </p>

            <pre style={codeStyle}>
                <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js!");
});

server.listen(3000);`}</code>
            </pre>

            <h2>Request and Response</h2>

            <p>
                The <code>req</code> object contains information about the
                incoming request, while <code>res</code> is used to send a
                response.
            </p>

            <pre style={codeStyle}>
                <code>{`const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    res.end("Request received!");
});

server.listen(3000);`}</code>
            </pre>

            <h2>HTTP Methods</h2>

            <p>
                HTTP methods describe what a client wants to do with a
                resource.
            </p>

            <ul>
                <li><code>GET</code> — retrieve data</li>
                <li><code>POST</code> — send or create data</li>
                <li><code>PUT</code> — replace data</li>
                <li><code>PATCH</code> — partially update data</li>
                <li><code>DELETE</code> — remove data</li>
            </ul>

            <h2>Handling Routes</h2>

            <p>
                You can check the request URL and method to create simple
                routes.
            </p>

            <pre style={codeStyle}>
                <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("Home");
    } else if (req.url === "/about" && req.method === "GET") {
        res.end("About");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(3000);`}</code>
            </pre>

            <h2>Status Codes</h2>

            <p>
                HTTP status codes tell the client what happened with a
                request.
            </p>

            <ul>
                <li><code>200</code> — OK</li>
                <li><code>201</code> — Created</li>
                <li><code>400</code> — Bad Request</li>
                <li><code>404</code> — Not Found</li>
                <li><code>500</code> — Internal Server Error</li>
            </ul>

            <pre style={codeStyle}>
                <code>{`const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Success!");
});`}</code>
            </pre>

            <h2>Response Headers</h2>

            <p>
                Headers provide additional information about the response.
            </p>

            <pre style={codeStyle}>
                <code>{`const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello!");
});

server.listen(3000);`}</code>
            </pre>

            <h2>Sending JSON</h2>

            <p>
                Servers can send JSON data by setting the appropriate
                <code>Content-Type</code> header.
            </p>

            <pre style={codeStyle}>
                <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    const data = {
        name: "Asmit",
        language: "Node.js"
    };

    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(data));
});

server.listen(3000);`}</code>
            </pre>

            <h2>Reading Request Body</h2>

            <p>
                Data sent with a request can be received through the request
                stream.
            </p>

            <pre style={codeStyle}>
                <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", () => {
        console.log(body);
        res.end("Received!");
    });
});

server.listen(3000);`}</code>
            </pre>

            <h2>Listening on a Port</h2>

            <p>
                The <code>listen()</code> method starts the server on a
                specified port.
            </p>

            <pre style={codeStyle}>
                <code>{`server.listen(3000, () => {
    console.log("Server running on port 3000");
});`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Node.js's <code>http</code> module allows you to create web
                servers without installing an external package. You can
                handle requests, send responses, create routes, use status
                codes and headers, and return JSON data.
            </p>

        </div>
    );
}