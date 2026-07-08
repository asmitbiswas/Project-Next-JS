import Sidebar from "@/app/components/page";

export default function FolderStructure() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Folder Structure</h1>

        <p>
          Understanding the folder structure is important because Next.js uses
          file-based routing. Each folder and file has a specific purpose that
          helps organize your application.
        </p>

        <h2>Default Folder Structure</h2>

        <pre>
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

        <table>
          <tbody>
            <tr>
              <th>Folder</th>
              <th>Purpose</th>
            </tr>

            <tr>
              <td>app/</td>
              <td>Contains routes, layouts, pages, and UI.</td>
            </tr>

            <tr>
              <td>public/</td>
              <td>Stores static assets like images and icons.</td>
            </tr>

            <tr>
              <td>node_modules/</td>
              <td>Contains installed npm packages.</td>
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
              <td>Creates a route (page).</td>
            </tr>

            <tr>
              <td>layout.tsx</td>
              <td>Shared layout between pages.</td>
            </tr>

            <tr>
              <td>globals.css</td>
              <td>Global CSS for the application.</td>
            </tr>

            <tr>
              <td>package.json</td>
              <td>Stores project information and dependencies.</td>
            </tr>

            <tr>
              <td>tsconfig.json</td>
              <td>TypeScript configuration.</td>
            </tr>

            <tr>
              <td>next.config.ts</td>
              <td>Next.js configuration file.</td>
            </tr>

            <tr>
              <td>README.md</td>
              <td>Project documentation.</td>
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

        <pre>
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