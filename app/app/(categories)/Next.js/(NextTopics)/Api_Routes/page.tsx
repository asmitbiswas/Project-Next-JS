// import Sidebar from "@/app/components/page";

export default function ApiRoutes() {
    return (
        <div>
            {/* <Sidebar /> */}

            <div>
                <h1>API Routes (Route Handlers)</h1>

                <p>
                    API Routes, also known as <code>Route Handlers</code>, allow you to
                    create backend APIs directly inside a Next.js application. They are
                    defined using a <code>route.ts</code> (or <code>route.js</code>) file
                    inside the <code>app/api</code> directory.
                </p>

                <h2>Why Use API Routes?</h2>

                <p>
                    API Routes let you handle server-side logic without creating a
                    separate backend. You can fetch data, interact with databases,
                    authenticate users, and process requests.
                </p>

                <h2>Folder Structure</h2>

                <pre
                style={{
            background:"#111",
            overflowX:"auto",
            borderRadius:"10px",
            padding:"18px",
            borderLeft:"5px solid #00ff00",
            lineHeight:"1.8",
            fontSize:"16px"
        }}>
                    {`app/
└── api/
    └── users/
        └── route.ts`}
                </pre>

                <h2>Creating Your First API</h2>

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
                    {`export async function GET() {
  return Response.json({
    message: "Hello, DevVault!",
  });
}`}
                </pre>

                <h2>API Endpoint</h2>

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
                    {`http://localhost:3000/api/users`}
                </pre>

                <h2>HTTP Methods</h2>

                <table
                style={{
                    borderCollapse:"collapse",
                    overflowX:"auto",
                    width:"100%",
                    border:"1px solid #444",
                    margin:"25 0"
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
                            >Method</th>
                            <th
                               style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >Purpose</th>
                        </tr>

                        <tr>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >GET</td>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Retrieve data.</td>
                        </tr>

                        <tr>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >POST</td>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >Create new data.</td>
                        </tr>

                        <tr>
                            <td
                            style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >PUT</td>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Replace existing data.</td>
                        </tr>

                        <tr>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >PATCH</td>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >Update part of the data.</td>
                        </tr>

                        <tr>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >DELETE</td>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Delete data.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>POST Request Example</h2>

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
                    {`export async function POST(request) {
  const body = await request.json();

  return Response.json({
    success: true,
    user: body,
  });
}`}
                </pre>

                <h2>Using Route Parameters</h2>

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
└── api/
    └── users/
        └── [id]/
            └── route.ts`}
                </pre>

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
                    {`export async function GET(
  request,
  { params }
) {
  return Response.json({
    id: params.id,
  });
}`}
                </pre>

                <h2>Status Codes</h2>

                <table
                style={{
                            borderCollapse:"collapse",
                    overflowX:"auto",
                    width:"100%",
                    border:"1px solid #444",
                    margin:"25 0"
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
                            >Status Code</th>
                            <th
                              style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >Meaning</th>
                        </tr>

                        <tr>
                            <td
                            style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >200</td>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Request successful.</td>
                        </tr>

                        <tr>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >201</td>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >Resource created.</td>
                        </tr>

                        <tr>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >400</td>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Bad request.</td>
                        </tr>

                        <tr>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >404</td>
                            <td
                              style={{
                                border:"1px solid #444",
                                padding:"14px",
                                background:"#111"
                            }}
                            >Resource not found.</td>
                        </tr>

                        <tr>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >500</td>
                            <td
                               style={{
                                border:"1px solid #444",
                                padding:"14px"
                            }}
                            >Internal server error.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Advantages</h2>

                <ul>
                    <li>No separate backend project required.</li>
                    <li>Supports RESTful APIs.</li>
                    <li>Easy database integration.</li>
                    <li>Runs on the server.</li>
                    <li>Works seamlessly with the App Router.</li>
                </ul>

                <h2>Best Practices</h2>

                <ul>
                    <li>Validate incoming request data.</li>
                    <li>Return proper HTTP status codes.</li>
                    <li>Handle errors gracefully.</li>
                    <li>Keep API logic organized.</li>
                    <li>Never expose sensitive information.</li>
                </ul>

                <h2>Summary</h2>

                <p>
                    API Routes (Route Handlers) enable you to build backend functionality
                    directly within your Next.js application. They support all standard
                    HTTP methods and are commonly used for authentication, database
                    operations, and handling client requests.
                </p>
            </div>
        </div>
    );
}