export default function SQLInsert() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background: "#050505",
                color: "#fff",
                padding: "60px 8%",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.7",
            }}
        >
            <h1
                style={{
                    fontSize: "42px",
                    marginBottom: "12px",
                    letterSpacing: "-1px",
                }}
            >
                SQL INSERT
            </h1>

            <p
                style={{
                    color: "#999",
                    fontSize: "17px",
                    maxWidth: "750px",
                    marginBottom: "40px",
                }}
            >
                The INSERT statement is used to add new records to a table in a
                database.
            </p>

            <h2 style={{ fontSize: "26px", marginBottom: "14px" }}>
                Syntax
            </h2>

            <pre
                style={{
                    background: "#0b0b0b",
                    border: "1px solid #1d1d1d",
                    borderRadius: "10px",
                    padding: "22px",
                    overflowX: "auto",
                    color: "#ddd",
                    fontSize: "15px",
                    marginBottom: "40px",
                }}
            >
{`INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);`}
            </pre>

            <h2 style={{ fontSize: "26px", marginBottom: "14px" }}>
                Example
            </h2>

            <pre
                style={{
                    background: "#0b0b0b",
                    border: "1px solid #1d1d1d",
                    borderRadius: "10px",
                    padding: "22px",
                    overflowX: "auto",
                    color: "#ddd",
                    fontSize: "15px",
                    marginBottom: "24px",
                }}
            >
{`INSERT INTO users (name, age, city)
VALUES ('Asmit', 13, 'Kolkata');`}
            </pre>

            <p
                style={{
                    color: "#aaa",
                    marginBottom: "40px",
                }}
            >
                This adds a new row to the <code style={{ color: "#fff" }}>users</code>{" "}
                table with the specified name, age, and city.
            </p>

            <h2 style={{ fontSize: "26px", marginBottom: "14px" }}>
                Insert Multiple Rows
            </h2>

            <pre
                style={{
                    background: "#0b0b0b",
                    border: "1px solid #1d1d1d",
                    borderRadius: "10px",
                    padding: "22px",
                    overflowX: "auto",
                    color: "#ddd",
                    fontSize: "15px",
                    marginBottom: "24px",
                }}
            >
{`INSERT INTO users (name, age, city)
VALUES
    ('Asmit', 13, 'Kolkata'),
    ('Rahul', 14, 'Delhi'),
    ('Arjun', 13, 'Mumbai');`}
            </pre>

            <h2 style={{ fontSize: "26px", marginBottom: "14px" }}>
                Important
            </h2>

            <ul
                style={{
                    color: "#aaa",
                    paddingLeft: "22px",
                    maxWidth: "800px",
                }}
            >
                <li>
                    The number of columns should match the number of values.
                </li>
                <li>
                    Text values are written inside single quotes.
                </li>
                <li>
                    Each INSERT statement ends with a semicolon.
                </li>
            </ul>
        </main>
    );
}