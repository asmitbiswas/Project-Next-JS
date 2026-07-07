import Sidebar from "@/app/components/page";

export default function ContextAPI() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Context API</h1>

        <p>
          The Context API is a built-in React feature used to share data between
          multiple components without passing props manually through every level
          of the component tree.
        </p>

        <h2>Why Context API?</h2>

        <p>
          When data needs to be shared by many components, passing props through
          several intermediate components becomes difficult. This is called
          "prop drilling." Context API solves this problem.
        </p>

        <h2>Creating a Context</h2>

        <pre>
{`import { createContext } from "react";

const UserContext = createContext();`}
        </pre>

        <h2>Providing Context</h2>

        <pre>
{`<UserContext.Provider value="Asmit">
  <App />
</UserContext.Provider>`}
        </pre>

        <h2>Consuming Context</h2>

        <pre>
{`import { useContext } from "react";

function Profile() {
  const user = useContext(UserContext);

  return <h2>{user}</h2>;
}`}
        </pre>

        <h2>How Context Works</h2>

        <table>
          <tbody>
            <tr>
              <th>Step</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>Create Context</td>
              <td>Use createContext().</td>
            </tr>

            <tr>
              <td>Provide Value</td>
              <td>Wrap components with Provider.</td>
            </tr>

            <tr>
              <td>Consume Value</td>
              <td>Access data using useContext().</td>
            </tr>
          </tbody>
        </table>

        <h2>Advantages</h2>

        <ul>
          <li>Eliminates prop drilling.</li>
          <li>Easy global state sharing.</li>
          <li>Built into React.</li>
          <li>Works well for themes, authentication, and language settings.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Using Context for every state.</li>
          <li>Forgetting to wrap components with Provider.</li>
          <li>Using useContext() outside a Provider.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Context API allows components to share data without passing props
          through multiple levels. It is ideal for global data like themes,
          authentication, and user information.
        </p>

      </div>
    </div>
  );
}