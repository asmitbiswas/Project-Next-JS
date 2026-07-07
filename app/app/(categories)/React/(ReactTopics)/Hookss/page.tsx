import Sidebar from "@/app/components/page";

export default function ReactHooks() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>React Hooks</h1>

        <p>
          React Hooks are special functions that allow functional components to
          use React features such as state, lifecycle methods, and context
          without writing class components. Hooks were introduced in React 16.8
          to make code simpler and more reusable.
        </p>

        <h2>Why Hooks?</h2>

        <p>
          Before Hooks, developers had to use class components to manage state
          and lifecycle methods. Hooks allow functional components to perform
          the same tasks with cleaner and easier-to-read code.
        </p>

        <h2>Basic Example</h2>

        <pre>
{`import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}`}
        </pre>

        <h2>Common React Hooks</h2>

        <table>
          <tbody>
            <tr>
              <th>Hook</th>
              <th>Purpose</th>
            </tr>

            <tr>
              <td>useState</td>
              <td>Stores and updates component state.</td>
            </tr>

            <tr>
              <td>useEffect</td>
              <td>Performs side effects like fetching data.</td>
            </tr>

            <tr>
              <td>useContext</td>
              <td>Accesses values from Context.</td>
            </tr>

            <tr>
              <td>useRef</td>
              <td>Accesses DOM elements and stores mutable values.</td>
            </tr>

            <tr>
              <td>useMemo</td>
              <td>Optimizes expensive calculations.</td>
            </tr>

            <tr>
              <td>useCallback</td>
              <td>Memoizes functions for better performance.</td>
            </tr>

            <tr>
              <td>useReducer</td>
              <td>Manages complex state logic.</td>
            </tr>
          </tbody>
        </table>

        <h2>Rules of Hooks</h2>

        <ul>
          <li>Only call Hooks at the top level.</li>
          <li>Never call Hooks inside loops or conditions.</li>
          <li>Only call Hooks inside React function components.</li>
          <li>Custom Hooks must start with the word <code>use</code>.</li>
        </ul>

        <h2>Benefits of Hooks</h2>

        <ul>
          <li>Cleaner code.</li>
          <li>Less boilerplate.</li>
          <li>No need for class components.</li>
          <li>Reusable logic through custom Hooks.</li>
          <li>Better readability and maintenance.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Calling Hooks inside if statements.</li>
          <li>Using Hooks outside React components.</li>
          <li>Forgetting to import the required Hook.</li>
          <li>Overusing Hooks when simpler solutions exist.</li>
        </ul>

        <h2>When to Use Hooks</h2>

        <ul>
          <li>Managing state.</li>
          <li>Fetching data from APIs.</li>
          <li>Handling side effects.</li>
          <li>Sharing state between components.</li>
          <li>Improving performance.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          React Hooks are one of the most powerful features in modern React.
          They make functional components capable of managing state, performing
          side effects, and sharing logic. Learning Hooks is essential for
          building modern React applications.
        </p>
      </div>
    </div>
  );
}