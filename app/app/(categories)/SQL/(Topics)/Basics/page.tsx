 export default function SQLBasicsPage() {
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
        <main>
            <h1>SQL Basics</h1>

            <p>
                Learn the fundamentals of SQL, including databases, tables,
                rows, columns, and basic SQL commands.
            </p>

            <h2>What is SQL?</h2>

            <p>
                SQL stands for Structured Query Language. It is used to
                communicate with and manage relational databases.
            </p>

            <p>
                With SQL, you can create tables, add data, retrieve data,
                modify existing data, and remove data.
            </p>

            <h2>Databases</h2>

            <p>
                A database is a structured collection of data. A database can
                contain multiple tables that store related information.
            </p>

            <h2>Tables</h2>

            <p>
                Data in a relational database is stored inside tables. A table
                consists of rows and columns.
            </p>

            <pre style={codeStyle}>
                <code>{`users
--------------------------------
id | name  | email
1  | Asmit | asmit@example.com
2  | Rahul | rahul@example.com`}</code>
            </pre>

            <h2>Rows</h2>

            <p>
                A row represents one complete record in a table. For example,
                one row in a users table can represent one user.
            </p>

            <h2>Columns</h2>

            <p>
                A column represents a specific type of information stored in a
                table, such as a name, email, or age.
            </p>

            <h2>Creating a Table</h2>

            <p>
                The <code>CREATE TABLE</code> statement is used to create a
                new table.
            </p>

            <pre style={codeStyle}>
                <code>{`CREATE TABLE users (
    id INT,
    name VARCHAR(100),
    email VARCHAR(100)
);`}</code>
            </pre>

            <h2>Inserting Data</h2>

            <p>
                The <code>INSERT INTO</code> statement adds new records to a
                table.
            </p>

            <pre style={codeStyle}>
                <code>{`INSERT INTO users (id, name, email)
VALUES (1, 'Asmit', 'asmit@example.com');`}</code>
            </pre>

            <h2>Reading Data</h2>

            <p>
                The <code>SELECT</code> statement is used to retrieve data
                from a table.
            </p>

            <pre style={codeStyle}>
                <code>{`SELECT * FROM users;`}</code>
            </pre>

            <h2>Updating Data</h2>

            <p>
                The <code>UPDATE</code> statement changes existing records.
            </p>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET name = 'Alex'
WHERE id = 1;`}</code>
            </pre>

            <h2>Deleting Data</h2>

            <p>
                The <code>DELETE</code> statement removes records from a
                table.
            </p>

            <pre style={codeStyle}>
                <code>{`DELETE FROM users
WHERE id = 1;`}</code>
            </pre>

            <h2>Basic SQL Commands</h2>

            <ul>
                <li><code>CREATE</code> — creates database objects</li>
                <li><code>SELECT</code> — retrieves data</li>
                <li><code>INSERT</code> — adds data</li>
                <li><code>UPDATE</code> — modifies data</li>
                <li><code>DELETE</code> — removes data</li>
            </ul>
        </main>
    );
}