export default function RestAPI() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>REST APIs</h1>

            <p>
                A REST API allows applications to communicate with each other
                over HTTP. It uses URLs to represent resources and HTTP
                methods to perform operations on those resources.
            </p>

            <h2>What is REST?</h2>

            <p>
                REST stands for Representational State Transfer. A RESTful
                API commonly uses HTTP requests to create, read, update, and
                delete resources.
            </p>

            <h2>HTTP Methods</h2>

            <ul>
                <li><code>GET</code> — read a resource</li>
                <li><code>POST</code> — create a resource</li>
                <li><code>PUT</code> — replace a resource</li>
                <li><code>PATCH</code> — partially update a resource</li>
                <li><code>DELETE</code> — delete a resource</li>
            </ul>

            <h2>REST Resource</h2>

            <p>
                APIs usually organize data into resources. For example,
                a user resource could be represented by:
            </p>

            <pre style={codeStyle}>
                <code>{`/api/users`}</code>
            </pre>

            <p>
                A specific user can be accessed using an ID:
            </p>

            <pre style={codeStyle}>
                <code>{`/api/users/42`}</code>
            </pre>

            <h2>GET Request</h2>

            <p>
                A GET request retrieves data from the server.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Asmit" },
        { id: 2, name: "Alex" }
    ]);
});`}</code>
            </pre>

            <h2>GET One Resource</h2>

            <pre style={codeStyle}>
                <code>{`app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    res.json({
        id,
        name: "Asmit"
    });
});`}</code>
            </pre>

            <h2>POST Request</h2>

            <p>
                POST is commonly used to create a new resource.
            </p>

            <pre style={codeStyle}>
                <code>{`app.use(express.json());

app.post("/api/users", (req, res) => {
    const user = req.body;

    res.status(201).json(user);
});`}</code>
            </pre>

            <h2>PUT Request</h2>

            <p>
                PUT can be used to replace an existing resource.
            </p>

            <pre style={codeStyle}>
                <code>{`app.put("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const updatedUser = {
        id,
        ...req.body
    };

    res.json(updatedUser);
});`}</code>
            </pre>

            <h2>PATCH Request</h2>

            <p>
                PATCH is used when only part of a resource needs to be
                updated.
            </p>

            <pre style={codeStyle}>
                <code>{`app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    res.json({
        id,
        ...req.body
    });
});`}</code>
            </pre>

            <h2>DELETE Request</h2>

            <p>
                DELETE removes a resource.
            </p>

            <pre style={codeStyle}>
                <code>{`app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    console.log("Deleting user:", id);

    res.sendStatus(204);
});`}</code>
            </pre>

            <h2>Status Codes</h2>

            <p>
                REST APIs use HTTP status codes to communicate the result of
                a request.
            </p>

            <ul>
                <li><code>200 OK</code> — successful request</li>
                <li><code>201 Created</code> — resource created</li>
                <li><code>204 No Content</code> — successful request with no response body</li>
                <li><code>400 Bad Request</code> — invalid request</li>
                <li><code>401 Unauthorized</code> — authentication required</li>
                <li><code>404 Not Found</code> — resource not found</li>
                <li><code>500 Internal Server Error</code> — server error</li>
            </ul>

            <h2>JSON Responses</h2>

            <p>
                REST APIs commonly exchange data using JSON.
            </p>

            <pre style={codeStyle}>
                <code>{`res.json({
    id: 1,
    name: "Asmit",
    language: "Go"
});`}</code>
            </pre>

            <h2>Query Parameters</h2>

            <p>
                Query parameters can be used for searching, filtering, or
                pagination.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/api/users", (req, res) => {
    const search = req.query.search;

    console.log(search);

    res.json([]);
});`}</code>
            </pre>

            <p>
                Example:
            </p>

            <pre style={codeStyle}>
                <code>{`/api/users?search=asmit`}</code>
            </pre>

            <h2>REST API Structure</h2>

            <pre style={codeStyle}>
                <code>{`GET     /api/users
GET     /api/users/:id
POST    /api/users
PUT     /api/users/:id
PATCH   /api/users/:id
DELETE  /api/users/:id`}</code>
            </pre>

            <h2>Simple REST API</h2>

            <pre style={codeStyle}>
                <code>{`const express = require("express");

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Asmit" },
    { id: 2, name: "Alex" }
];

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.post("/api/users", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(user);

    res.status(201).json(user);
});

app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    users = users.filter(user => user.id !== id);

    res.sendStatus(204);
});

app.listen(3000, () => {
    console.log("API running on port 3000");
});`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                REST APIs use HTTP methods, URLs, status codes, and commonly
                JSON to allow clients and servers to communicate. With
                Express.js, you can quickly create REST endpoints for
                creating, reading, updating, and deleting resources.
            </p>

        </div>
    );
}