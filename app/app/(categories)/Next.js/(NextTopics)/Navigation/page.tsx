// import Sidebar from "@/app/components/page";
import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Navigation</h1>

        <p>
          Navigation allows users to move between pages in a Next.js
          application. Next.js provides the <code>Link</code> component for
          fast, client-side navigation without reloading the page.
        </p>

        <h2>Using the Link Component</h2>

        <p>
          Import the Link component from <code>next/link</code> and use the
          <code>href</code> prop to specify the destination.
        </p>

        <pre
        style={{
            overflowX:"auto",
            padding:"14px",
            background:"#111",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}        
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

        <h2>Example Folder Structure</h2>

        <pre
           style={{
            overflowX:"auto",
            padding:"14px",
            background:"#111",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}   
        >
{`app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx`}
        </pre>

        <h2>Generated Routes</h2>

        <table
         style={{
            borderCollapse:"collapse",
            width:"100%",
            border:"1px solid #444",
            margin:"25 0"
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
              >Page</th>
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
                padding:"14px",
                border:"1px solid #444"
              }}
              >Home</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
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
              >About</td>
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
                padding:"14px",
                border:"1px solid #444"
              }}
              >Contact</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >/contact</td>
            </tr>
          </tbody>
        </table>

        <h2>Programmatic Navigation</h2>

        <p>
          Use the <code>useRouter</code> hook to navigate through JavaScript.
          This is useful after submitting forms or completing an action.
        </p>

        <pre
                   style={{
            overflowX:"auto",
            padding:"14px",
            background:"#111",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}  
        >
{`"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/dashboard")}>
      Go to Dashboard
    </button>
  );
}`}
        </pre>

        <h2>Router Methods</h2>

        <table
        style={{
            borderCollapse:"collapse",
            width:"100%",
            border:"1px solid #444",
            margin:"25 0"
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
              >Method</th>
              <th
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Description</th>
            </tr>

            <tr>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >push()</td>
              <td
               style={{
                padding:"14px",
                border:"1pz solid #444"
              }}
              >Navigates to a new page.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >replace()</td>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Replaces the current history entry.</td>
            </tr>

            <tr>
              <td
              style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >back()</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Returns to the previous page.</td>
            </tr>

            <tr>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >forward()</td>
              <td
                 style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Moves to the next page.</td>
            </tr>

            <tr>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >refresh()</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Refreshes the current route.</td>
            </tr>
          </tbody>
        </table>

        <h2>Best Practices</h2>

        <ul>
          <li>Use Link for internal navigation.</li>
          <li>Use useRouter for programmatic navigation.</li>
          <li>Avoid using HTML anchor tags for internal routes.</li>
          <li>Keep navigation simple and organized.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Navigation in Next.js is simple and efficient. Use the Link component
          for normal page navigation and the useRouter hook when navigation
          needs to happen through JavaScript.
        </p>
      </div>
    </div>
  );
}