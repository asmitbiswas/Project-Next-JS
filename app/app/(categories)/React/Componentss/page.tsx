import Sidebar from "@/app/components/page";

export default function Components() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          maxWidth: "900px",
          lineHeight: "1.8",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Components
        </h1>

        <p>
          Components are the building blocks of a React application. They allow
          you to split the user interface into small, reusable pieces. Each
          component is responsible for rendering a part of the UI and can be
          reused throughout the application.
        </p>

        <h2 style={{ marginTop: "40px" }}>Why Components?</h2>

        <p>
          Components make code easier to read, maintain, and reuse. Instead of
          writing the same HTML multiple times, you can create one component and
          use it wherever it's needed.
        </p>

        <h2 style={{ marginTop: "40px" }}>Types of Components</h2>

        <ul>
          <li>Functional Components</li>
          <li>Class Components (Legacy)</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Functional Component Example</h2>

        <pre
          style={{
            background: "#111",
            padding: "18px",
            borderRadius: "8px",
            overflowX: "auto",
            fontSize: "15px",
          }}
        >
{`function Welcome() {
  return <h1>Welcome to DevVault!</h1>;
}`}
        </pre>

        <h2 style={{ marginTop: "40px" }}>Using a Component</h2>

        <pre
          style={{
            background: "#111",
            padding: "18px",
            borderRadius: "8px",
            overflowX: "auto",
            fontSize: "15px",
          }}
        >
{`function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
        </pre>

        <h2 style={{ marginTop: "40px" }}>Naming Rules</h2>

        <ul>
          <li>Component names must start with a capital letter.</li>
          <li>Use meaningful names like Navbar, Footer, or ProfileCard.</li>
          <li>Keep one main component per file.</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Benefits of Components</h2>

        <ul>
          <li>Reusable code</li>
          <li>Easy maintenance</li>
          <li>Cleaner project structure</li>
          <li>Improved readability</li>
          <li>Faster development</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Best Practices</h2>

        <ul>
          <li>Keep components small and focused.</li>
          <li>Use descriptive names.</li>
          <li>Avoid repeating code.</li>
          <li>Separate UI from logic.</li>
          <li>Break large components into smaller ones.</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Common Mistakes</h2>

        <ul>
          <li>Using lowercase component names.</li>
          <li>Creating very large components.</li>
          <li>Repeating the same UI multiple times.</li>
          <li>Putting too much logic into one component.</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Summary</h2>

        <p>
          Components are one of the core concepts of React. They make
          applications modular, reusable, and easier to maintain. Mastering
          components is the first step toward building scalable React
          applications.
        </p>
      </div>
    </div>
  );
}