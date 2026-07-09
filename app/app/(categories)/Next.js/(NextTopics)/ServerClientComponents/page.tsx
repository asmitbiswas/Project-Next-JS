import Sidebar from "@/app/components/page";

export default function ServerClientComponents() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Server & Client Components</h1>

        <p>
          In the Next.js App Router, components are Server Components by
          default. If a component needs browser features like state, effects,
          or event handlers, it must be converted into a Client Component.
        </p>

        <h2>Server Components</h2>

        <p>
          Server Components are rendered on the server before being sent to the
          browser. They improve performance by reducing the amount of JavaScript
          sent to the client.
        </p>

        <h3>Example</h3>

        <pre>
{`export default function Home() {
  return <h1>Welcome to DevVault</h1>;
}`}
        </pre>

        <h2>Client Components</h2>

        <p>
          Client Components run in the browser. They are required when using
          React hooks, event handlers, or browser APIs.
        </p>

        <h3>Example</h3>

        <pre>
{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`}
        </pre>

        <h2>Differences</h2>

        <table>
          <tbody>
            <tr>
              <th>Server Component</th>
              <th>Client Component</th>
            </tr>

            <tr>
              <td>Runs on the server.</td>
              <td>Runs in the browser.</td>
            </tr>

            <tr>
              <td>No "use client".</td>
              <td>Requires "use client".</td>
            </tr>

            <tr>
              <td>Can fetch data directly.</td>
              <td>Uses browser APIs.</td>
            </tr>

            <tr>
              <td>Smaller JavaScript bundle.</td>
              <td>Larger JavaScript bundle.</td>
            </tr>

            <tr>
              <td>No useState or useEffect.</td>
              <td>Supports React hooks.</td>
            </tr>
          </tbody>
        </table>

        <h2>When to Use Each</h2>

        <ul>
          <li>Use Server Components for static content and data fetching.</li>
          <li>Use Client Components for forms, buttons, and user interaction.</li>
          <li>Keep Client Components as small as possible.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Server Components improve performance by rendering on the server,
          while Client Components enable interactivity in the browser. Choosing
          the right type helps build faster and more efficient applications.
        </p>
      </div>
    </div>
  );
}