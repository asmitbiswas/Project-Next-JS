import Sidebar from "@/app/components/page";

export default function ConditionalRendering() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Conditional Rendering</h1>

        <p>
          Conditional rendering is the process of displaying different UI based
          on a condition. React uses normal JavaScript conditions to decide what
          should be rendered on the screen.
        </p>

        <h2>Why Conditional Rendering?</h2>

        <p>
          Most applications need to show different content depending on the
          user's actions or data. For example, displaying a login button when
          the user is logged out or showing a dashboard after they log in.
        </p>

        <h2>If Statement Example</h2>

        <pre
          style={{
            background: "#111",
            overflowX: "auto",
            borderRadius: "2px",
          }}
        >
          {`function Greeting({ isLoggedIn }) {

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  }

  return <h1>Please Log In</h1>;
}`}
        </pre>

        <h2>Ternary Operator</h2>

        <p>
          The ternary operator is the most commonly used way to render one of
          two elements.
        </p>

        <pre
          style={{
            background: "#111",
            overflowX: "auto",
            borderRadius: "2px",
          }}
        >
          {`function App() {

  const isLoggedIn = true;

  return (
    <h1>
      {isLoggedIn ? "Welcome!" : "Please Log In"}
    </h1>
  );
}`}
        </pre>

        <h2>Logical AND (&&)</h2>

        <p>
          Use the && operator when you only want to display something if the
          condition is true.
        </p>

        <pre
          style={{
            background: "#111",
            overflowX: "auto",
            borderRadius: "6px",
            padding: "18px",
          }}
        >
          {`function App() {

  const isAdmin = true;

  return (
    <>
      {isAdmin && <button>Delete User</button>}
    </>
  );
}`}
        </pre>

        <h2>Conditional Rendering Methods</h2>

        <table
          style={{
            border: "1px solid white",
            width: "100%",
            borderCollapse: "collapse",

          }}
        >
          <tbody>
            <tr
            style={{
              border:"1px solid white",
              padding: "10px"
            }}
            >
              <th
              style={{
                border:"1px solid white",
                padding:"5px"
              }}
              >Method</th>
              <th>Best Used For</th>
            </tr>

            <tr
                style={{
                border:"1px solid white",
                padding:"5px"
              }}>
              <td
                  style={{
                border:"1px solid white",
                padding:"5px"
              }}>if / else</td>
              <td>Multiple conditions or returning different components.</td>
              
            </tr>

            <tr
                style={{
                border:"1px solid white",
                padding:"5px"
              }}>
              <td
                  style={{
                border:"1px solid white",
                padding:"5px"
              }}>Ternary Operator (?)</td>
              <td>Choosing between two values.</td>
            </tr>

            <tr
                style={{
                border:"1px solid white",
                padding:"5px"
              }}>
              <td
                  style={{
                border:"1px solid white",
                padding:"5px"
              }}>Logical AND (&&)</td>
              <td>Showing an element only when the condition is true.</td>
            </tr>
          </tbody>
        </table>

        <h2>Real World Example</h2>

        <pre
          style={{
            background: "#111",
            overflowX: "auto",
            borderRadius: "2px",
          }}>
          {`function Profile({ user }) {

  return (
    <>
      {user ? (
        <h2>Welcome, {user.name}</h2>
      ) : (
        <button>Login</button>
      )}
    </>
  );
}`}
        </pre>

        <h2>Best Practices</h2>

        <ul>
          <li>Use if statements for complex logic.</li>
          <li>Use ternary operators for simple true/false conditions.</li>
          <li>Use && when you only need to display something if a condition is true.</li>
          <li>Avoid nesting multiple ternary operators.</li>
          <li>Keep conditions readable and easy to understand.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Writing overly complicated nested ternary operators.</li>
          <li>Using && when both true and false cases are needed.</li>
          <li>Putting too much business logic directly inside JSX.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Conditional rendering allows React applications to display different
          content depending on state, props, or user actions. It is one of the
          most frequently used techniques when building dynamic user interfaces.
        </p>
      </div>
    </div>
  );
}