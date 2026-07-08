// import Sidebar from "@/app/components/page";

export default function PagesLayouts() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Pages & Layouts</h1>

        <p>
          In the Next.js App Router, every route is created using a
          <code>page.tsx</code> file, while shared UI is created using a
          <code>layout.tsx</code> file. Together, they form the structure of
          every Next.js application.
        </p>

        <h2>What is a Page?</h2>

        <p>
          A page represents a route in your application. Every folder that
          contains a <code>page.tsx</code> file automatically becomes a route.
        </p>

        <h2>Example</h2>

        <pre
        style={{
          overflowX:"auto",
          padding:"18px",
          background:"#111",
          borderLeft:"7px solid rgb(13, 200, 13)",
          borderRadius:"12px"
        }}
        >
{`app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx`}
        </pre>

        <p>This creates the following routes:</p>

        <table>
          <tbody>
            <tr>
              <th>File</th>
              <th>Route</th>
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
          </tbody>
        </table>

        <h2>Example Page</h2>

        <pre
          style={{
          overflowX:"auto",
          padding:"18px",
          background:"#111",
          borderLeft:"7px solid rgb(13, 200, 13)",
          borderRadius:"12px"
        }}
        >
{`export default function Home() {
  return (
    <h1>Welcome to DevVault</h1>
  );
}`}
        </pre>

        <h2>What is a Layout?</h2>

        <p>
          A layout is a component that wraps one or more pages. Layouts are
          shared between routes, making them perfect for sidebars, navigation
          bars, footers, and other common UI elements.
        </p>

        <h2>Example Layout</h2>

        <pre
          style={{
          overflowX:"auto",
          padding:"18px",
          background:"#111",
          borderLeft:"7px solid rgb(13, 200, 13)",
          borderRadius:"12px"
        }}
        >
{`export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}`}
        </pre>

        <h2>How Layouts Work</h2>

        <pre
          style={{
          overflowX:"auto",
          padding:"18px",
          background:"#111",
          borderLeft:"7px solid rgb(13, 200, 13)",
          borderRadius:"12px"
        }}
        >
{`app/
├── layout.tsx
├── page.tsx
└── dashboard/
    ├── layout.tsx
    └── page.tsx`}
        </pre>

        <p>
          In this example:
        </p>

        <ul>
          <li>The root layout wraps the entire application.</li>
          <li>The dashboard layout only wraps the dashboard pages.</li>
        </ul>

        <h2>Pages vs Layouts</h2>

        <table>
          <tbody>
            <tr>
              <th>Page</th>
              <th>Layout</th>
            </tr>

            <tr>
              <td>Creates a route.</td>
              <td>Wraps multiple pages.</td>
            </tr>

            <tr>
              <td>Unique for each route.</td>
              <td>Shared between routes.</td>
            </tr>

            <tr>
              <td>Displays page content.</td>
              <td>Displays common UI.</td>
            </tr>

            <tr>
              <td>Uses page.tsx.</td>
              <td>Uses layout.tsx.</td>
            </tr>
          </tbody>
        </table>

        <h2>Advantages</h2>

        <ul>
          <li>Less duplicate code.</li>
          <li>Reusable layouts.</li>
          <li>Cleaner project structure.</li>
          <li>Easy nested layouts.</li>
          <li>Better maintainability.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Use one root layout for the entire application.</li>
          <li>Create nested layouts only when necessary.</li>
          <li>Keep layouts focused on shared UI.</li>
          <li>Place route-specific content inside pages.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Pages define the routes of a Next.js application, while layouts
          provide shared user interfaces across multiple pages. Understanding
          how pages and layouts work together is essential for building
          organized and scalable Next.js applications.
        </p>
      </div>
    </div>
  );
}