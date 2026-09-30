import Link from "next/link";

export default function MongoDBPage() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const,
        fontSize: "14px",
        lineHeight: "1.8",
    };

    return (
        <main
            style={{
                minHeight: "100vh",
                backgroundColor: "#050505",
                color: "white",
                padding: "40px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                <Link
                    href="/"
                    style={{
                        color: "rgb(13 200 13)",
                        textDecoration: "none",
                        fontSize: "14px",
                    }}
                >
                    ← Go Home
                </Link>

                <h1
                    style={{
                        fontSize: "42px",
                        marginTop: "30px",
                        marginBottom: "10px",
                    }}
                >
                    MongoDB
                </h1>

                <p
                    style={{
                        color: "#aaa",
                        fontSize: "17px",
                        lineHeight: "1.7",
                    }}
                >
                    MongoDB is a NoSQL database that stores data in flexible,
                    JSON-like documents instead of traditional rows and tables.
                </p>

                <h2 style={{ marginTop: "45px" }}>What is MongoDB?</h2>

                <p
                    style={{
                        color: "#bbb",
                        lineHeight: "1.8",
                    }}
                >
                    MongoDB is a document-oriented database designed for
                    storing and managing data using collections and documents.
                    It is commonly used in modern web applications and
                    backend systems.
                </p>

                <h2 style={{ marginTop: "40px" }}>Why MongoDB?</h2>

                <ul
                    style={{
                        color: "#bbb",
                        lineHeight: "2",
                        paddingLeft: "25px",
                    }}
                >
                    <li>Stores data in flexible documents</li>
                    <li>Easy to work with JavaScript and Node.js</li>
                    <li>Supports large and scalable applications</li>
                    <li>Uses collections instead of traditional tables</li>
                    <li>Provides powerful querying and indexing</li>
                </ul>

                <h2 style={{ marginTop: "40px" }}>Document Example</h2>

                <pre style={codeStyle}>
{`{
    "name": "Asmit",
    "age": 13,
    "role": "Developer",
    "skills": ["JavaScript", "TypeScript", "Go"]
}`}
                </pre>

                <h2 style={{ marginTop: "40px" }}>Database Structure</h2>

                <pre style={codeStyle}>
{`Database
 └── Collection
      └── Document
           ├── Field
           ├── Field
           └── Field`}
                </pre>

                <h2 style={{ marginTop: "40px" }}>Basic Commands</h2>

                <pre style={codeStyle}>
{`show dbs

use devvault

show collections

db.users.find()

db.users.insertOne({
    name: "Asmit",
    role: "Developer"
})`}
                </pre>

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap",
                        marginTop: "45px",
                    }}
                >
                    <Link
                        href="/MongoDB"
                        style={{
                            color: "white",
                            backgroundColor: "#111",
                            border: "1px solid #222",
                            padding: "12px 18px",
                            borderRadius: "10px",
                            textDecoration: "none",
                        }}
                    >
                        MongoDB Basics →
                    </Link>

                    <Link
                        href="/MongoDB"
                        style={{
                            color: "white",
                            backgroundColor: "#111",
                            border: "1px solid #222",
                            padding: "12px 18px",
                            borderRadius: "10px",
                            textDecoration: "none",
                        }}
                    >
                        CRUD →
                    </Link>
                </div>
            </div>
        </main>
    );
}