import Sidebar from "@/app/components/page";

export default function Forms() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Forms</h1>

        <p>
          Forms are used to collect user input such as names, emails,
          passwords, feedback, and other information. In React, forms are
          usually controlled using state, allowing React to manage the input
          values.
        </p>

        <h2>Why Forms?</h2>

        <p>
          Forms allow users to interact with your application. They are used in
          login pages, registration forms, search bars, contact forms, and many
          other features.
        </p>

        <h2>Basic Input Example</h2>

        <pre>
{`import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name}</h2>
    </>
  );
}`}
        </pre>

        <h2>Handling Form Submission</h2>

        <pre>
{`import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(email);
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">
        Submit
      </button>

    </form>
  );
}`}
        </pre>

        <h2>Controlled Components</h2>

        <p>
          A controlled component is an input whose value is managed by React
          state. This is the recommended approach because React always knows the
          current value of the input.
        </p>

        <h2>Controlled vs Uncontrolled</h2>

        <table>
          <tbody>
            <tr>
              <th>Controlled</th>
              <th>Uncontrolled</th>
            </tr>

            <tr>
              <td>Managed by React State</td>
              <td>Managed by the DOM</td>
            </tr>

            <tr>
              <td>Uses useState()</td>
              <td>Uses useRef()</td>
            </tr>

            <tr>
              <td>Easy Validation</td>
              <td>Less Control</td>
            </tr>

            <tr>
              <td>Recommended</td>
              <td>Used in specific cases</td>
            </tr>
          </tbody>
        </table>

        <h2>Common Input Types</h2>

        <ul>
          <li>Text</li>
          <li>Email</li>
          <li>Password</li>
          <li>Number</li>
          <li>Checkbox</li>
          <li>Radio</li>
          <li>Date</li>
          <li>File</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Use controlled components whenever possible.</li>
          <li>Always prevent the default form submission.</li>
          <li>Validate user input before submitting.</li>
          <li>Give meaningful names to input fields.</li>
          <li>Keep forms simple and organized.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Forgetting event.preventDefault().</li>
          <li>Not updating state with onChange.</li>
          <li>Leaving input values uncontrolled accidentally.</li>
          <li>Not validating user input.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Forms are essential for collecting user input in React applications.
          By using controlled components and state, you can build interactive,
          reliable, and easy-to-manage forms.
        </p>
      </div>
    </div>
  );
}