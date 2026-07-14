import Link from "next/link";

// import Sidebar from "@/app/components/page";

export default function JavaScriptHome() {
  return (
    <div>
      <div>
        <h1>JavaScript</h1>

        <p>
          JavaScript is one of the core technologies of web development.
          It is a high-level, interpreted programming language used to
          create dynamic and interactive web applications. Along with
          HTML and CSS, JavaScript powers modern websites.
        </p>

        <h2>What You'll Learn</h2>

        <ul>
          <li><Link href="/JavaScript/Introduction_to_JavaScript" style={{color:"white"}}>Introduction to JavaScript </Link></li>
          <li>Variables and Data Types</li>
          <li>Operators</li>
          <li>Conditional Statements</li>
          <li>Loops</li>
          <li>Functions</li>
          <li>Arrays</li>
          <li>Objects</li>
          <li>Strings</li>
          <li>DOM Manipulation</li>
          <li>Events</li>
          <li>ES6 Features</li>
          <li>Promises</li>
          <li>Async / Await</li>
          <li>Modules</li>
          <li>Error Handling</li>
        </ul>

        <h2>Why Learn JavaScript?</h2>

        <table
        style={{
            borderCollapse:"collapse",
            overflowX:"auto",
            margin:"25 0",
            border:"1px solid #444",
            width:"100%"
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
              >Reason</th>
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
                border:"1px solid #444",
                padding:"14px"
              }}
              >Interactivity</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px"
              }}
              >Adds dynamic behavior to web pages.</td>
            </tr>

            <tr>
              <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Versatility</td>
              <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Works on both the frontend and backend.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px"
              }}
              >Popularity</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px"
              }}
              >One of the most widely used programming languages.</td>
            </tr>

            <tr>
              <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Frameworks</td>
              <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Powers React, Next.js, Vue, Angular, and more.</td>
            </tr>
          </tbody>
        </table>

        <h2>Example</h2>

        <pre
        style={{
            padding:"14px",
            overflowX:"auto",
            borderRadius:"12px",
            borderLeft:"6px rgb(13, 200, 13)",
            background:"#111"
        }}
        >
{`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("DevVault"));`}
        </pre>

        <h2>Applications</h2>

        <ul>
          <li>Interactive websites</li>
          <li>Web applications</li>
          <li>Games</li>
          <li>Mobile applications</li>
          <li>Backend development with Node.js</li>
          <li>Desktop applications</li>
        </ul>

        <h2>Prerequisites</h2>

        <p>
          Before learning JavaScript, you should have a basic understanding
          of HTML and CSS, as JavaScript works alongside them to build
          complete web applications.
        </p>

        <h2>Summary</h2>

        <p>
          JavaScript is an essential programming language for web
          development. It enables developers to build dynamic, interactive,
          and feature-rich applications. In this section of DevVault,
          you'll learn JavaScript from the fundamentals to modern ES6+
          concepts with practical examples.
        </p>
      </div>
    </div>
  );
}