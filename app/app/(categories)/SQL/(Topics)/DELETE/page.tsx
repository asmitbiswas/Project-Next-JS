
export default function SQLDelete() {
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

  const section = {
    marginTop: "35px",
  };

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
        SQL DELETE
      </h1>

      <p style={paragraph}>
        Learn how to delete existing records from a database table
        using the SQL DELETE statement.
      </p>

      <div style={section}>
        <h2 style={heading}>What is DELETE?</h2>
        <p style={paragraph}>
          The DELETE statement is used to remove existing rows
          from a table in a database.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Basic Syntax</h2>
        <p style={paragraph}>
          The basic syntax of the DELETE statement:
        </p>

        <pre style={code}>
{`DELETE FROM table_name
WHERE condition;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Example: Delete a Record</h2>
        <p style={paragraph}>
          Suppose we have a table named Students. We want to
          delete the student whose ID is 3.
        </p>

        <pre style={code}>
{`DELETE FROM Students
WHERE id = 3;`}
        </pre>

        <p style={paragraph}>
          This query deletes only the row where the ID is 3.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Delete Multiple Records</h2>
        <p style={paragraph}>
          You can delete multiple rows by using conditions.
        </p>

        <pre style={code}>
{`DELETE FROM Students
WHERE age < 18;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Delete All Records</h2>
        <p style={paragraph}>
          You can delete every row from a table by omitting
          the WHERE clause.
        </p>

        <pre style={code}>
{`DELETE FROM Students;`}
        </pre>

        <div
          style={{
            backgroundColor: "#241a0a",
            border: "1px solid #a87921",
            borderRadius: "10px",
            padding: "15px",
            color: "#ffc857",
            fontSize: "14px",
            lineHeight: "1.7",
          }}
        >
          ⚠ WARNING: Without WHERE, DELETE removes ALL rows
          from the table. Always double-check your query.
        </div>
      </div>

      <div style={section}>
        <h2 style={heading}>DELETE vs TRUNCATE</h2>

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
                <th style={{ padding: "12px", textAlign: "left" }}>DELETE</th>
                <th style={{ padding: "12px", textAlign: "left" }}>TRUNCATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px" }}>Can use WHERE</td>
                <td style={{ padding: "12px" }}>Cannot use WHERE</td>
              </tr>
              <tr>
                <td style={{ padding: "12px" }}>Removes selected rows</td>
                <td style={{ padding: "12px" }}>Removes all rows</td>
              </tr>
              <tr>
                <td style={{ padding: "12px" }}>DML statement</td>
                <td style={{ padding: "12px" }}>DDL statement in many SQL systems</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={section}>
        <h2 style={heading}>Key Points</h2>
        <ul style={{ ...paragraph, paddingLeft: "22px" }}>
          <li>DELETE removes records from a table.</li>
          <li>WHERE specifies which records to delete.</li>
          <li>Without WHERE, all rows are deleted.</li>
          <li>The table structure remains unchanged.</li>
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
