// import Sidebar from "@/app/components/page";

export default function Introduction() {
    return (
        <div>
            {/* <Sidebar /> */}

            <div>
                <h1>Introduction to JavaScript</h1>

                <p>
                    JavaScript is a high-level, interpreted programming language used
                    to make websites interactive and dynamic. It works alongside HTML
                    and CSS to create modern web applications.
                </p>

                <h2>History</h2>

                <p>
                    JavaScript was created by Brendan Eich in 1995 while working at
                    Netscape. It was developed in just 10 days and has since become
                    one of the most popular programming languages in the world.
                </p>

                <h2>Why Learn JavaScript?</h2>

                <ul>
                    <li>Add interactivity to web pages.</li>
                    <li>Create dynamic user interfaces.</li>
                    <li>Develop full-stack applications using Node.js.</li>
                    <li>Build mobile and desktop applications.</li>
                    <li>Power popular frameworks like React and Next.js.</li>
                </ul>

                <h2>Features of JavaScript</h2>

                <table
                    style={{
                        borderCollapse: "collapse",
                        overflowX: "auto",
                        margin: "25 0",
                        border: "1px solid #444",
                        width: "100%"
                    }}
                >
                    <tbody>
                        <tr>
                            <th
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                    background: "#111"
                                }}
                            >Feature</th>
                            <th
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                    background: "#111"
                                }}
                            >Description</th>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                }}
                            >Lightweight</td>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                }}
                            >Easy to learn and fast to execute.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                    background: "#111"
                                }}
                            >Interpreted</td>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                    background: "#111"
                                }}
                            >Runs without compilation.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                }}
                            >Object-Oriented</td>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                }}
                            >Supports objects and classes.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                    background: "#111"
                                }}
                            >Dynamic</td>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                    background: "#111"
                                }}
                            >Variables can change data types.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                }}
                            >Cross-Platform</td>
                            <td
                                style={{
                                    padding: "14px",
                                    border: "1px solid #444",
                                }}
                            >Runs on browsers and servers.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Where JavaScript is Used</h2>

                <ul>
                    <li>Interactive websites</li>
                    <li>Single Page Applications (SPA)</li>
                    <li>Backend development</li>
                    <li>Game development</li>
                    <li>Desktop applications</li>
                    <li>Mobile applications</li>
                </ul>

                <h2>How JavaScript Works</h2>

                <ol>
                    <li>The browser downloads HTML, CSS, and JavaScript.</li>
                    <li>The JavaScript engine reads the code.</li>
                    <li>The code is executed line by line.</li>
                    <li>The webpage updates based on the executed code.</li>
                </ol>

                <h2>Your First JavaScript Program</h2>

                <pre
                style={{
                    padding:"14px",
                    borderRadius:"12px",
                    overflowX:"auto",
                    background:"#111",
                    borderLeft:"6px solid rgb(13 200 13)"
                }}
                >
                    {`console.log("Hello, World!");`}
                </pre>

                <h2>Output</h2>

                <pre
                      style={{
                    padding:"14px",
                    borderRadius:"12px",
                    overflowX:"auto",
                    background:"#111",
                    borderLeft:"6px solid rgb(13 200 13)",
                    lineHeight:"1.8",
                }}
                >
                    {`Hello, World!`}
                </pre>

                <h2>How to Add JavaScript to HTML</h2>

                <pre
                      style={{
                    padding:"14px",
                    borderRadius:"12px",
                    overflowX:"auto",
                    background:"#111",
                    borderLeft:"6px solid rgb(13 200 13)"
                }}
                >
                    {`<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>

  <script src="script.js"></script>

</body>
</html>`}
                </pre>

                <h2>Advantages</h2>

                <ul>
                    <li>Easy to learn.</li>
                    <li>Runs in every modern browser.</li>
                    <li>Large community support.</li>
                    <li>Fast execution.</li>
                    <li>Huge ecosystem of libraries and frameworks.</li>
                </ul>

                <h2>Summary</h2>

                <p>
                    JavaScript is one of the core technologies of web development. It
                    allows developers to create dynamic, interactive, and responsive
                    web applications. Learning JavaScript is an important step toward
                    becoming a modern web developer.
                </p>
            </div>
        </div>
    );
}