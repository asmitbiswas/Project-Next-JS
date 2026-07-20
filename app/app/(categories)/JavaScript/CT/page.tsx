// import Sidebar from "@/app/components/page";

export default function ConditionalStatements() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Conditional Statements</h1>

        <p>
          Conditional statements allow a program to make decisions based on
          whether a condition is true or false. They help control the flow
          of execution in a JavaScript program.
        </p>

        <h2>if Statement</h2>

        <p>
          The <code>if</code> statement executes a block of code only if
          the specified condition is true.
        </p>

        <pre
        style={{
          borderLeft:"6px solid rgb(13 200 13)",
          padding:"14px",
          background:"#111",
          borderRadius:"12px"
        }}
        >
{`let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}`}
        </pre>

        <h2>if...else Statement</h2>

        <p>
          Use <code>else</code> to execute a different block of code when
          the condition is false.
        </p>

        <pre
          style={{
          borderLeft:"6px solid rgb(13 200 13)",
          padding:"14px",
          background:"#111",
          borderRadius:"12px"
        }}
        >
{`let age = 16;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}`}
        </pre>

        <h2>if...else if...else Statement</h2>

        <p>
          Use <code>else if</code> when you need to check multiple
          conditions.
        </p>

        <pre
          style={{
          borderLeft:"6px solid rgb(13 200 13)",
          padding:"14px",
          background:"#111",
          borderRadius:"12px"
        }}
        >
{`let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}`}
        </pre>

        <h2>Nested if Statement</h2>

        <p>
          An <code>if</code> statement can be placed inside another
          <code>if</code> statement.
        </p>

        <pre
          style={{
          borderLeft:"6px solid rgb(13 200 13)",
          padding:"14px",
          background:"#111",
          borderRadius:"12px"
        }}
        >
{`let age = 20;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  }
}`}
        </pre>

        <h2>switch Statement</h2>

        <p>
          The <code>switch</code> statement is useful when comparing one
          value against multiple possible cases.
        </p>

        <pre
          style={{
          borderLeft:"6px solid rgb(13 200 13)",
          padding:"14px",
          background:"#111",
          borderRadius:"12px"
        }}
        >
{`let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid Day");
}`}
        </pre>

        <h2>Ternary Operator</h2>

        <p>
          The ternary operator is a shorthand way of writing an
          <code>if...else</code> statement.
        </p>

        <pre
          style={{
          borderLeft:"6px solid rgb(13 200 13)",
          padding:"14px",
          background:"#111",
          borderRadius:"12px"
        }}
        >
{`let age = 20;

let message = age >= 18
  ? "Adult"
  : "Minor";

console.log(message);`}
        </pre>

        <h2>Comparison Operators Used</h2>

        <table>
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>==</td>
              <td>Equal to</td>
            </tr>

            <tr>
              <td>===</td>
              <td>Strict equal to</td>
            </tr>

            <tr>
              <td>!=</td>
              <td>Not equal to</td>
            </tr>

            <tr>
              <td>!==</td>
              <td>Strict not equal to</td>
            </tr>

            <tr>
              <td>&gt;</td>
              <td>Greater than</td>
            </tr>

            <tr>
              <td>&lt;</td>
              <td>Less than</td>
            </tr>

            <tr>
              <td>&gt;=</td>
              <td>Greater than or equal to</td>
            </tr>

            <tr>
              <td>&lt;=</td>
              <td>Less than or equal to</td>
            </tr>
          </tbody>
        </table>

        <h2>Best Practices</h2>

        <ul>
          <li>Keep conditions simple and readable.</li>
          <li>Use <code>===</code> instead of <code>==</code>.</li>
          <li>Use <code>switch</code> when checking many fixed values.</li>
          <li>Avoid deeply nested <code>if</code> statements.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Conditional statements allow JavaScript programs to make
          decisions based on different conditions. They are essential for
          controlling the flow of a program and building interactive
          applications.
        </p>
      </div>
    </div>
  );
}