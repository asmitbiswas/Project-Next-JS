
export default function SQLTransactions() {
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
        SQL TRANSACTIONS
      </h1>

      <p style={paragraph}>
        Learn how to manage database operations safely using
        transactions, COMMIT, ROLLBACK, and SAVEPOINT.
      </p>

      <div style={section}>
        <h2 style={heading}>What are SQL Transactions?</h2>
        <p style={paragraph}>
          A transaction is a group of SQL operations treated as
          one logical unit of work. Transactions help maintain
          database consistency when multiple operations are performed.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>Why Use Transactions?</h2>
        <p style={paragraph}>
          Imagine transferring money between two bank accounts.
          Money should be deducted from one account and added
          to another. Both operations should succeed together.
        </p>

        <pre style={code}>
{`Account A: -500
Account B: +500

Both operations must succeed
or the transaction should be rolled back.`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>ACID Properties</h2>
        <p style={paragraph}>
          SQL transactions follow four important principles
          known as ACID.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>1. Atomicity</h3>
        <p style={paragraph}>
          All operations in a transaction succeed together,
          or none of them are applied.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>2. Consistency</h3>
        <p style={paragraph}>
          A transaction keeps the database in a valid state
          by following defined rules and constraints.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>3. Isolation</h3>
        <p style={paragraph}>
          Concurrent transactions should not interfere with
          each other in ways that violate the chosen isolation level.
        </p>

        <h3 style={{ color: "rgb(13 200 13)" }}>4. Durability</h3>
        <p style={paragraph}>
          Once a transaction is committed, its changes are
          designed to persist even after a system failure.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>1. BEGIN / START TRANSACTION</h2>
        <p style={paragraph}>
          Starts a new transaction. The exact syntax depends
          on the database system.
        </p>

        <pre style={code}>
{`BEGIN;

-- Your SQL operations go here`}
        </pre>

        <p style={paragraph}>
          MySQL also supports START TRANSACTION.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>2. COMMIT</h2>
        <p style={paragraph}>
          COMMIT permanently saves the changes made by
          the current transaction.
        </p>

        <pre style={code}>
{`BEGIN;

UPDATE Accounts
SET balance = balance - 500
WHERE id = 1;

UPDATE Accounts
SET balance = balance + 500
WHERE id = 2;

COMMIT;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>3. ROLLBACK</h2>
        <p style={paragraph}>
          ROLLBACK cancels the changes made by the current
          uncommitted transaction.
        </p>

        <pre style={code}>
{`BEGIN;

UPDATE Accounts
SET balance = balance - 500
WHERE id = 1;

ROLLBACK;`}
        </pre>

        <p style={paragraph}>
          The uncommitted update is cancelled.
        </p>
      </div>

      <div style={section}>
        <h2 style={heading}>4. SAVEPOINT</h2>
        <p style={paragraph}>
          SAVEPOINT creates a point inside a transaction
          that you can roll back to without cancelling
          the entire transaction.
        </p>

        <pre style={code}>
{`BEGIN;

UPDATE Accounts
SET balance = balance - 500
WHERE id = 1;

SAVEPOINT first_step;

UPDATE Accounts
SET balance = balance + 500
WHERE id = 2;

ROLLBACK TO SAVEPOINT first_step;

COMMIT;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>5. RELEASE SAVEPOINT</h2>
        <p style={paragraph}>
          RELEASE SAVEPOINT removes a previously created
          savepoint from the current transaction.
        </p>

        <pre style={code}>
{`BEGIN;

SAVEPOINT my_point;

UPDATE Accounts
SET balance = 1000
WHERE id = 1;

RELEASE SAVEPOINT my_point;

COMMIT;`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Transaction Workflow</h2>

        <pre style={code}>
{`BEGIN
  |
  v
Execute SQL statements
  |
  v
Are operations successful?
  |
  +---- YES ----> COMMIT
  |
  +---- NO -----> ROLLBACK`}
        </pre>
      </div>

      <div style={section}>
        <h2 style={heading}>Transaction Commands</h2>

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
                  Command
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["BEGIN", "Starts a transaction"],
                ["COMMIT", "Saves transaction changes"],
                ["ROLLBACK", "Cancels uncommitted changes"],
                ["SAVEPOINT", "Creates a rollback point"],
                ["RELEASE SAVEPOINT", "Removes a savepoint"],
              ].map(([command, purpose]) => (
                <tr key={command}>
                  <td style={{ padding: "12px", borderTop: "1px solid #222" }}>
                    {command}
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
          <li>Transactions group multiple SQL operations.</li>
          <li>ACID represents four transaction properties.</li>
          <li>COMMIT saves transaction changes.</li>
          <li>ROLLBACK cancels uncommitted changes.</li>
          <li>SAVEPOINT creates a rollback point.</li>
          <li>Transactions help maintain data integrity.</li>
          <li>Transaction behavior can vary by database engine.</li>
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
