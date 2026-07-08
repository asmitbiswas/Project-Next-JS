// import Sidebar from "@/app/components/page";

export default function CreatingNextJSProject() {
  return (
    <div>
      

      <div>
        <h1>Creating a Next.js Project</h1>

        <p>
          Before building applications with Next.js, you need to create a new
          project. The easiest way is by using <code>create-next-app</code>,
          which automatically sets up everything required for development.
        </p>

        <h2>Prerequisites</h2>

        <ul>
          <li>Node.js installed</li>
          <li>npm, yarn, pnpm, or bun</li>
          <li>Basic knowledge of React</li>
        </ul>

        <h2>Create a New Project</h2>

        <pre
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            overflowX: "auto",
            borderLeft: "4px solid #4CAF50",
          }}
        >
{`npx create-next-app@latest`}
        </pre>

        <h2>Project Setup Questions</h2>

        <p>
          After running the command, Next.js asks a few questions to configure
          your project.
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "25px 0",
          }}
        >
          <tbody>
            <tr>
              <th style={{ border: "1px solid #444", padding: "14px" }}>
                Question
              </th>
              <th style={{ border: "1px solid #444", padding: "14px" }}>
                Recommended
              </th>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Project Name
              </td>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Your choice
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                TypeScript
              </td>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Yes
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                ESLint
              </td>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Yes
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Tailwind CSS
              </td>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Optional
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                App Router
              </td>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Yes
              </td>
            </tr>

            <tr>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Turbopack
              </td>
              <td style={{ border: "1px solid #444", padding: "14px" }}>
                Yes (Development)
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Move Into the Project</h2>

        <pre
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            overflowX: "auto",
            borderLeft: "4px solid #4CAF50",
          }}
        >
{`cd my-app`}
        </pre>

        <h2>Start the Development Server</h2>

        <pre
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            overflowX: "auto",
            borderLeft: "4px solid #4CAF50",
          }}
        >
{`npm run dev`}
        </pre>

        <p>
          By default, the application runs at:
        </p>

        <pre
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            overflowX: "auto",
            borderLeft: "4px solid #4CAF50",
          }}
        >
{`http://localhost:3000`}
        </pre>

        <h2>Project Structure</h2>

        <ul>
          <li><strong>app/</strong> - Application routes and pages.</li>
          <li><strong>public/</strong> - Static assets.</li>
          <li><strong>package.json</strong> - Project dependencies.</li>
          <li><strong>next.config.js</strong> - Next.js configuration.</li>
          <li><strong>tsconfig.json</strong> - TypeScript configuration.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Use the App Router for new projects.</li>
          <li>Keep your project organized from the start.</li>
          <li>Use meaningful folder names.</li>
          <li>Commit your project to Git early.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Creating a Next.js project is simple with
          <code> create-next-app</code>. Once your project is created, you can
          start building modern React applications using the App Router and
          other powerful features provided by Next.js.
        </p>
      </div>
    </div>
  );
}