// import Sidebar from "@/app/components/page";

export default function Routing() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Routing</h1>

        <p>
          Routing is the process of navigating between different pages in a
          Next.js application. Next.js uses a file-based routing system, meaning
          every folder containing a <code>page.tsx</code> file automatically
          becomes a route.
        </p>

        <h2>How Routing Works</h2>

        <p>
          In the App Router, routes are created by organizing files and folders
          inside the <code>app</code> directory. No additional routing library
          is required.
        </p>

        <h2>Example Folder Structure</h2>

        <pre
        style={
            {
                padding:"18px",
                overflowX:"auto",
                background:"#111",
                borderRadius:"12px",
                borderLeft:"7px solid rgba(13, 200, 13)"
            }
        }
        >
{`app/
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── blog/
    └── page.tsx`}
        </pre>

        <h2>Generated Routes</h2>

        <table
        style={{
            borderCollapse:"collapse",
            width:"100%",
            margin:"25 0",
            border:"1px solid  #444"
        }}
        >
          <tbody>
            <tr>
              <th
              style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Folder</th>
              <th
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >URL</th>
            </tr>

            <tr>
              <td
              style={{
                border:"1px solid #444",
                padding:"14px"
              }}
              >app/page.tsx</td>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px"
              }}
              >/</td>
            </tr>

            <tr>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >app/about/page.tsx</td>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >/about</td>
            </tr>

            <tr>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                // background:"#111"
              }}
              >app/contact/page.tsx</td>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                // background:"#111"
              }}
              >/contact</td>
            </tr>

            <tr>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >app/blog/page.tsx</td>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >/blog</td>
            </tr>
          </tbody>
        </table>

        <h2>Creating a New Route</h2>

        <pre
          style={
            {
                padding:"18px",
                overflowX:"auto",
                background:"#111",
                borderRadius:"12px",
                borderLeft:"7px solid rgba(13, 200, 13)"
            }
        }
        >
{`app/
└── services/
    └── page.tsx`}
        </pre>

        <p>
          This automatically creates the following route:
        </p>

        <pre
          style={
            {
                padding:"18px",
                overflowX:"auto",
                background:"#111",
                borderRadius:"12px",
                borderLeft:"7px solid rgba(13, 200, 13)"
            }
        }
        >
{`http://localhost:3000/services`}
        </pre>

        <h2>Navigating Between Pages</h2>

        <p>
          Next.js provides the <code>Link</code> component for client-side
          navigation. It allows users to move between pages without performing a
          full page refresh.
        </p>

        <pre
          style={
            {
                padding:"18px",
                overflowX:"auto",
                background:"#111",
                borderRadius:"12px",
                borderLeft:"7px solid rgba(13, 200, 13)"
            }
        }
        >
{`import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}`}
        </pre>

        <h2>Benefits of File-Based Routing</h2>

        <ul>
          <li>No manual route configuration.</li>
          <li>Easy to understand.</li>
          <li>Organized project structure.</li>
          <li>Automatic route generation.</li>
          <li>Works seamlessly with the App Router.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Use descriptive folder names.</li>
          <li>Keep related pages together.</li>
          <li>Use the Link component for navigation.</li>
          <li>Avoid deeply nested routes unless necessary.</li>
          <li>Organize large applications using route groups.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Forgetting to create a page.tsx file.</li>
          <li>Using the HTML &lt;a&gt; tag instead of Link for internal navigation.</li>
          <li>Placing routes outside the app directory.</li>
          <li>Creating unnecessary nested folders.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Routing in Next.js is simple and powerful. By creating folders and
          adding a <code>page.tsx</code> file, you can automatically generate
          routes without writing any routing configuration. This makes
          navigation easier and helps keep applications organized.
        </p>
      </div>
    </div>
  );
}