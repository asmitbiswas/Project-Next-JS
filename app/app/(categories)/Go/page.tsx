export default function GoHome() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Go</h1>

            <p>
                Simple. Fast. Reliable.
            </p>

            <p>
                Go is a statically typed, compiled programming language
                designed for simplicity, performance, and concurrency.
            </p>

            <h2>Getting Started</h2>

            <p>
                Start with a simple Go program:
            </p>

            <pre style={codeStyle}>
                <code>{`package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`}</code>
            </pre>

            <h2>Why Learn Go?</h2>

            <div>
                <h3>⚡ Fast</h3>
                <p>
                    Go is compiled directly to machine code and provides
                    excellent performance.
                </p>

                <h3>🧩 Simple</h3>
                <p>
                    Go has a relatively small language specification and a
                    straightforward syntax.
                </p>

                <h3>🚀 Scalable</h3>
                <p>
                    Go is well suited for building large backend systems and
                    services.
                </p>

                <h3>🔀 Concurrent</h3>
                <p>
                    Goroutines and channels make concurrent programming a
                    core part of Go.
                </p>

                <h3>📦 Powerful Standard Library</h3>
                <p>
                    Go includes a large standard library for networking,
                    HTTP, files, JSON, testing, and more.
                </p>
            </div>

            <h2>Go Roadmap</h2>

            <ol>
                <li>Basics</li>
                <li>Variables & Types</li>
                <li>Functions</li>
                <li>Arrays & Slices</li>
                <li>Structs</li>
                <li>Interfaces</li>
                <li>Error Handling</li>
                <li>Goroutines & Channels</li>
                <li>HTTP & APIs</li>
                <li>Databases</li>
            </ol>

            <h2>What Can You Build?</h2>

            <ul>
                <li>REST APIs</li>
                <li>Backend services</li>
                <li>CLI tools</li>
                <li>Cloud applications</li>
                <li>Microservices</li>
            </ul>

            <h2>Your First Go Command</h2>

            <pre style={codeStyle}>
                <code>{`go run main.go`}</code>
            </pre>

            <h2>Go Modules</h2>

            <p>
                Go modules are used to manage dependencies and define a
                Go project's module path.
            </p>

            <pre style={codeStyle}>
                <code>{`go mod init my-project
go mod tidy`}</code>
            </pre>

            <h2>Start Learning</h2>

            <p>
                Ready to learn Go? Start with variables and basic types,
                then work your way through functions, structs, interfaces,
                concurrency, and backend development.
            </p>

        </div>
    );
}