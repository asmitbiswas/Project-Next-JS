export default function Express() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Express.js</h1>

            <p>
                Express.js is a lightweight web framework for Node.js.
                It makes it easier to create web servers, routes, APIs,
                and backend applications.
            </p>

            <h2>Installing Express</h2>

            <p>
                Install Express using npm:
            </p>

            <pre style={codeStyle}>
                <code>{`npm install express`}</code>
            </pre>

            <h2>Your First Express Server</h2>

            <pre style={codeStyle}>
                <code>{`const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});`}</code>
            </pre>

            <h2>Routes</h2>

            <p>
                Routes define how your server responds to requests for
                different URLs.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
    res.send("About page");
});`}</code>
            </pre>

            <h2>Request and Response</h2>

            <p>
                Express provides <code>req</code> and <code>res</code>
                objects for handling requests and responses.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/user", (req, res) => {
    console.log(req.method);
    console.log(req.url);

    res.send("User page");
});`}</code>
            </pre>

            <h2>Route Parameters</h2>

            <p>
                Parameters allow you to create dynamic routes.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/users/:id", (req, res) => {
    res.send(\`User ID: \${req.params.id}\`);
});`}</code>
            </pre>

            <p>
                A request to <code>/users/42</code> would produce:
            </p>

            <pre style={codeStyle}>
                <code>{`User ID: 42`}</code>
            </pre>

            <h2>Query Parameters</h2>

            <p>
                Query parameters can be accessed through
                <code>req.query</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/search", (req, res) => {
    console.log(req.query.q);

    res.send("Search results");
});`}</code>
            </pre>

            <p>
                Example:
            </p>

            <pre style={codeStyle}>
                <code>{`/search?q=nodejs`}</code>
            </pre>

            <h2>Sending JSON</h2>

            <p>
                Express makes it easy to send JSON responses using
                <code>res.json()</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/api/user", (req, res) => {
    res.json({
        name: "Asmit",
        language: "Node.js"
    });
});`}</code>
            </pre>

            <h2>Middleware</h2>

            <p>
                Middleware functions run during the request-response cycle.
                They can inspect requests, modify them, or perform other
                tasks before the final response.
            </p>

            <pre style={codeStyle}>
                <code>{`app.use((req, res, next) => {
    console.log(req.method, req.url);

    next();
});`}</code>
            </pre>

            <h2>JSON Middleware</h2>

            <p>
                Use <code>express.json()</code> when your application needs
                to read JSON request bodies.
            </p>

            <pre style={codeStyle}>
                <code>{`app.use(express.json());

app.post("/users", (req, res) => {
    console.log(req.body);

    res.json({
        message: "User created"
    });
});`}</code>
            </pre>

            <h2>POST Requests</h2>

            <p>
                POST routes are commonly used to send data to a server.
            </p>

            <pre style={codeStyle}>
                <code>{`app.post("/users", (req, res) => {
    const user = req.body;

    console.log(user);

    res.status(201).json(user);
});`}</code>
            </pre>

            <h2>DELETE Requests</h2>

            <pre style={codeStyle}>
                <code>{`app.delete("/users/:id", (req, res) => {
    console.log("Deleting:", req.params.id);

    res.sendStatus(204);
});`}</code>
            </pre>

            <h2>Error Handling</h2>

            <p>
                Express supports special error-handling middleware with four
                parameters.
            </p>

            <pre style={codeStyle}>
                <code>{`app.use((error, req, res, next) => {
    console.error(error);

    res.status(500).json({
        message: "Something went wrong"
    });
});`}</code>
            </pre>

            <h2>Simple API</h2>

            <pre style={codeStyle}>
                <code>{`const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Asmit" },
        { id: 2, name: "Alex" }
    ]);
});

app.listen(3000, () => {
    console.log("API running on port 3000");
});`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Express.js simplifies Node.js web development by providing
                routing, middleware, request handling, JSON responses, and
                other tools for building web servers and APIs.
            </p>

        </div>
    );
}