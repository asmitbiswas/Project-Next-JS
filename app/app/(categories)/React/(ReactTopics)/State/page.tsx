import Sidebar from "@/app/components/page";

export default function State() {
    return (
        <div>
            <Sidebar />

            <div>
                <h1>State</h1>

                <p>
                    State is a built-in React object used to store data that can change
                    over time. Whenever the state changes, React automatically updates
                    the user interface to reflect the new data.
                </p>

                <h2>Why State?</h2>

                <p>
                    State allows components to become interactive. It is commonly used
                    for counters, forms, toggles, user input, and other dynamic data
                    that changes while the application is running.
                </p>

                <h2>Example Using useState</h2>

                <pre
                    style={{
                        background: "#111",
                        padding: "18px",
                        borderRadius: "8px",
                        overflowX: "auto",
                    }}>
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

                <h2>How State Works</h2>

                <ol>
                    <li>Create a state variable using <code>useState()</code>.</li>
                    <li>Display the state in the UI.</li>
                    <li>Update the state using its setter function.</li>
                    <li>React automatically re-renders the component.</li>
                </ol>

                <h2>Syntax</h2>

                <pre>
                    {`const [state, setState] = useState(initialValue);`}
                </pre>

                <h2>Explanation</h2>

                <ul>
                    <li><strong>state</strong> → Current value.</li>
                    <li><strong>setState</strong> → Updates the value.</li>
                    <li><strong>initialValue</strong> → Starting value of the state.</li>
                </ul>

                <h2>Rules of State</h2>

                <ul>
                    <li>Never modify state directly.</li>
                    <li>Always use the setter function.</li>
                    <li>State updates trigger a re-render.</li>
                    <li>Each component manages its own state.</li>
                </ul>

                <h2>Common Uses</h2>

                <ul>
                    <li>Counters</li>
                    <li>Form inputs</li>
                    <li>Dark/Light mode</li>
                    <li>Show/Hide elements</li>
                    <li>Shopping carts</li>
                    <li>To-do lists</li>
                </ul>

                <h2>State vs Props</h2>

                <table
                    style={{
                        border: "1px solid white",
                        width: "100%",
                        borderCollapse: "collapse",

                    }}>
                    <tbody>
                        <tr
                            style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}
                        >
                            <th style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>State</th>
                            <th style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>Props</th>
                        </tr>

                        <tr
                            style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>
                            <td style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>Managed inside the component</td>
                            <td>Passed from parent component</td>
                        </tr>

                        <tr
                            style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>
                            <td style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>Can change</td>
                            <td>Read-only</td>
                        </tr>

                        <tr
                            style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>
                            <td style={{
                                border: "1px solid white",
                                padding: "10px"
                            }}>Updated with a setter function</td>
                            <td>Cannot be modified by the child</td>
                        </tr>

                        <tr
                        style={{
                                                        

                                

                        }}
                        >
                            <td style={{
                                border: "1px solid white",
                                padding: "10px",
                                marginLeft: "10px"
                            }}>Used for dynamic data</td>
                            <td>Used to pass data</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Best Practices</h2>

                <ul>
                    <li>Keep state as simple as possible.</li>
                    <li>Store only the data that changes.</li>
                    <li>Use meaningful state variable names.</li>
                    <li>Avoid unnecessary state.</li>
                </ul>

                <h2>Common Mistakes</h2>

                <ul>
                    <li>Changing state directly.</li>
                    <li>Forgetting to use the setter function.</li>
                    <li>Creating too many state variables.</li>
                    <li>Using state when props are enough.</li>
                </ul>

                <h2>Summary</h2>

                <p>
                    State is one of the most important concepts in React. It allows
                    components to store and update data dynamically. By using state,
                    React applications become interactive and respond to user actions
                    automatically.
                </p>
            </div>
        </div>
    );
}