export default function Sidebar() {
    return (
        <div>
            <h1
                style={{
                    fontSize: "42px",
                    fontWeight: 700,
                    margin: "0 0 18px",
                }}
            >
                React
            </h1>

            <p
                style={{
                    color: "#aaa",
                    fontSize: "16px",
                    maxWidth: "850px",
                }}
            >
                React is a JavaScript library for building user interfaces.
                It lets you create reusable components and build interactive
                web applications.
            </p>

            <section style={{ marginTop: "48px" }}>
                <h2
                    style={{
                        fontSize: "26px",
                        marginBottom: "16px",
                    }}
                >
                    What is React?
                </h2>

                <p
                    style={{
                        color: "#aaa",
                        maxWidth: "850px",
                    }}
                >
                    React uses a component-based approach to build user
                    interfaces. Instead of creating one huge interface,
                    applications can be divided into smaller reusable
                    components.
                </p>
            </section>

            <section style={{ marginTop: "48px" }}>
                <h2
                    style={{
                        fontSize: "26px",
                        marginBottom: "16px",
                    }}
                >
                    Why Learn React?
                </h2>

                <ul
                    style={{
                        color: "#aaa",
                        paddingLeft: "22px",
                    }}
                >
                    <li>Build interactive user interfaces</li>
                    <li>Create reusable components</li>
                    <li>Manage application state</li>
                    <li>Build modern web applications</li>
                    <li>Work with a huge JavaScript ecosystem</li>
                </ul>
            </section>

            <section style={{ marginTop: "48px" }}>
                <h2
                    style={{
                        fontSize: "26px",
                        marginBottom: "16px",
                    }}
                >
                    Simple Example
                </h2>

                <pre
                    style={{
                        background: "#111",
                        border: "1px solid #252525",
                        borderRadius: "10px",
                        padding: "22px",
                        overflowX: "auto",
                        color: "#ddd",
                        fontSize: "14px",
                    }}
                >
                    <code>{`function App() {
    return <h1>Hello, React!</h1>;
}

export default App;`}</code>
                </pre>
            </section>

            <section style={{ marginTop: "48px" }}>
                <h2
                    style={{
                        fontSize: "26px",
                        marginBottom: "16px",
                    }}
                >
                    What You'll Learn
                </h2>

                <ul
                    style={{
                        color: "#aaa",
                        paddingLeft: "22px",
                    }}
                >
                    <li>JSX</li>
                    <li>Components</li>
                    <li>Props</li>
                    <li>State</li>
                    <li>Hooks</li>
                    <li>Events</li>
                    <li>Forms</li>
                    <li>Context</li>
                </ul>
            </section>
        </div>
    );
}