
export default function SQLWhere() {
  const heading = {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const paragraph = {
    color: "#aaa",
    fontSize: "15px",
    lineHeight: "1.8",
  };

  const code = {
    backgroundColor: "#111",
    padding: "14px",
    borderRadius: "12px",
    borderLeft: "6px solid rgb(13 200 13)",
    overflowX: "auto" as const,
    fontSize: "14px",
    lineHeight: "1.8",
    color: "#eee",
    marginTop: "15px",
    marginBottom: "25px",
  };

  const section = { marginTop: "35px" };

  return (
    <div
      style={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        color: "#fff",
        padding: "35px",
        maxWidth: "900px",
      }}
    >
      <div
        style={{
          color: "rgb(13 200 13)",
          fontSize: "13px",
          marginBottom: "15px",
        }}
      >
        DEVVAULT / DATABASE / SQL
      </div>

      <h1 style={{ fontSize: "38px", fontWeight: "bold" }}>
        SQL WHERE
      </h1>

      <p style={paragraph}>
        Learn how to filter records in a database using the SQL WHERE clause.
      </p>

      <div style={section}>
        <h2 style={heading}>What is WHERE?</h2>
        <p style={paragraph}>
          The WHERE clause is used to filter records and retrieve
          only the rows that match a specific condition.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Basic Syntax</h2>
        <pre style={code}>
{`SELECT column_name
FROM table_name
WHERE condition;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Example: Filter Records</h2>
        <p style={paragraph}>
          Suppose we have a Students table. We want to find
          students whose age is 15.
        </p>
        <pre style={code}>
{`SELECT *
FROM Students
WHERE age = 15;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE with Comparison Operators</h2>
        <p style={paragraph}>
          SQL supports different comparison operators to filter data.
        </p>

        <pre style={code}>
{`SELECT * FROM Students WHERE age = 15;
SELECT * FROM Students WHERE age > 15;
SELECT * FROM Students WHERE age < 15;
SELECT * FROM Students WHERE age >= 15;
SELECT * FROM Students WHERE age <= 15;
SELECT * FROM Students WHERE age <> 15;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE with AND</h2>
        <p style={paragraph}>
          AND returns records only when all specified conditions are true.
        </p>
        <pre style={code}>
{`SELECT *
FROM Students
WHERE age = 15 AND city = 'Kolkata';`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE with OR</h2>
        <p style={paragraph}>
          OR returns records when at least one condition is true.
        </p>
        <pre style={code}>
{`SELECT *
FROM Students
WHERE city = 'Kolkata' OR city = 'Delhi';`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE with NOT</h2>
        <p style={paragraph}>
          NOT reverses a condition.
        </p>
        <pre style={code}>
{`SELECT *
FROM Students
WHERE NOT city = 'Kolkata';`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE with BETWEEN</h2>
        <p style={paragraph}>
          BETWEEN selects values within a specified range, including both endpoints.
        </p>
        <pre style={code}>
{`SELECT *
FROM Students
WHERE age BETWEEN 13 AND 18;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE with IN</h2>
        <p style={paragraph}>
          IN checks whether a value matches any value in a given list.
        </p>
        <pre style={code}>
{`SELECT *
FROM Students
WHERE city IN ('Kolkata', 'Delhi', 'Mumbai');`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE with LIKE</h2>
        <p style={paragraph}>
          LIKE searches for a pattern in a column.
        </p>
        <pre style={code}>
{`SELECT *
FROM Students
WHERE name LIKE 'A%';`}
        </pre>
        <p style={paragraph}>
          Here, A% matches names that start with the letter A.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Important Points</h2>
        <ul style={{ ...paragraph, paddingLeft: "22px" }}>
          <li>WHERE filters records based on conditions.</li>
          <li>It works with SELECT, UPDATE, and DELETE.</li>
          <li>AND requires all conditions to be true.</li>
          <li>OR requires at least one condition to be true.</li>
          <li>BETWEEN includes both boundary values.</li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "50px",
          paddingTop: "20px",
          borderTop: "1px solid #222",
          color: "#666",
          fontSize: "13px",
        }}
      >
        DEVVAULT — KEEP BUILDING. KEEP LEARNING.
      </div>
    </div>
  );
}
