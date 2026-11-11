
export default function SQLFunctions() {
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
        SQL FUNCTIONS
      </h1>

      <p style={paragraph}>
        Learn how to perform calculations, manipulate text,
        handle dates, and summarize database records using SQL functions.
      </p>

      <div style={section}>
        <h2 style={heading}>What are SQL Functions?</h2>
        <p style={paragraph}>
          SQL functions are built-in operations that perform
          specific tasks on database values and return results.
          They help manipulate, calculate, and analyze data.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Types of SQL Functions</h2>
        <p style={paragraph}>
          SQL functions can be divided into two major categories:
        </p>

        <pre style={code}>
{`1. Aggregate Functions
2. Scalar Functions`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>1. Aggregate Functions</h2>
        <p style={paragraph}>
          Aggregate functions perform calculations on multiple
          rows and return a single result for each group.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>COUNT()</h2>
        <p style={paragraph}>
          COUNT() returns the number of rows.
        </p>

        <pre style={code}>
{`SELECT COUNT(*)
FROM Students;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>SUM()</h2>
        <p style={paragraph}>
          SUM() calculates the total of numeric values.
        </p>

        <pre style={code}>
{`SELECT SUM(salary)
FROM Employees;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>AVG()</h2>
        <p style={paragraph}>
          AVG() calculates the average of numeric values.
        </p>

        <pre style={code}>
{`SELECT AVG(salary)
FROM Employees;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>MIN()</h2>
        <p style={paragraph}>
          MIN() returns the smallest value.
        </p>

        <pre style={code}>
{`SELECT MIN(salary)
FROM Employees;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>MAX()</h2>
        <p style={paragraph}>
          MAX() returns the largest value.
        </p>

        <pre style={code}>
{`SELECT MAX(salary)
FROM Employees;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>2. String Functions</h2>
        <p style={paragraph}>
          String functions are used to manipulate text values.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>UPPER()</h3>
        <pre style={code}>
{`SELECT UPPER(name)
FROM Students;`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>LOWER()</h3>
        <pre style={code}>
{`SELECT LOWER(name)
FROM Students;`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>LENGTH()</h3>
        <pre style={code}>
{`SELECT LENGTH(name)
FROM Students;`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>CONCAT()</h3>
        <pre style={code}>
{`SELECT CONCAT(first_name, ' ', last_name)
FROM Students;`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>SUBSTRING()</h3>
        <pre style={code}>
{`SELECT SUBSTRING(name, 1, 3)
FROM Students;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>3. Numeric Functions</h2>
        <p style={paragraph}>
          Numeric functions perform mathematical operations.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>ROUND()</h3>
        <pre style={code}>
{`SELECT ROUND(45.678, 2);
-- Result: 45.68`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>ABS()</h3>
        <pre style={code}>
{`SELECT ABS(-25);
-- Result: 25`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>CEIL()</h3>
        <pre style={code}>
{`SELECT CEIL(12.3);
-- Result: 13`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>FLOOR()</h3>
        <pre style={code}>
{`SELECT FLOOR(12.9);
-- Result: 12`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>4. Date and Time Functions</h2>
        <p style={paragraph}>
          Date and time functions help work with dates and timestamps.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>CURRENT_DATE</h3>
        <pre style={code}>
{`SELECT CURRENT_DATE;`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>CURRENT_TIMESTAMP</h3>
        <pre style={code}>
{`SELECT CURRENT_TIMESTAMP;`}
        </pre>

        <h3 style={{ color: "rgb(13 200 13)" }}>EXTRACT()</h3>
        <pre style={code}>
{`SELECT EXTRACT(YEAR FROM CURRENT_DATE);`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>5. NULL Functions</h2>
        <p style={paragraph}>
          NULL-handling functions help manage missing or unknown values.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>COALESCE()</h3>
        <pre style={code}>
{`SELECT COALESCE(phone, 'Not Available')
FROM Students;`}
        </pre>

        <p style={paragraph}>
          COALESCE() returns the first non-NULL value.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>NULLIF()</h3>
        <pre style={code}>
{`SELECT NULLIF(10, 10);
-- Result: NULL`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Function Summary</h2>

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
                <th style={{ padding: "12px", textAlign: "left" }}>Function</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["COUNT()", "Counts rows"],
                ["SUM()", "Calculates total"],
                ["AVG()", "Calculates average"],
                ["MIN()", "Finds minimum value"],
                ["MAX()", "Finds maximum value"],
                ["UPPER()", "Converts text to uppercase"],
                ["LOWER()", "Converts text to lowercase"],
                ["ROUND()", "Rounds numeric values"],
                ["ABS()", "Returns absolute value"],
                ["COALESCE()", "Returns first non-NULL value"],
              ].map(([fn, purpose]) => (
                <tr key={fn}>
                  <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                    {fn}
                  </td>
                  <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={section}>
        <h2 style={heading}>Important Points</h2>
        <ul style={{ ...paragraph, paddingLeft: "22px" }}>
          <li>Functions perform specific operations on data.</li>
          <li>Aggregate functions process multiple rows.</li>
          <li>String functions manipulate text.</li>
          <li>Numeric functions perform calculations.</li>
          <li>Date functions work with dates and timestamps.</li>
          <li>COALESCE() helps handle NULL values.</li>
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
