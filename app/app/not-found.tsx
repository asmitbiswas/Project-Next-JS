import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "100px",
          margin: 0,
        }}
      >
        404
      </h1>

      <h2>Page Not Found</h2>

      <p
        style={{
          maxWidth: "500px",
          color: "#b3b3b3",
        }}
      >
        Sorry, the page you're looking for doesn't exist or has been moved. :)
      </p>

      <Link
        href="/"
        style={{
          marginTop: "25px",
          padding: "12px 24px",
          background: "#fff",
          color: "#000",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
         Back to Home
      </Link>
    </div>
  );
}