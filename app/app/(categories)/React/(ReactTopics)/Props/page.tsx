import Sidebar from "@/app/components/page";

export default function Props() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Props</h1>

        <p>
          Props (short for <strong>Properties</strong>) are used to pass data
          from a parent component to a child component. They allow components
          to be reusable by displaying different data based on the values they
          receive.
        </p>

        <h2>Why Props?</h2>

        <p>
          Imagine creating a Profile Card component. Instead of making a
          separate component for every user, you can create one component and
          pass different names, ages, or profile pictures using props.
        </p>

        <h2>Basic Example</h2>

        <pre
          style={{
            background: "#111",
            padding: "18px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
{`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Asmit" />;
}`}
        </pre>

        <h2>Destructuring Props</h2>

        <p>
          Instead of writing <code>props.name</code> every time, you can
          destructure the props object.
        </p>

        <pre
          style={{
            background: "#111",
            padding: "18px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
{`function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}`}
        </pre>

        <h2>Passing Multiple Props</h2>

        <pre
          style={{
            background: "#111",
            padding: "18px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
{`function Profile({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

function App() {
  return (
    <Profile
      name="Asmit"
      age={13}
      city="Tehatta"
    />
  );
}`}
        </pre>

        <h2>Rules of Props</h2>

        <ul>
          <li>Props are read-only.</li>
          <li>Props are passed from parent to child.</li>
          <li>Props can contain any JavaScript value.</li>
          <li>Never modify props inside a component.</li>
        </ul>

        <h2>Common Prop Types</h2>

        <ul>
          <li>String</li>
          <li>Number</li>
          <li>Boolean</li>
          <li>Array</li>
          <li>Object</li>
          <li>Function</li>
          <li>JSX Elements</li>
        </ul>

        <h2>Advantages of Props</h2>

        <ul>
          <li>Make components reusable.</li>
          <li>Pass data between components.</li>
          <li>Keep code organized.</li>
          <li>Reduce duplication.</li>
          <li>Improve maintainability.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Use descriptive prop names.</li>
          <li>Destructure props when possible.</li>
          <li>Keep props simple and meaningful.</li>
          <li>Don't pass unnecessary props.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Trying to modify props directly.</li>
          <li>Passing too many props to one component.</li>
          <li>Using unclear prop names.</li>
          <li>Confusing props with state.</li>
        </ul>

        <h2>Props vs State</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <th style={{ border: "1px solid white", padding: "10px" }}>
                Props
              </th>
              <th style={{ border: "1px solid white", padding: "10px" }}>
                State
              </th>
            </tr>

            <tr>
              <td style={{ border: "1px solid white", padding: "10px" }}>
                Passed from parent
              </td>
              <td style={{ border: "1px solid white", padding: "10px" }}>
                Managed inside the component
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid white", padding: "10px" }}>
                Read-only
              </td>
              <td style={{ border: "1px solid white", padding: "10px" }}>
                Can be updated
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid white", padding: "10px" }}>
                Used for passing data
              </td>
              <td style={{ border: "1px solid white", padding: "10px" }}>
                Used for storing data
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Summary</h2>

        <p>
          Props are one of the most important concepts in React. They allow
          components to receive data from their parent, making applications
          reusable, organized, and easy to maintain. Understanding props is
          essential before learning state and React Hooks.
        </p>
      </div>
    </div>
  );
}