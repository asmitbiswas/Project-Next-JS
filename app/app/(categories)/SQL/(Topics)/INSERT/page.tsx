export default function SQLInsertPage() {

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

            <h1>SQL INSERT</h1>

            <p>
                The <code>INSERT</code> statement is used to add new records
                into a table in a SQL database.
            </p>

            <h2>What is INSERT?</h2>

            <p>
                <code>INSERT</code> is a SQL command used to add new rows of
                data to an existing table.
            </p>

            <p>
                You can insert values into specific columns by using
                <code>INSERT INTO</code>.
            </p>

            <h2>Basic Syntax</h2>

            <pre style={codeStyle}>
                <code>{`INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);`}</code>
            </pre>

            <h2>Example Table</h2>

            <p>
                Suppose we have a <code>users</code> table:
            </p>

            <pre style={codeStyle}>
                <code>{`users
--------------------------------
id | name  | email
1  | Asmit | asmit@example.com
2  | Rahul | rahul@example.com`}</code>
            </pre>

            <h2>Inserting a Record</h2>

            <p>
                We can add a new user using the <code>INSERT INTO</code>
                statement.
            </p>

            <pre style={codeStyle}>
                <code>{`INSERT INTO users (id, name, email)
VALUES (3, 'Alex', 'alex@example.com');`}</code>
            </pre>

            <p>
                This adds a new row to the <code>users</code> table.
            </p>

            <h2>Inserting Without Specifying All Columns</h2>

            <p>
                You do not always have to provide values for every column.
                Columns that allow <code>NULL</code> or have default values
                can be left out.
            </p>

            <pre style={codeStyle}>
                <code>{`INSERT INTO users (name, email)
VALUES ('John', 'john@example.com');`}</code>
            </pre>

            <h2>Inserting Multiple Rows</h2>

            <p>
                SQL also allows multiple records to be inserted using a single
                <code>INSERT</code> statement.
            </p>

            <pre style={codeStyle}>
                <code>{`INSERT INTO users (name, email)
VALUES
    ('Asmit', 'asmit@example.com'),
    ('Rahul', 'rahul@example.com'),
    ('Alex', 'alex@example.com');`}</code>
            </pre>

            <h2>Using INSERT with SELECT</h2>

            <p>
                You can insert data returned by a <code>SELECT</code> query
                into another table.
            </p>

            <pre style={codeStyle}>
                <code>{`INSERT INTO new_users (name, email)
SELECT name, email
FROM users;`}</code>
            </pre>

            <h2>Important Rules</h2>

            <ul>
                <li>
                    The number of columns should match the number of values.
                </li>

                <li>
                    Text values should normally be written inside single
                    quotes.
                </li>

                <li>
                    The values must match the corresponding column data types.
                </li>

                <li>
                    The table must already exist before inserting data.
                </li>
            </ul>

            <h2>Example</h2>

            <pre style={codeStyle}>
                <code>{`CREATE TABLE users (
    id INT,
    name VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users (id, name, email)
VALUES (1, 'Asmit', 'asmit@example.com');`}</code>
            </pre>

            <h2>Summary</h2>

            <ul>
                <li>
                    <code>INSERT INTO</code> adds new records to a table.
                </li>

                <li>
                    <code>VALUES</code> specifies the data to insert.
                </li>

                <li>
                    Multiple rows can be inserted in one statement.
                </li>

                <li>
                    <code>INSERT ... SELECT</code> can copy selected data
                    between tables.
                </li>
            </ul>

        </main>

    );

}