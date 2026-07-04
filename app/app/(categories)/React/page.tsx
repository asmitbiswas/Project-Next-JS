import Sidebar from "@/app/components/page";
import Link from "next/link";

export default function React() {
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
          maxWidth: "900px",
          marginLeft: "280px",
          lineHeight: "1.8",
        }}
      >
        <h1>React</h1>

        <p>
          React is a JavaScript library developed by Meta for building modern,
          interactive user interfaces. It uses a component-based architecture,
          allowing developers to build reusable UI elements that make
          applications easier to maintain and scale.
        </p>

        <h2>Why React?</h2>

        <p>
          React simplifies the process of building complex web applications by
          dividing the interface into independent components. It efficiently
          updates the page using the Virtual DOM, improving performance and
          making development more organized.
        </p>

        <h2>Key Features</h2>

        <ul>
          <li>Component-based architecture</li>
          <li>Reusable UI components</li>
          <li>Virtual DOM for efficient rendering</li>
          <li>Declarative programming style</li>
          <li>One-way data flow</li>
          <li>Large ecosystem and community support</li>
        </ul>

        <h2>Prerequisites</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>Basic understanding of the DOM</li>
        </ul>

        <h2>Topics Covered</h2>

        <ul>
          <li><Link href="/React/Introduction_to_React" style={{color:"white"}}>Introduction to React</Link></li>
          <li><Link href="/React/React_Project" style={{color:"white"}}>Getting Started</Link></li>
          <li><Link href="/React/Folder" style={{color:"white"}}>Folder Structure</Link></li>
          <li><Link href="/React/JSX" style={{color:"white"}}>JSX</Link></li>
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

        <h2>React Hooks</h2>

        <p>
          Hooks allow functional components to use state and other React
          features without writing class components.
        </p>

        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useMemo</li>
          <li>useCallback</li>
          <li>useReducer</li>
          <li>useContext</li>
          <li>Custom Hooks</li>
        </ul>

        <h2>Advantages</h2>

        <ul>
          <li>Fast rendering with Virtual DOM</li>
          <li>Reusable components</li>
          <li>Easy to maintain</li>
          <li>Huge community support</li>
          <li>Excellent developer tools</li>
        </ul>

        <h2>Common Use Cases</h2>

        <ul>
          <li>Single Page Applications (SPAs)</li>
          <li>Dashboards</li>
          <li>Portfolio websites</li>
          <li>E-commerce applications</li>
          <li>Social media platforms</li>
          <li>Admin panels</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Keep components small and reusable.</li>
          <li>Use meaningful component names.</li>
          <li>Avoid unnecessary re-renders.</li>
          <li>Organize files logically.</li>
          <li>Use hooks correctly.</li>
          <li>Write clean and readable code.</li>
        </ul>

        <h2>Learning Path</h2>

        <ol>
          <li>Learn JSX</li>
          <li>Understand Components</li>
          <li>Master Props & State</li>
          <li>Learn Event Handling</li>
          <li>Practice Conditional Rendering</li>
          <li>Understand Hooks</li>
          <li>Learn Routing</li>
          <li>Build Projects</li>
        </ol>

        <h2>Conclusion</h2>

        <p>
          React is one of the most popular libraries for building user
          interfaces. Its component-based approach, powerful ecosystem, and
          excellent performance make it a great choice for modern web
          development. Mastering React will provide a strong foundation for
          learning frameworks like Next.js and building production-ready web
          applications.
        </p>
      </div>
    </div>
  );
}