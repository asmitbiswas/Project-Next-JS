
export default function SQLConstraints() {
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
        SQL CONSTRAINTS
      </h1>

      <p style={paragraph}>
        Learn how to enforce rules on database tables and maintain
        accurate, consistent, and reliable data using SQL constraints.
      </p>

      <div style={section}>
        <h2 style={heading}>What are Constraints?</h2>
        <p style={paragraph}>
          Constraints are rules applied to table columns or entire
          tables. They control what kind of data can be stored
          in a database.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Types of SQL Constraints</h2>
        <pre style={code}>
{`1. NOT NULL
2. UNIQUE
3. PRIMARY KEY
4. FOREIGN KEY
5. CHECK
6. DEFAULT`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>1. NOT NULL Constraint</h2>
        <p style={paragraph}>
          NOT NULL ensures that a column cannot contain NULL values.
          A value must be provided when inserting a row.
        </p>

        <pre style={code}>
{`CREATE TABLE Students (
    id INT,
    name VARCHAR(100) NOT NULL
);`}
        </pre>

        <p style={paragraph}>Example:</p>

        <pre style={code}>
{`INSERT INTO Students (id, name)
VALUES (1, 'Asmit');`}
        </pre>

        <p style={paragraph}>
          An INSERT that omits name or explicitly supplies NULL
          will fail.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>2. UNIQUE Constraint</h2>
        <p style={paragraph}>
          UNIQUE ensures that values in a column or combination
          of columns do not repeat.
        </p>

        <pre style={code}>
{`CREATE TABLE Users (
    id INT,
    email VARCHAR(150) UNIQUE
);`}
        </pre>

        <p style={paragraph}>
          Two users cannot have the same email value.
          NULL handling for UNIQUE constraints varies by database.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>3. PRIMARY KEY Constraint</h2>
        <p style={paragraph}>
          PRIMARY KEY uniquely identifies every row in a table.
          It combines uniqueness and NOT NULL.
        </p>

        <pre style={code}>
{`CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);`}
        </pre>

        <p style={paragraph}>
          Each student must have a unique, non-NULL ID.
          A table can have only one primary key constraint,
          which may contain multiple columns.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>4. FOREIGN KEY Constraint</h2>
        <p style={paragraph}>
          FOREIGN KEY creates a relationship between two tables.
          It ensures that referenced values exist in the parent table.
        </p>

        <pre style={code}>
{`CREATE TABLE Departments (
    id INT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES Departments(id)
);`}
        </pre>

        <p style={paragraph}>
          The department_id in Employees references the id
          column in Departments.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>5. CHECK Constraint</h2>
        <p style={paragraph}>
          CHECK ensures that values satisfy a specified condition.
        </p>

        <pre style={code}>
{`CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT CHECK (age >= 18)
);`}
        </pre>

        <p style={paragraph}>
          This constraint allows ages of 18 or above.
          Values that violate the condition are rejected.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>6. DEFAULT Constraint</h2>
        <p style={paragraph}>
          DEFAULT automatically supplies a value when an INSERT
          statement does not provide one for that column.
        </p>

        <pre style={code}>
{`CREATE TABLE Users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    country VARCHAR(50) DEFAULT 'India'
);`}
        </pre>

        <p style={paragraph}>Example:</p>

        <pre style={code}>
{`INSERT INTO Users (id, name)
VALUES (1, 'Asmit');`}
        </pre>

        <p style={paragraph}>
          The country column receives 'India'.
          Explicitly inserting NULL does not activate DEFAULT.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Adding Constraints to Existing Tables</h2>
        <p style={paragraph}>
          You can add constraints to an existing table using ALTER TABLE.
        </p>

        <pre style={code}>
{`ALTER TABLE Students
ADD CONSTRAINT unique_email
UNIQUE (email);`}
        </pre>

        <p style={paragraph}>Adding a CHECK constraint:</p>

        <pre style={code}>
{`ALTER TABLE Students
ADD CONSTRAINT check_age
CHECK (age >= 18);`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Removing Constraints</h2>
        <p style={paragraph}>
          You can remove a named constraint using ALTER TABLE.
        </p>

        <pre style={code}>
{`ALTER TABLE Students
DROP CONSTRAINT check_age;`}
        </pre>

        <p style={paragraph}>
          Syntax varies across database systems.
          For example, MySQL also supports DROP FOREIGN KEY
          for foreign key constraints.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Constraint Comparison</h2>

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
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Constraint
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["NOT NULL", "Prevents NULL values"],
                ["UNIQUE", "Prevents duplicate values"],
                ["PRIMARY KEY", "Uniquely identifies rows"],
                ["FOREIGN KEY", "Maintains relationships"],
                ["CHECK", "Validates a condition"],
                ["DEFAULT", "Provides a default value"],
              ].map(([name, purpose]) => (
                <tr key={name}>
                  <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                    {name}
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
          <li>Constraints maintain data integrity.</li>
          <li>NOT NULL prevents missing values.</li>
          <li>UNIQUE prevents duplicate values.</li>
          <li>PRIMARY KEY identifies each row.</li>
          <li>FOREIGN KEY connects related tables.</li>
          <li>CHECK validates data against a condition.</li>
          <li>DEFAULT provides automatic values when omitted.</li>
          <li>ALTER TABLE can add or remove constraints.</li>
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
