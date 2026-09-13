"use client";
export default function HTTP() {
  return (
    <>
      <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>HTTP</h1>

      <p style={{ color: "#888", marginBottom: "28px" }}>
        Learn how HTTP allows clients and servers to communicate on the web.
      </p>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        What is HTTP?
      </h2>

      <p style={{ lineHeight: "1.7", marginBottom: "24px" }}>
        HTTP stands for Hypertext Transfer Protocol. It is the main protocol
        used for communication between web clients and servers. A client sends
        an HTTP request, and the server sends back an HTTP response.
      </p>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        How HTTP Works
      </h2>

      <p style={{ lineHeight: "1.7", marginBottom: "16px" }}>
        HTTP follows a simple request-response cycle:
      </p>

      <ol style={{ lineHeight: "1.8", marginBottom: "24px" }}>
        <li>The client sends a request.</li>
        <li>The server receives and processes the request.</li>
        <li>The server sends a response.</li>
        <li>The client uses the response.</li>
      </ol>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        HTTP Request
      </h2>

      <p style={{ lineHeight: "1.7", marginBottom: "12px" }}>
        An HTTP request tells a server what the client wants to do.
      </p>

      <pre
        style={{
          padding: "16px",
          overflowX: "auto",
          marginBottom: "24px",
          background: "#111",
          borderRadius: "8px",
          borderLeft:"6px solid green"
        }}
      >
{`GET /users HTTP/1.1
Host: example.com`}
      </pre>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        HTTP Methods
      </h2>

      <p style={{ lineHeight: "1.7", marginBottom: "12px" }}>
        HTTP provides different methods for different operations.
      </p>

      <ul style={{ lineHeight: "1.8", marginBottom: "24px" }}>
        <li><strong>GET</strong> — retrieves data.</li>
        <li><strong>POST</strong> — sends new data.</li>
        <li><strong>PUT</strong> — replaces existing data.</li>
        <li><strong>PATCH</strong> — updates part of existing data.</li>
        <li><strong>DELETE</strong> — removes data.</li>
      </ul>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        HTTP Response
      </h2>

      <p style={{ lineHeight: "1.7", marginBottom: "12px" }}>
        After processing a request, the server returns an HTTP response.
      </p>

      <pre
        style={{
          padding: "16px",
          overflowX: "auto",
          marginBottom: "24px",
          background: "#111",
          borderRadius: "8px",
          borderLeft:"6px solid green"
        }}
      >
{`HTTP/1.1 200 OK
Content-Type: application/json

{"message":"Hello World"}`}
      </pre>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        HTTP Status Codes
      </h2>

      <p style={{ lineHeight: "1.7", marginBottom: "12px" }}>
        Status codes tell the client what happened with its request.
      </p>

      <ul style={{ lineHeight: "1.8", marginBottom: "24px" }}>
        <li><strong>200</strong> — OK</li>
        <li><strong>201</strong> — Created</li>
        <li><strong>400</strong> — Bad Request</li>
        <li><strong>401</strong> — Unauthorized</li>
        <li><strong>403</strong> — Forbidden</li>
        <li><strong>404</strong> — Not Found</li>
        <li><strong>500</strong> — Internal Server Error</li>
      </ul>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        HTTP Headers
      </h2>

      <p style={{ lineHeight: "1.7", marginBottom: "12px" }}>
        Headers provide additional information about a request or response.
      </p>

      <pre
        style={{
          padding: "16px",
          overflowX: "auto",
          marginBottom: "24px",
          background: "#111",
          borderRadius: "8px",
          borderLeft:"6px solid green"
        }}
      >
{`Content-Type: application/json
Authorization: Bearer token
Accept: application/json`}
      </pre>

      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
        HTTP vs HTTPS
      </h2>

      <p style={{ lineHeight: "1.7" }}>
        HTTPS is the secure version of HTTP. It uses encryption to protect
        information transferred between the client and server.
      </p>
    </>
  );
}

