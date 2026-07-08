import Sidebar from "@/app/components/page";

export default function AppRouter() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>App Router</h1>

        <p>
          The App Router is the modern routing system introduced in Next.js 13.
          It uses the <code>app</code> directory to create routes, layouts,
          loading UI, error pages, and server components using a simple
          file-based routing system.
        </p>

        <h2>Why App Router?</h2>

        <p>
          The App Router provides a more powerful and flexible way to build
          applications. It supports nested layouts, server components, streaming,
          loading states, and many other modern features out of the box.
        </p>

        <h2>Basic Structure</h2>

        <pre>
{`app/
│
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── dashboard/
    └── page.tsx`}
        </pre>

        <h2>How Routing Works</h2>

        <table>
          <tbody>
            <tr>
              <th>Folder</th>
              <th>Generated Route</th>
            </tr>

            <tr>
              <td>app/page.tsx</td>
              <td>/</td>
            </tr>

            <tr>
              <td>app/about/page.tsx</td>
              <td>/about</td>
            </tr>

            <tr>
              <td>app/contact/page.tsx</td>
              <td>/contact</td>
            </tr>

            <tr>
              <td>app/dashboard/page.tsx</td>
              <td>/dashboard</td>
            </tr>
          </tbody>
        </table>

        <h2>Important Files</h2>

        <table>
          <tbody>
            <tr>
              <th>File</th>
              <th>Purpose</th>
            </tr>

            <tr>
              <td>page.tsx</td>
              <td>Creates a page for a route.</td>
            </tr>

            <tr>
              <td>layout.tsx</td>
              <td>Shared UI across multiple pages.</td>
            </tr>

            <tr>
              <td>loading.tsx</td>
              <td>Displays a loading UI while content loads.</td>
            </tr>

            <tr>
              <td>error.tsx</td>
              <td>Displays an error UI if something fails.</td>
            </tr>

            <tr>
              <td>not-found.tsx</td>
              <td>Custom 404 page.</td>
            </tr>

            <tr>
              <td>template.tsx</td>
              <td>Creates a new instance of a layout on navigation.</td>
            </tr>
          </tbody>
        </table>

        <h2>Example Route</h2>

        <pre>
{`app/
└── profile/
    └── page.tsx`}
        </pre>

        <p>
          This folder structure automatically creates the following route:
        </p>

        <pre>
{`http://localhost:3000/profile`}
        </pre>

        <h2>Advantages of App Router</h2>

        <ul>
          <li>Simple file-based routing.</li>
          <li>Nested layouts.</li>
          <li>Server Components by default.</li>
          <li>Built-in loading and error handling.</li>
          <li>Better performance.</li>
          <li>Improved developer experience.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Keep related routes in their own folders.</li>
          <li>Use layouts to avoid repeating UI.</li>
          <li>Create loading.tsx for better user experience.</li>
          <li>Use route groups to organize large applications.</li>
          <li>Keep the app folder clean and well-structured.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          The App Router is the recommended routing system in modern Next.js.
          It simplifies routing while providing powerful features like nested
          layouts, server components, loading states, and error handling. It is
          the foundation of every new Next.js application.
        </p>
      </div>
    </div>
  );
}