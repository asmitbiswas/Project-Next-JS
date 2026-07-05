import Sidebar from "@/app/components/page";

export default function JSX() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>JSX</h1>

        <p>
          JSX (JavaScript XML) is a syntax extension for JavaScript that allows
          you to write HTML-like code inside React. It makes creating user
          interfaces easier to read and understand.
        </p>

        <h2>Why JSX?</h2>

        <p>
          Without JSX, React elements must be created using
          <code>React.createElement()</code>, which becomes difficult to read as
          applications grow. JSX provides a cleaner and more familiar syntax.
        </p>

        <h2>JSX Example</h2>

        <pre
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
{`function App() {
  return (
    <h1>Hello, DevVault!</h1>
  );
}`}
        </pre>

        <h2>Rules of JSX</h2>

        <ul>
          <li>Return a single parent element.</li>
          <li>Close every tag properly.</li>
          <li>Use className instead of class.</li>
          <li>JavaScript expressions go inside {}.</li>
          <li>Attribute names use camelCase (onClick, tabIndex).</li>
        </ul>

        <h2>Embedding JavaScript</h2>

        <pre
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
{`const name = "Asmit";

function App() {
  return <h1>Hello, {name}</h1>;
}`}
        </pre>

        <h2>JSX vs HTML</h2>

        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <tbody>
            <tr>
              <th style={{ border: "1px solid white", padding: "10px" }}>HTML</th>
              <th style={{ border: "1px solid white", padding: "10px" }}>JSX</th>
            </tr>
            <tr>
              <td style={{ border: "1px solid white", padding: "10px" }}>class</td>
              <td style={{ border: "1px solid white", padding: "10px" }}>className</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid white", padding: "10px" }}>for</td>
              <td style={{ border: "1px solid white", padding: "10px" }}>htmlFor</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid white", padding: "10px" }}>onclick</td>
              <td style={{ border: "1px solid white", padding: "10px" }}>onClick</td>
            </tr>
          </tbody>
        </table>

        <h2>Advantages of JSX</h2>

        <ul>
          <li>Easy to read and write.</li>
          <li>Looks similar to HTML.</li>
          <li>Supports JavaScript expressions.</li>
          <li>Makes UI development faster.</li>
          <li>Helps React detect errors during compilation.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          JSX is one of React's most important features. It combines HTML-like
          syntax with JavaScript, making components easier to build and
          maintain. Although browsers don't understand JSX directly, React
          compiles it into regular JavaScript before rendering it.
        </p>
      </div>
    </div>
  );
}