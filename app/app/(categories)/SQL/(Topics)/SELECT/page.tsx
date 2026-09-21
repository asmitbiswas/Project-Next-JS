export default function SelectPage() {
    return (
        <div>
            <h1>SQL SELECT</h1>

            <p>
                The <code>SELECT</code> statement is used to retrieve data from
                one or more tables in a database.
            </p>

            <h2>Basic Syntax</h2>

            <pre>
                <code>{`SELECT column1, column2
FROM table_name;`}</code>
            </pre>

            <p>
                To select all columns from a table, use the <code>*</code>
                symbol.
            </p>

            <pre>
                <code>{`SELECT *
FROM users;`}</code>
            </pre>

            <h2>Select Specific Columns</h2>

            <p>
                You can select only the columns you need by writing their names
                after <code>SELECT</code>.
            </p>

            <pre>
                <code>{`SELECT name, email
FROM users;`}</code>
            </pre>

            <h2>SELECT with WHERE</h2>

            <p>
                The <code>WHERE</code> clause filters the rows returned by a
                query.
            </p>

            <pre>
                <code>{`SELECT name, email
FROM users
WHERE age > 18;`}</code>
            </pre>

            <h2>SELECT with ORDER BY</h2>

            <p>
                The <code>ORDER BY</code> clause sorts the returned data.
            </p>

            <pre>
                <code>{`SELECT name, age
FROM users
ORDER BY age DESC;`}</code>
            </pre>

            <p>
                <code>ASC</code> sorts in ascending order, while{" "}
                <code>DESC</code> sorts in descending order.
            </p>

            <h2>SELECT with DISTINCT</h2>

            <p>
                The <code>DISTINCT</code> keyword removes duplicate values from
                the result.
            </p>

            <pre>
                <code>{`SELECT DISTINCT city
FROM users;`}</code>
            </pre>

            <h2>SELECT with LIMIT</h2>

            <p>
                The <code>LIMIT</code> clause restricts the number of rows
                returned.
            </p>

            <pre>
                <code>{`SELECT *
FROM users
LIMIT 5;`}</code>
            </pre>

            <h2>Multiple Conditions</h2>

            <p>
                You can combine conditions using <code>AND</code> and{" "}
                <code>OR</code>.
            </p>

            <pre>
                <code>{`SELECT *
FROM users
WHERE age > 18 AND city = 'Kolkata';`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                The <code>SELECT</code> statement is one of the most commonly
                used SQL commands. It allows you to retrieve specific or
                complete data from database tables and combine it with clauses
                such as <code>WHERE</code>, <code>ORDER BY</code>,{" "}
                <code>DISTINCT</code>, and <code>LIMIT</code>.
            </p>
        </div>
    );
}