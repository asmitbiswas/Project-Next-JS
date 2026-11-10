
export default function SQLJoins() {
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
        SQL JOINS
      </h1>

      <p style={paragraph}>
        Learn how to combine data from multiple tables using SQL JOIN statements.
      </p>

      <div style={section}>
        <h2 style={heading}>What are JOINS?</h2>
        <p style={paragraph}>
          SQL JOINs are used to combine rows from two or more tables
          based on a related column between them.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Sample Tables</h2>
        <p style={paragraph}>Students Table</p>

        <pre style={code}>
{`id    name
1     Asmit
2     Rahul
3     Aryan
4     Priya`}
        </pre>

        <p style={paragraph}>Marks Table</p>

        <pre style={code}>
{`student_id    marks
1             95
2             87
4             92
5             78`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>1. INNER JOIN</h2>
        <p style={paragraph}>
          INNER JOIN returns only the rows that have matching
          values in both tables.
        </p>

        <pre style={code}>
{`SELECT Students.name, Marks.marks
FROM Students
INNER JOIN Marks
ON Students.id = Marks.student_id;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`name      marks
Asmit     95
Rahul     87
Priya     92`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>2. LEFT JOIN</h2>
        <p style={paragraph}>
          LEFT JOIN returns all records from the left table
          and matching records from the right table.
          If there is no match, NULL is returned.
        </p>

        <pre style={code}>
{`SELECT Students.name, Marks.marks
FROM Students
LEFT JOIN Marks
ON Students.id = Marks.student_id;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`name      marks
Asmit     95
Rahul     87
Aryan     NULL
Priya     92`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>3. RIGHT JOIN</h2>
        <p style={paragraph}>
          RIGHT JOIN returns all records from the right table
          and matching records from the left table.
        </p>

        <pre style={code}>
{`SELECT Students.name, Marks.marks
FROM Students
RIGHT JOIN Marks
ON Students.id = Marks.student_id;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`name      marks
Asmit     95
Rahul     87
Priya     92
NULL      78`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>4. FULL OUTER JOIN</h2>
        <p style={paragraph}>
          FULL OUTER JOIN returns all records from both tables.
          Matching records are combined, and unmatched columns
          contain NULL.
        </p>

        <pre style={code}>
{`SELECT Students.name, Marks.marks
FROM Students
FULL OUTER JOIN Marks
ON Students.id = Marks.student_id;`}
        </pre>

        <p style={paragraph}>Result:</p>

        <pre style={code}>
{`name      marks
Asmit     95
Rahul     87
Aryan     NULL
Priya     92
NULL      78`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>5. CROSS JOIN</h2>
        <p style={paragraph}>
          CROSS JOIN returns every possible combination
          of rows from both tables.
        </p>

        <pre style={code}>
{`SELECT Students.name, Marks.marks
FROM Students
CROSS JOIN Marks;`}
        </pre>

        <p style={paragraph}>
          With 4 students and 4 marks records, the result
          contains 16 combinations.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>6. SELF JOIN</h2>
        <p style={paragraph}>
          SELF JOIN joins a table with itself. It is useful
          for comparing related records in the same table.
        </p>

        <pre style={code}>
{`SELECT A.name AS Student1,
       B.name AS Student2
FROM Students A
JOIN Students B
ON A.id < B.id;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>JOIN Comparison</h2>

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
                <th style={{ padding: "12px", textAlign: "left" }}>JOIN</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["INNER JOIN", "Only matching rows"],
                ["LEFT JOIN", "All left + matching right"],
                ["RIGHT JOIN", "All right + matching left"],
                ["FULL OUTER JOIN", "All rows from both tables"],
                ["CROSS JOIN", "Every possible combination"],
                ["SELF JOIN", "Table joined with itself"],
              ].map(([join, purpose]) => (
                <tr key={join}>
                  <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                    {join}
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
          <li>JOIN combines data from multiple tables.</li>
          <li>INNER JOIN returns matching records.</li>
          <li>LEFT JOIN keeps all rows from the left table.</li>
          <li>RIGHT JOIN keeps all rows from the right table.</li>
          <li>FULL OUTER JOIN keeps rows from both tables.</li>
          <li>SELF JOIN joins a table with itself.</li>
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
