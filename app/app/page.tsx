

import Link from "next/link";

export default function Home() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#050505",
                color: "white",
                lineHeight: "1.6",
            }}
        >
            <header
                style={{
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 32px",
                    borderBottom: "1px solid #252525",
                    background: "#080808",
                }}
            >
                <Link
                    href="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    DevVault
                </Link>
            </header>

            <main
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "70px 48px",
                }}
            >
                <section>
                    <p
                        style={{
                            margin: "0 0 10px",
                            color: "#666",
                            fontSize: "13px",
                            letterSpacing: "2px",
                        }}
                    >
                        DEVELOPER KNOWLEDGE BASE
                    </p>

                    <h1
                        style={{
                            margin: "0 0 18px",
                            fontSize: "48px",
                            lineHeight: "1.1",
                        }}
                    >
                        DevVault
                    </h1>

                    <p
                        style={{
                            margin: 0,
                            maxWidth: "700px",
                            color: "#aaa",
                            fontSize: "17px",
                        }}
                    >
                        Your personal vault for programming, development,
                        frameapp/public/logo.icoworks, and everything you're learning.
                    </p>
                </section>

                <section style={{ marginTop: "60px" }}>
                    <h2
                        style={{
                            margin: "0 0 24px",
                            fontSize: "26px",
                        }}
                    >
                        Technologies
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "16px",
                        }}
                    >
                        <Link
                            href="/JavaScript"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                background: "#080808",
                                border: "1px solid #252525",
                                borderRadius: "10px",
                                padding: "24px",
                            }}
                        >
                            <h3 style={{ margin: "0 0 8px" }}>
                                JavaScript
                            </h3>
                            <p style={{ margin: 0, color: "#777" }}>
                                Learn JavaScript fundamentals and advanced
                                concepts.
                            </p>
                        </Link>

                        <Link
                            href="/TypeScript"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                background: "#080808",
                                border: "1px solid #252525",
                                borderRadius: "10px",
                                padding: "24px",
                            }}
                        >
                            <h3 style={{ margin: "0 0 8px" }}>
                                TypeScript
                            </h3>
                            <p style={{ margin: 0, color: "#777" }}>
                                Learn types, interfaces, generics, utility
                                types, and more.
                            </p>
                        </Link>

                        <Link
                            href="/React"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                background: "#080808",
                                border: "1px solid #252525",
                                borderRadius: "10px",
                                padding: "24px",
                            }}
                        >
                            <h3 style={{ margin: "0 0 8px" }}>
                                React
                            </h3>
                            <p style={{ margin: 0, color: "#777" }}>
                                Build modern interfaces with components,
                                props, state, and hooks.
                            </p>
                        </Link>

                        <Link
                            href="/Next-JS"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                background: "#080808",
                                border: "1px solid #252525",
                                borderRadius: "10px",
                                padding: "24px",
                            }}
                        >
                            <h3 style={{ margin: "0 0 8px" }}>
                                Next.js
                            </h3>
                            <p style={{ margin: 0, color: "#777" }}>
                                Learn routing, layouts, server components,
                                APIs, and deployment.
                            </p>
                        </Link>

                        <Link
                            href="/Node.js"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                background: "#080808",
                                border: "1px solid #252525",
                                borderRadius: "10px",
                                padding: "24px",
                            }}
                        >
                            <h3 style={{ margin: "0 0 8px" }}>
                                Node.js
                            </h3>
                            <p style={{ margin: 0, color: "#777" }}>
                                Learn Node.js, modules, npm, HTTP, Express,
                                REST APIs, and databases.
                            </p>
                        </Link>

                        <Link
                            href="/Go"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                background: "#080808",
                                border: "1px solid #252525",
                                borderRadius: "10px",
                                padding: "24px",
                            }}
                        >
                            <h3 style={{ margin: "0 0 8px" }}>
                                Go
                            </h3>
                            <p style={{ margin: 0, color: "#777" }}>
                                Learn the Go programming language and backend
                                development.
                            </p>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}