export default function SQLUpdatePage() {

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

            <h1>SQL UPDATE</h1>

            <p>
                The <code>UPDATE</code> statement is used to modify existing
                records in a SQL database.
            </p>

            <h2>What is UPDATE?</h2>

            <p>
                <code>UPDATE</code> is a SQL command used to change one or more
                values in existing rows of a table.
            </p>

            <p>
                You can update specific columns and use a <code>WHERE</code>
                clause to control which rows are changed.
            </p>

            <h2>Basic Syntax</h2>

            <pre style={codeStyle}>
                <code>{`UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;`}</code>
            </pre>

            <h2>Example Table</h2>

            <p>
                Suppose we have a <code>users</code> table:
            </p>

            <pre style={codeStyle}>
                <code>{`users
--------------------------------
id | name  | age
1  | Asmit | 13
2  | Rahul | 14
3  | Alex  | 13`}</code>
            </pre>

            <h2>Updating One Column</h2>

            <p>
                You can change a single column using <code>UPDATE</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET name = 'John'
WHERE id = 1;`}</code>
            </pre>

            <p>
                This changes the name of the user whose <code>id</code> is
                <code>1</code>.
            </p>

            <h2>Updating Multiple Columns</h2>

            <p>
                Multiple columns can be updated in the same statement.
            </p>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET name = 'John', age = 14
WHERE id = 1;`}</code>
            </pre>

            <h2>Updating Multiple Rows</h2>

            <p>
                If the <code>WHERE</code> condition matches multiple rows,
                all matching rows will be updated.
            </p>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET age = 14
WHERE age = 13;`}</code>
            </pre>

            <p>
                This changes the age to <code>14</code> for every user whose
                current age is <code>13</code>.
            </p>

            <h2>Using UPDATE Without WHERE</h2>

            <p>
                If you leave out the <code>WHERE</code> clause, the statement
                updates every row in the table.
            </p>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET age = 18;`}</code>
            </pre>

            <p>
                This changes the age of every user to <code>18</code>.
            </p>

            <h2>Using UPDATE with Conditions</h2>

            <p>
                The <code>WHERE</code> clause can contain conditions to select
                specific records.
            </p>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET name = 'Alex'
WHERE age >= 14;`}</code>
            </pre>

            <p>
                This changes the name to <code>Alex</code> for every row where
                the age is <code>14</code> or greater.
            </p>

            <h2>Updating Values with Expressions</h2>

            <p>
                You can use expressions to calculate a new value.
            </p>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET age = age + 1
WHERE id = 1;`}</code>
            </pre>

            <p>
                This increases the age of the user with <code>id = 1</code>
                by <code>1</code>.
            </p>

            <h2>Important Rules</h2>

            <ul>

                <li>
                    <code>UPDATE</code> modifies existing records.
                </li>

                <li>
                    <code>SET</code> specifies the columns and their new values.
                </li>

                <li>
                    <code>WHERE</code> determines which rows are updated.
                </li>

                <li>
                    Without <code>WHERE</code>, every row in the table is
                    updated.
                </li>

                <li>
                    Always check your <code>WHERE</code> condition before
                    running an update.
                </li>

            </ul>

            <h2>Example</h2>

            <pre style={codeStyle}>
                <code>{`UPDATE users
SET name = 'Asmit', age = 14
WHERE id = 1;`}</code>
            </pre>

            <h2>Summary</h2>

            <ul>

                <li>
                    <code>UPDATE</code> changes existing data.
                </li>

                <li>
                    <code>SET</code> defines the new values.
                </li>

                <li>
                    <code>WHERE</code> selects the records to modify.
                </li>

                <li>
                    Multiple columns and rows can be updated.
                </li>

            </ul>

        </main>

    );

}