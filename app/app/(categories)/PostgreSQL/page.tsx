export default function SQLPage() {
    return (
        <main>
            <h1>SQL</h1>

            <p>
                SQL (Structured Query Language) is a language used to
                communicate with and manage relational databases.
            </p>

            <h2>What is SQL?</h2>

            <p>
                SQL allows you to create databases and tables, store data,
                retrieve information, update records, and delete data.
            </p>

            <h2>What Can SQL Do?</h2>

            <ul>
                <li>Create databases and tables</li>
                <li>Insert new data</li>
                <li>Retrieve data</li>
                <li>Update existing data</li>
                <li>Delete data</li>
                <li>Filter and sort data</li>
                <li>Combine data from multiple tables</li>
            </ul>

            <h2>Basic SQL Example</h2>

            <pre>
                <code>{`SELECT * FROM users;`}</code>
            </pre>

            <p>
                This query selects all columns and rows from a table named
                <code> users</code>.
            </p>

            <h2>SQL Commands</h2>

            <ul>
                <li>SELECT — retrieve data</li>
                <li>INSERT — add data</li>
                <li>UPDATE — modify data</li>
                <li>DELETE — remove data</li>
                <li>CREATE — create database objects</li>
                <li>ALTER — modify database objects</li>
                <li>DROP — remove database objects</li>
            </ul>

            <h2>SQL Databases</h2>

            <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>SQLite</li>
                <li>Microsoft SQL Server</li>
                <li>Oracle Database</li>
            </ul>

            <h2>SQL Topics</h2>

            <ul>
                <li>SELECT Statements</li>
                <li>WHERE Clause</li>
                <li>ORDER BY</li>
                <li>GROUP BY</li>
                <li>JOINs</li>
                <li>Subqueries</li>
                <li>Functions</li>
                <li>Indexes</li>
                <li>Constraints</li>
                <li>Transactions</li>
            </ul>

            <h2>Why Learn SQL?</h2>

            <p>
                SQL is one of the most widely used technologies for working
                with structured data. It is an important skill for backend
                development, data analysis, and database management.
            </p>
        </main>
    );
}