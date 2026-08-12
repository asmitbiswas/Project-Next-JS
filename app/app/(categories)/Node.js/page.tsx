export default function NodeHome() {
    return (
        <div>
            <h1
                style={{
                    fontSize: "42px",
                    marginBottom: "12px",
                }}
            >
                Node.js
            </h1>

            <p
                style={{
                    color: "#aaa",
                    fontSize: "18px",
                    lineHeight: "1.7",
                }}
            >
                Node.js is a JavaScript runtime built on Chrome's
                V8 JavaScript engine.
            </p>

            <section style={{ marginTop: "48px" }}>
                <h2>What is Node.js?</h2>

                <p
                    style={{
                        color: "#aaa",
                        lineHeight: "1.8",
                        maxWidth: "800px",
                    }}
                >
                    Node.js allows you to run JavaScript outside the
                    browser. It is widely used for building backend
                    applications, APIs, servers, and real-time
                    applications.
                </p>
            </section>

            <section style={{ marginTop: "48px" }}>
                <h2>Why Learn Node.js?</h2>

                <ul
                    style={{
                        color: "#aaa",
                        lineHeight: "2",
                        paddingLeft: "22px",
                    }}
                >
                    <li>Build backend applications</li>
                    <li>Create REST APIs</li>
                    <li>Work with databases</li>
                    <li>Build real-time applications</li>
                    <li>Use JavaScript on the server</li>
                </ul>
            </section>

            <section style={{ marginTop: "48px" }}>
                <h2>Simple Example</h2>

                <pre
                    style={{
                        background: "#111",
                        border: "1px solid #252525",
                        borderRadius: "10px",
                        padding: "20px",
                        overflowX: "auto",
                        lineHeight: "1.7",
                        borderLeft:"6px solid rgb( 13 200 13)"
                    }}
                >
                    <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js!");
});

server.listen(3000);`}</code>
                </pre>
            </section>
        </div>
    );
}