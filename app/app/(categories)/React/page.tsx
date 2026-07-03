import Sidebar from "@/app/components/page";

export default function React() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        paddingLeft: "320px", // Space for the sidebar
        lineHeight: "1.8",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <Sidebar />

        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>React</h1>

        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          React is a JavaScript library used to build user interfaces. It allows
          you to create reusable components, making applications easier to
          manage as they grow. Instead of updating the entire page, React
          efficiently updates only the parts that change.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "40px" }}>
          Why React?
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          React makes building modern web applications much more organized. By
          breaking the UI into components, you can reuse code, keep projects
          maintainable, and develop faster.
        </p>

        <h2 style={{ fontSize: "32px", marginTop: "40px" }}>
          Topics Covered
        </h2>

        <ul style={{ fontSize: "18px", paddingLeft: "25px" }}>
          <li>Introduction to React</li>
          <li>JSX</li>
          <li>Components</li>
          <li>Props</li>
          <li>State</li>
          <li>Event Handling</li>
          <li>Conditional Rendering</li>
          <li>Lists & Keys</li>
          <li>Forms</li>
          <li>React Hooks</li>
          <li>Context API</li>
          <li>React Router</li>
          <li>Performance Optimization</li>
        </ul>

        <h2 style={{ fontSize: "32px", marginTop: "40px" }}>
          What you'll learn
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          This section contains beginner to advanced React concepts with
          explanations, examples, and practical notes. Each topic is organized
          separately so you can quickly revisit concepts whenever you're working
          on a project.
        </p>

        <p style={{ fontSize: "18px" }}>
          Choose a topic from the sidebar to start learning. Happy coding! 🚀
        </p>
      </div>
    </div>
  );
}