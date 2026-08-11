export default function Database() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Databases</h1>

            <p>
                A database is used to store and manage application data.
                Backend applications commonly use databases to save users,
                posts, products, messages, and other information.
            </p>

            <h2>Why Use a Database?</h2>

            <p>
                Data stored only in variables disappears when the server
                stops. A database provides persistent storage that can be
                accessed whenever the application needs it.
            </p>

            <h2>Types of Databases</h2>

            <ul>
                <li>
                    <strong>SQL</strong> — stores data in tables with rows
                    and columns.
                </li>
                <li>
                    <strong>NoSQL</strong> — commonly stores data in more
                    flexible structures such as documents.
                </li>
            </ul>

            <h2>Popular Databases</h2>

            <ul>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
                <li>MongoDB</li>
                <li>Redis</li>
            </ul>

            <h2>SQL Example</h2>

            <p>
                SQL databases organize data into tables.
            </p>

            <pre style={codeStyle}>
                <code>{`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
);`}</code>
            </pre>

            <h2>Inserting Data</h2>

            <pre style={codeStyle}>
                <code>{`INSERT INTO users (name, age)
VALUES ("Asmit", 13);`}</code>
            </pre>

            <h2>Reading Data</h2>

            <pre style={codeStyle}>
                <code>{`SELECT * FROM users;`}</code>
            </pre>

            <h2>Updating Data</h2>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET age = 14
WHERE id = 1;`}</code>
            </pre>

            <h2>Deleting Data</h2>

            <pre style={codeStyle}>
                <code>{`DELETE FROM users
WHERE id = 1;`}</code>
            </pre>

            <h2>Using a Database from Node.js</h2>

            <p>
                Node.js applications can connect to databases using database
                drivers or libraries.
            </p>

            <pre style={codeStyle}>
                <code>{`const db = require("some-database-library");

async function getUsers() {
    const users = await db.query(
        "SELECT * FROM users"
    );

    console.log(users);
}

getUsers();`}</code>
            </pre>

            <h2>Database + REST API</h2>

            <p>
                A REST API can use a database to store the resources it
                manages.
            </p>

            <pre style={codeStyle}>
                <code>{`app.get("/api/users", async (req, res) => {
    const users = await db.query(
        "SELECT * FROM users"
    );

    res.json(users);
});`}</code>
            </pre>

            <h2>CRUD</h2>

            <p>
                CRUD describes the four basic operations performed on data.
            </p>

            <ul>
                <li><strong>Create</strong> → INSERT</li>
                <li><strong>Read</strong> → SELECT</li>
                <li><strong>Update</strong> → UPDATE</li>
                <li><strong>Delete</strong> → DELETE</li>
            </ul>

            <h2>Database Flow</h2>

            <pre style={codeStyle}>
                <code>{`Client
   ↓
Express API
   ↓
Database
   ↓
Data
   ↓
Express API
   ↓
Client`}</code>
            </pre>

            <h2>Environment Variables</h2>

            <p>
                Database credentials should not normally be hard-coded in
                source code. Environment variables can be used to store
                configuration such as database URLs and passwords.
            </p>

            <pre style={codeStyle}>
                <code>{`DATABASE_URL="your-database-url"`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Databases provide persistent storage for backend applications.
                Node.js can communicate with both SQL and NoSQL databases,
                while Express can expose that stored data through REST APIs.
            </p>

        </div>
    );
}