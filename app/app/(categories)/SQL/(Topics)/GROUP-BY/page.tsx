
export default function SQLGroupBy() {
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
        SQL GROUP BY
      </h1>

      <p style={paragraph}>
        Learn how to group rows with identical values and
        perform calculations using aggregate functions.
      </p>

      <div style={section}>
        <h2 style={heading}>What is GROUP BY?</h2>
        <p style={paragraph}>
          GROUP BY is used to arrange rows into groups based
          on one or more columns. It is commonly used with
          aggregate functions like COUNT(), SUM(), AVG(),
          MIN(), and MAX().
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Basic Syntax</h2>
        <pre style={code}>
{`SELECT column_name, aggregate_function(column_name)
FROM table_name
GROUP BY column_name;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Sample Table</h2>
        <p style={paragraph}>Employees Table</p>

        <pre style={code}>
{`id    name       department    salary
1     Asmit      IT            30000
2     Rahul      HR            25000
3     Aryan      IT            35000
4     Priya      HR            28000
5     Rohan      Sales         32000`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>1. Basic GROUP BY</h2>
        <p style={paragraph}>
          Group employees according to their department.
        </p>

        <pre style={code}>
{`SELECT department
FROM Employees
GROUP BY department;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`department
IT
HR
Sales`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>2. GROUP BY with COUNT()</h2>
        <p style={paragraph}>
          COUNT() counts the number of employees in each department.
        </p>

        <pre style={code}>
{`SELECT department, COUNT(*) AS total_employees
FROM Employees
GROUP BY department;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`department    total_employees
IT            2
HR            2
Sales         1`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>3. GROUP BY with SUM()</h2>
        <p style={paragraph}>
          SUM() calculates the total salary of each department.
        </p>

        <pre style={code}>
{`SELECT department, SUM(salary) AS total_salary
FROM Employees
GROUP BY department;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`department    total_salary
IT            65000
HR            53000
Sales         32000`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>4. GROUP BY with AVG()</h2>
        <p style={paragraph}>
          AVG() calculates the average salary of each department.
        </p>

        <pre style={code}>
{`SELECT department, AVG(salary) AS average_salary
FROM Employees
GROUP BY department;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>5. GROUP BY with MIN() and MAX()</h2>
        <p style={paragraph}>
          MIN() returns the smallest value, while MAX()
          returns the largest value in each group.
        </p>

        <pre style={code}>
{`SELECT
    department,
    MIN(salary) AS lowest_salary,
    MAX(salary) AS highest_salary
FROM Employees
GROUP BY department;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>6. GROUP BY with Multiple Columns</h2>
        <p style={paragraph}>
          You can group records using more than one column.
        </p>

        <pre style={code}>
{`SELECT department, city, COUNT(*) AS total
FROM Employees
GROUP BY department, city;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>7. GROUP BY with WHERE</h2>
        <p style={paragraph}>
          WHERE filters individual rows before grouping.
        </p>

        <pre style={code}>
{`SELECT department, COUNT(*) AS total
FROM Employees
WHERE salary > 25000
GROUP BY department;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>8. GROUP BY with HAVING</h2>
        <p style={paragraph}>
          HAVING filters groups after GROUP BY.
          It is commonly used with aggregate functions.
        </p>

        <pre style={code}>
{`SELECT department, COUNT(*) AS total
FROM Employees
GROUP BY department
HAVING COUNT(*) > 1;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`department    total
IT            2
HR            2`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>WHERE vs HAVING</h2>

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
                <th style={{ padding: "12px", textAlign: "left" }}>WHERE</th>
                <th style={{ padding: "12px", textAlign: "left" }}>HAVING</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Filters rows
                </td>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Filters groups
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Used before GROUP BY
                </td>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Used after GROUP BY
                </td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Cannot normally filter aggregate results
                </td>
                <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                  Can filter aggregate results
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={section}>
        <h2 style={heading}>Important Points</h2>
        <ul style={{ ...paragraph, paddingLeft: "22px" }}>
          <li>GROUP BY groups rows with matching values.</li>
          <li>It is commonly used with aggregate functions.</li>
          <li>COUNT() counts records.</li>
          <li>SUM() calculates the total.</li>
          <li>AVG() calculates the average.</li>
          <li>MIN() and MAX() find the smallest and largest values.</li>
          <li>HAVING filters grouped results.</li>
          <li>WHERE filters rows before grouping.</li>
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
