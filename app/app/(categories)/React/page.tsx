import Sidebar from "@/app/components/page";
export default function React() {
  return (
    <div style={{ background: "black", color: "white", padding: "20px", display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "flex-start", alignItems: "center" }}>

      <div>
        <Sidebar />
     
      <h1>React</h1>
      <p>
        React is a JavaScript library used to build user interfaces. It allows you
        to create reusable components, making applications easier to manage as they
        grow. Instead of updating the entire page, React efficiently updates only
        the parts that change.
      </p>

      <h2>Why React?</h2>

      <p>
        React makes building modern web applications much more organized. By
        breaking the UI into components, you can reuse code, keep projects
        maintainable, and develop faster.
      </p>

      <h2>Topics Covered</h2>

      <ul>
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

      <h2>What you'll learn</h2>

      <p>
        This section contains beginner to advanced React concepts with explanations,
        examples, and practical notes. Each topic is organized separately so you can
        quickly revisit concepts whenever you're working on a project.
      </p>

      <p>
        Choose a topic from the sidebar to start learning. Happy coding! 🚀
      </p>
       </div>
    </div>
  );
}