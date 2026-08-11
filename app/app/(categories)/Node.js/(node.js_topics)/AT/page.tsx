export default function Authentication() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Authentication</h1>

            <p>
                Authentication is the process of verifying who a user is.
                Backend applications use authentication to protect accounts
                and private resources.
            </p>

            <h2>Authentication vs Authorization</h2>

            <ul>
                <li>
                    <strong>Authentication</strong> — "Who are you?"
                </li>
                <li>
                    <strong>Authorization</strong> — "What are you allowed
                    to access?"
                </li>
            </ul>

            <h2>Login Flow</h2>

            <pre style={codeStyle}>
                <code>{`Client
   ↓
Login request
   ↓
Express server
   ↓
Verify credentials
   ↓
Create session / token
   ↓
Client
   ↓
Access protected resources`}</code>
            </pre>

            <h2>Registering a User</h2>

            <p>
                When a user creates an account, the server should store a
                password hash rather than the original password.
            </p>

            <pre style={codeStyle}>
                <code>{`app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    // Hash password
    // Save user to database

    res.status(201).json({
        message: "Account created"
    });
});`}</code>
            </pre>

            <h2>Logging In</h2>

            <p>
                During login, the server checks the submitted credentials
                against the stored account information.
            </p>

            <pre style={codeStyle}>
                <code>{`app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    // Find user
    // Verify password

    res.json({
        message: "Login successful"
    });
});`}</code>
            </pre>

            <h2>Password Hashing</h2>

            <p>
                Passwords should not be stored as plain text. A password
                hashing algorithm can turn a password into a one-way hash.
            </p>

            <pre style={codeStyle}>
                <code>{`const hash = await hashPassword(password);

// Store the hash in the database`}</code>
            </pre>

            <h2>Sessions</h2>

            <p>
                With session-based authentication, the server creates a
                session after successful login. The client then sends a
                session identifier with later requests.
            </p>

            <pre style={codeStyle}>
                <code>{`Login
  ↓
Create session
  ↓
Session ID
  ↓
Client sends session ID
  ↓
Server identifies the user`}</code></pre>

            <h2>Tokens</h2>

            <p>
                Another common approach is token-based authentication. After
                login, the server gives the client a token that can be used
                when accessing protected resources.
            </p>

            <pre style={codeStyle}>
                <code>{`POST /api/login

        ↓

{
    "token": "..."
}`}</code>
            </pre>

            <h2>Protected Routes</h2>

            <p>
                Authentication middleware can check whether a request is
                authenticated before allowing access.
            </p>

            <pre style={codeStyle}>
                <code>{`function requireAuth(req, res, next) {
    // Check authentication

    if (!req.user) {
        return res.status(401).json({
            message: "Authentication required"
        });
    }

    next();
}

app.get(
    "/api/profile",
    requireAuth,
    (req, res) => {
        res.json({
            message: "Private profile"
        });
    }
);`}</code>
            </pre>

            <h2>Authentication Status Codes</h2>

            <ul>
                <li>
                    <code>200</code> — successful request
                </li>
                <li>
                    <code>201</code> — account created
                </li>
                <li>
                    <code>401</code> — authentication required or invalid
                    credentials
                </li>
                <li>
                    <code>403</code> — authenticated but not allowed
                </li>
                <li>
                    <code>404</code> — resource not found
                </li>
            </ul>

            <h2>Environment Variables</h2>

            <p>
                Sensitive configuration such as secret keys should be kept
                outside your source code using environment variables.
            </p>

            <pre style={codeStyle}>
                <code>{`AUTH_SECRET=your-secret`}</code>
            </pre>

            <h2>Security Basics</h2>

            <ul>
                <li>Never store plain-text passwords.</li>
                <li>Validate user input.</li>
                <li>Use HTTPS in production.</li>
                <li>Keep secrets out of source control.</li>
                <li>Use secure, well-tested authentication libraries.</li>
            </ul>

            <h2>Summary</h2>

            <p>
                Authentication verifies a user's identity. Common approaches
                include sessions and tokens. Express middleware can then
                protect routes and allow only authenticated users to access
                private resources.
            </p>

        </div>
    );
}