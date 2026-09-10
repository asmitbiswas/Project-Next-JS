import { code } from "motion/react-client";

export default function GoVariablesTypes() {
  const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100px",
        lineHeight: "1.8",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Variables & Types
      </h1>

      <p
        style={{
          color: "#aaa",
          fontSize: "17px",
          marginBottom: "40px",
        }}
      >
        Learn how Go stores data using variables and different data types.
      </p>

      <h2>Variables</h2>

      <p style={{ color: "#bbb" }}>
        A variable is a named place in memory used to store a value. In Go,
        variables can be declared using the <code>var</code> keyword.
      </p>

      <pre style={codeStyle}>
{`var name string = "DevVault"
var age int = 13`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Short Declaration</h2>

      <p style={{ color: "#bbb" }}>
        Inside a function, you can use <code>:=</code> to declare and
        initialize a variable at the same time.
      </p>

      <pre style={codeStyle}>
{`name := "DevVault"
age := 13`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Basic Types</h2>

      <p style={{ color: "#bbb" }}>
        Go provides several built-in types for storing different kinds of
        values.
      </p>

      <ul style={{ color: "#bbb" }}>
        <li><code>string</code> — text</li>
        <li><code>int</code> — whole numbers</li>
        <li><code>float64</code> — decimal numbers</li>
        <li><code>bool</code> — true or false</li>
        <li><code>byte</code> — an alias for uint8</li>
        <li><code>rune</code> — an alias for int32</li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>Examples</h2>

      <pre style={codeStyle}>
{`var name string = "Asmit"
var age int = 13
var price float64 = 99.99
var online bool = true`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Constants</h2>

      <p style={{ color: "#bbb" }}>
        Constants are values that cannot be changed after they are
        declared. Use the <code>const</code> keyword.
      </p>

      <pre style={codeStyle}>
{`const language = "Go"
const version = 1`}
      </pre>
    </div>
  );
}

