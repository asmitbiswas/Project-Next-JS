// import Sidebar from "@/app/components/page";

export default function FolderStructure() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Folder Structure</h1>

        <p>
          Understanding the folder structure is important because Next.js uses
          file-based routing. Each folder and file has a specific purpose that
          helps organize your application.
        </p>

        <h2>Default Folder Structure</h2>

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
{`my-app/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   └── about/
│       └── page.tsx
│
├── public/
│
├── node_modules/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── README.md`}
        </pre>

        <h2>Important Folders</h2>

        <table
        style={{
            borderCollapse:"collapse",
            overflowX:"auto",
            // padding:"10px",
            width:"100%",
            margin:"25 0",
            border:"1px solid white",
            // borderLeftL:
            // textAlign
        }}
        >
          <tbody>
            <tr>
              <th
              style={{
                border:"1px solid white",
                padding:"10px",
                background:"#111111",
              }}
              >Folder</th>
              <th
                style={{
                border:"1px solid white",
                padding:"10px",
                background:"#111111",
              }}
              >Purpose</th>
            </tr>

            <tr>
              <td
                style={{
                border:"1px solid white",
                padding:"10px"
              }}
              >app/</td>
              <td
                style={{
                border:"1px solid white",
                padding:"10px"
              }}
              >Contains routes, layouts, pages, and UI.</td>
            </tr>

            <tr>
              <td
                style={{
                border:"1px solid white",
                padding:"10px",
                background:"#111111"
              }}
              >public/</td>
              <td
                style={{
                border:"1px solid white",
                padding:"10px",
                background:"#111111"
              }}
              >Stores static assets like images and icons.</td>
            </tr>

            <tr>
              <td
                style={{
                border:"1px solid white",
                padding:"10px"
              }}
              >node_modules/</td>
              <td
                style={{
                border:"1px solid white",
                padding:"10px"
              }}
              >Contains installed npm packages.</td>
            </tr>
          </tbody>
        </table>

        <h2>Important Files</h2>

        <table
                style={{
            borderCollapse:"collapse",
            overflowX:"auto",
            // padding:"10px",
            width:"100%",
            margin:"25 0",
            border:"1px solid white",
            // borderLeftL:
            // textAlign
        }}
        >
          <tbody>
            <tr>
              <th
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >File</th>
              <th
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >Purpose</th>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >page.tsx</td>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >Creates a route (page).</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >layout.tsx</td>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >Shared layout between pages.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >globals.css</td>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >Global CSS for the application.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >package.json</td>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >Stores project information and dependencies.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >tsconfig.json</td>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >TypeScript configuration.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >next.config.ts</td>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >Next.js configuration file.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >README.md</td>
              <td
               style={{
                border:"1px solid white",
                padding:"10px",
                // background:"#111111",
              }}
              >Project documentation.</td>
            </tr>
          </tbody>
        </table>

        <h2>The app Folder</h2>

        <p>
          The <code>app</code> folder is the heart of a Next.js application.
          Every route, layout, loading page, error page, and template is created
          inside this folder.
        </p>

        <h2>Example</h2>

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
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── blog/
    └── page.tsx`}
        </pre>

        <p>
          The folder above automatically creates these routes:
        </p>

        <ul>
          <li>/</li>
          <li>/about</li>
          <li>/contact</li>
          <li>/blog</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Keep related files together.</li>
          <li>Use meaningful folder names.</li>
          <li>Store images inside the public folder.</li>
          <li>Reuse components instead of duplicating code.</li>
          <li>Keep the project structure clean and organized.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          The Next.js folder structure is designed to make development simple
          and organized. Understanding the purpose of each folder and file helps
          you build scalable applications and navigate projects more easily.
        </p>
      </div>
    </div>
  );
}