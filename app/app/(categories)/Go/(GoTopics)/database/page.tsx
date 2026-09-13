export default function DBPage() {
   const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };
    return (
        <main
        style={{
            lineHeight:"1.6"
        }}
        >
            <h1>Database</h1>

            <p>
                A database is an organized collection of data that can be
                stored, managed, and retrieved efficiently.
            </p>

            <h2>What is a Database?</h2>

            <p>
                A database stores information in a structured way so that
                applications can easily read, add, update, and delete data.
            </p>

            <h2>Types of Databases</h2>

            <ul>
                <li>Relational Databases</li>
                <li>NoSQL Databases</li>
                <li>Document Databases</li>
                <li>Key-Value Databases</li>
                <li>Graph Databases</li>
            </ul>

            <h2>Common Database Operations</h2>

            <ul>
                <li>Create data</li>
                <li>Read data</li>
                <li>Update data</li>
                <li>Delete data</li>
            </ul>

            <h2>SQL Databases</h2>

            <p>
                SQL databases store data in tables made up of rows and
                columns. They use SQL to manage and query the data.
            </p>

            <pre style={codeStyle}>
                <code>{`CREATE TABLE users (
    id INT,
    name VARCHAR(100),
    email VARCHAR(100)
);`}</code>
            </pre>

            <h2>Popular Databases</h2>

            <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
                <li>MongoDB</li>
                <li>Redis</li>
            </ul>

            <h2>Database Connection</h2>

            <p>
                Applications connect to databases through database drivers,
                libraries, or ORMs.
            </p>

            <pre style={codeStyle}>
                <code>{`const users = await db.user.findMany();`}</code>
            </pre>

            <h2>Why Use Databases?</h2>

            <ul>
                <li>Store large amounts of data</li>
                <li>Retrieve data quickly</li>
                <li>Keep data organized</li>
                <li>Maintain data consistency</li>
                <li>Allow multiple applications to access data</li>
            </ul>
        </main>
    );
}