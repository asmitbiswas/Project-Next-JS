
export default function SQLOrderBy() {
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
        SQL ORDER BY
      </h1>

      <p style={paragraph}>
        Learn how to sort database records in ascending or descending order
        using the SQL ORDER BY clause.
      </p>

      <div style={section}>
        <h2 style={heading}>What is ORDER BY?</h2>
        <p style={paragraph}>
          ORDER BY is used to sort the result of a query based on
          one or more columns. By default, records are sorted in
          ascending order.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Basic Syntax</h2>
        <pre style={code}>
{`SELECT column_name
FROM table_name
ORDER BY column_name ASC;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Sample Table</h2>
        <p style={paragraph}>Students Table</p>

        <pre style={code}>
{`id    name       age
1     Asmit      16
2     Rahul      14
3     Aryan      17
4     Priya      15
5     Rohan      13`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>1. ASC (Ascending Order)</h2>
        <p style={paragraph}>
          ASC sorts records from smallest to largest or
          alphabetically from A to Z.
        </p>

        <pre style={code}>
{`SELECT *
FROM Students
ORDER BY age ASC;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`id    name       age
5     Rohan      13
2     Rahul      14
4     Priya      15
1     Asmit      16
3     Aryan      17`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>2. DESC (Descending Order)</h2>
        <p style={paragraph}>
          DESC sorts records from largest to smallest or
          alphabetically from Z to A.
        </p>

        <pre style={code}>
{`SELECT *
FROM Students
ORDER BY age DESC;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`id    name       age
3     Aryan      17
1     Asmit      16
4     Priya      15
2     Rahul      14
5     Rohan      13`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>3. ORDER BY with Multiple Columns</h2>
        <p style={paragraph}>
          You can sort records using multiple columns.
          SQL sorts by the first column, then uses the
          second column to break ties.
        </p>

        <pre style={code}>
{`SELECT *
FROM Students
ORDER BY age ASC, name DESC;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>4. ORDER BY with WHERE</h2>
        <p style={paragraph}>
          You can filter records first and then sort the results.
        </p>

        <pre style={code}>
{`SELECT *
FROM Students
WHERE age > 14
ORDER BY age DESC;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>5. ORDER BY with LIMIT</h2>
        <p style={paragraph}>
          LIMIT restricts the number of rows returned.
          Here, we get the three oldest students.
        </p>

        <pre style={code}>
{`SELECT *
FROM Students
ORDER BY age DESC
LIMIT 3;`}
        </pre>

        <p style={paragraph}>
          Note: LIMIT is supported by MySQL and PostgreSQL.
          SQL Server uses TOP or OFFSET/FETCH instead.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>6. ORDER BY with Aggregate Functions</h2>
        <p style={paragraph}>
          You can sort grouped results using aggregate functions.
        </p>

        <pre style={code}>
{`SELECT department, AVG(salary) AS average_salary
FROM Employees
GROUP BY department
ORDER BY average_salary DESC;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>ASC vs DESC</h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              color: "#ccc",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr style={{ color: "rgb(13 200 13)" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>ASC</th>
                <th style={{ padding: "12px", textAlign: "left" }}>DESC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Ascending order
                </td>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Descending order
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Smallest to largest
                </td>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Largest to smallest
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  A to Z
                </td>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Z to A
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={section}>
        <h2 style={heading}>Important Points</h2>
        <ul style={{ ...paragraph, paddingLeft: "22px" }}>
          <li>ORDER BY sorts query results.</li>
          <li>ASC means ascending order.</li>
          <li>DESC means descending order.</li>
          <li>ASC is the default sorting order.</li>
          <li>You can sort using multiple columns.</li>
          <li>ORDER BY can be combined with WHERE and GROUP BY.</li>
          <li>LIMIT can restrict the number of returned rows.</li>
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
