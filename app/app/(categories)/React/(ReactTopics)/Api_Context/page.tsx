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

        <pre
        style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px"
        }}
        >
{`import { createContext } from "react";

const UserContext = createContext();`}
        </pre>

        <h2>Providing Context</h2>

        <pre
              style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px"
        }}
        >
{`<UserContext.Provider value="Asmit">
  <App />
</UserContext.Provider>`}
        </pre>

        <h2>Consuming Context</h2>

        <pre
              style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px"
        }}
        >
{`import { useContext } from "react";

function Profile() {
  const user = useContext(UserContext);

  return <h2>{user}</h2>;
}`}
        </pre>

        <h2>How Context Works</h2>

        <table
        style={{
            borderCollapse:"collapse",
            width:"100%",
            border:"1px solid white",
            margin:"25px 0"
        }}
        >
          <tbody>
            <tr>
              <th
                  style={{
                border:"1px solid white",
                padding:"10px",
                textAlign:"left"
            }}
              >Step</th>
              <th
                  style={{
                border:"1px solid white",
                padding:"10px",
                textAlign:"left"
            }}
              >Description</th>
            </tr>

            <tr
         
            >
              <td
                  style={{
                border:"1px solid white",
                padding:"10px"
            }}
              >Create Context</td>
              <td
                     style={{
                border:"1px solid white",
                padding:"10px",
                textAlign:"left"
            }}
              >Use createContext().</td>
            </tr>

            <tr>
              <td
                     style={{
                border:"1px solid white",
                padding:"10px",
                textAlign:"left"
            }}
              >Provide Value</td>
              <td
                     style={{
                border:"1px solid white",
                padding:"10px",
                textAlign:"left"
            }}
              >Wrap components with Provider.</td>
            </tr>

            <tr>
              <td
                     style={{
                border:"1px solid white",
                padding:"10px",
                textAlign:"left"
            }}
              >Consume Value</td>
              <td
                     style={{
                border:"1px solid white",
                padding:"10px",
                textAlign:"left"
            }}
              >Access data using useContext().</td>
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