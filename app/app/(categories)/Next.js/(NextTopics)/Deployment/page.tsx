// import Sidebar from "@/app/components/page";

export default function Deployment() {
    return (
        <div>
            {/* <Sidebar /> */}

            <div>
                <h1>Deployment</h1>

                <p>
                    Deployment is the process of publishing your Next.js application
                    to the internet so that users can access it. Once your project is
                    complete, you can deploy it to a hosting platform.
                </p>

                <h2>Why Deploy?</h2>

                <p>
                    During development, your application runs locally on your computer.
                    Deployment makes your application available online for everyone to
                    use.
                </p>

                <h2>Build the Project</h2>

                <p>
                    Before deploying, create a production build of your application.
                </p>

                <pre
                    style={{
                        overflowX: "auto",
                        borderLeft: "6px solid rgb(13 200 13)",
                        padding: "14px",
                        lineHeight: "1.8",
                        borderRadius: "12px",
                        fontSize: "16px",
                        background: "#111"
                    }}
                >
                    {`npm run build`}
                </pre>

                <h2>Run the Production Build</h2>

                <pre
                    style={{
                        overflowX: "auto",
                        borderLeft: "6px solid rgb(13 200 13)",
                        padding: "14px",
                        lineHeight: "1.8",
                        borderRadius: "12px",
                        fontSize: "16px",
                        background: "#111"
                    }}
                >
                    {`npm start`}
                </pre>

                <h2>Popular Hosting Platforms</h2>

                <table
                    style={{
                        borderCollapse: "collapse",
                        overflowX: "auto",
                        width: "100%",
                        border: "1px solid #444",
                        margin: "25 0"
                    }}
                >
                    <tbody>
                        <tr>
                            <th
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Platform</th>
                            <th
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Description</th>
                        </tr>

                        <tr>
                            <td
                            style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Vercel</td>
                            <td
                             style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Official platform for deploying Next.js applications.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Netlify</td>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Deploy static and hybrid web applications.</td>
                        </tr>

                        <tr>
                            <td
                             style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Render</td>
                            <td
                             style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Cloud hosting for websites and APIs.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Railway</td>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Deploy full-stack applications easily.</td>
                        </tr>

                        <tr>
                            <td
                             style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >AWS</td>
                            <td
                             style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Enterprise cloud hosting platform.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Deployment Steps</h2>

                <ol>
                    <li>Complete your application.</li>
                    <li>Push your project to GitHub.</li>
                    <li>Sign in to a hosting platform.</li>
                    <li>Import your GitHub repository.</li>
                    <li>Configure environment variables (if required).</li>
                    <li>Click the Deploy button.</li>
                </ol>

                <h2>Environment Variables</h2>

                <p>
                    Store API keys, database URLs, and other sensitive information
                    using environment variables instead of hardcoding them.
                </p>

                <pre
                    style={{
                        overflowX: "auto",
                        borderLeft: "6px solid rgb(13 200 13)",
                        padding: "14px",
                        lineHeight: "1.8",
                        borderRadius: "12px",
                        fontSize: "16px",
                        background: "#111"

                    }}
                >
                    {`DATABASE_URL=your_database_url
API_KEY=your_api_key`}
                </pre>

                <h2>Common Commands</h2>

                <table
                    style={{
                        borderCollapse: "collapse",
                        overflowX: "auto",
                        width: "100%",
                        border: "1px solid #444",
                        margin: "25 0"
                    }}
                >
                    <tbody>
                        <tr>
                            <th
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Command</th>
                            <th
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Purpose</th>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >npm run dev</td>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >Starts the development server.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >npm run build</td>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111"
                                }}
                            >Creates the production build.</td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >npm start</td>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >Runs the production build.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Best Practices</h2>

                <ul>
                    <li>Test the production build before deploying.</li>
                    <li>Use environment variables for secrets.</li>
                    <li>Optimize images and assets.</li>
                    <li>Keep dependencies updated.</li>
                    <li>Monitor your application after deployment.</li>
                </ul>

                <h2>Summary</h2>

                <p>
                    Deployment is the final step of the development process. After
                    building and testing your application, you can host it on
                    platforms such as Vercel, Netlify, Railway, Render, or AWS,
                    allowing users to access your Next.js application from anywhere.
                </p>
            </div>
        </div>
    );
}