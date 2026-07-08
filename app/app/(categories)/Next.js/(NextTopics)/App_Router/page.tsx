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

        <pre
                 style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px",
            borderLeft:"5px solid #00ff00",
            lineHeight:"1.8",
            fontSize:"16px"
        }}
        >
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

        <table
        style={{
            borderCollapse:"collapse",
            width:"100%",
            overflowX:"auto",
            border:"1px solid #444",
            margin:"25 0"
        }}
        >
          <tbody>
            <tr>
                    <th
                    style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
                    }}
              >Folder</th>
              <th
              style={{
                border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
              }}
              >Generated Route</th>
            </tr>

            <tr>
              <td
              style={{
                border:"1px solid #444",
                padding:"10px"
              }}
              >app/page.tsx</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"10px"
              }}
              >/</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"10px",
                background:"#111",
              }}
              >app/about/page.tsx</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"10px",
                background:"#111",
              }}
              >/about</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"10px"
              }}
              >app/contact/page.tsx</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"10px"
              }}
              >/contact</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"10px",
                background:"#111",
              }}
              >app/dashboard/page.tsx</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"10px",
                background:"#111",
              }}
              >/dashboard</td>
            </tr>
          </tbody>
        </table>

        <h2>Important Files</h2>

        <table
             style={{
            borderCollapse:"collapse",
            width:"100%",
            overflowX:"auto",
            border:"1px solid #444",
            margin:"25 0"
        }}
        >
          <tbody>
            <tr>
              <th
               style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
                    }}
              >File</th>
              <th
               style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
               }}
              >Purpose</th>
            </tr>

            <tr>
              <td
                  style={{
                        border:"1px solid #444",
                        padding:"10px",
                        // background:"#111",
               }}
              >page.tsx</td>
              <td
                  style={{
                        border:"1px solid #444",
                        padding:"10px",
                        // background:"#111",
               }}
              >Creates a page for a route.</td>
            </tr>

            <tr>
              <td
                  style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
               }}
              >layout.tsx</td>
              <td
                  style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
               }}
              >Shared UI across multiple pages.</td>
            </tr>

            <tr>
              <td
                  style={{
                        border:"1px solid #444",
                        padding:"10px",
                        // background:"#111",
               }}
              >loading.tsx</td>
              <td
                  style={{
                        border:"1px solid #444",
                        padding:"10px",
                        // background:"#111",
               }}
              >Displays a loading UI while content loads.</td>
            </tr>

            <tr>
              <td
                  style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
               }}
              >error.tsx</td>
              <td
                 style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
               }}
              >Displays an error UI if something fails.</td>
            </tr>

            <tr>
              <td
                   style={{
                        border:"1px solid #444",
                        padding:"10px",
                        // background:"#111",
               }}
              >not-found.tsx</td>
              <td
                   style={{
                        border:"1px solid #444",
                        padding:"10px",
                        // background:"#111",
               }}
              >Custom 404 page.</td>
            </tr>

            <tr>
              <td
                   style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
               }}
              >template.tsx</td>
              <td
                   style={{
                        border:"1px solid #444",
                        padding:"10px",
                        background:"#111",
               }}
              >Creates a new instance of a layout on navigation.</td>
            </tr>
          </tbody>
        </table>

        <h2>Example Route</h2>

        <pre
                 style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px",
            borderLeft:"5px solid #00ff00",
            lineHeight:"1.8",
            fontSize:"16px"
        }}
        >
{`app/
└── profile/
    └── page.tsx`}
        </pre>

        <p>
          This folder structure automatically creates the following route:
        </p>

        <pre
                 style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px",
            borderLeft:"5px solid #00ff00",
            lineHeight:"1.8",
            fontSize:"16px"
        }}
        >
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

        <h1>Don't make this Shitty mistake</h1>
       <pre
                 style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px",
            borderLeft:"5px solid #00ff00",
            lineHeight:"1.8",
            fontSize:"16px"
        }}
        >
{`app/
│
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── dashboard/
    └── page.tsx
├── [Ur route group]/   
    `}
        </pre>
        <p>If u do this ur app will break( route won't work properly )</p>
      </div>
    </div>
  );
}