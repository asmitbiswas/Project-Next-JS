import Link from "next/link";

export default function NextJSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          height: "65px",
          borderBottom: "1px solid #222",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 35px",
          position: "sticky",
          top: 0,
          background: "#000",
          zIndex: 10,
        }}
      >
        <Link
          href="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          DevVault
        </Link>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#aaa",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Home
          </Link>

          <Link
            href="/about"
            style={{
              color: "#aaa",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            About
          </Link>

          <Link
            href="/projects"
            style={{
              color: "#aaa",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Projects
          </Link>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 65px)",
        }}
      >
        <aside
          style={{
            width: "250px",
            borderRight: "1px solid #222",
            padding: "30px 20px",
            position: "fixed",
            top: "65px",
            bottom: 0,
            overflowY: "auto",
            background: "#000",
          }}
        >
          <p
            style={{
              color: "#777",
              fontSize: "12px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            NEXT.JS
          </p>

          <Link
            href="/nextjs"
            style={{
              display: "block",
              color: "#fff",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Introduction
          </Link>

          <Link
            href="/nextjs/routing"
            style={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Routing
          </Link>

          <Link
            href="/nextjs/layout"
            style={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Layouts
          </Link>

          <Link
            href="/nextjs/pages"
            style={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Pages
          </Link>

          <Link
            href="/nextjs/server-components"
            style={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Server Components
          </Link>

          <Link
            href="/nextjs/client-components"
            style={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Client Components
          </Link>

          <p
            style={{
              color: "#777",
              fontSize: "12px",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "12px",
            }}
          >
            RESOURCES
          </p>

          <Link
            href="/nextjs/examples"
            style={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Examples
          </Link>

          <Link
            href="/nextjs/projects"
            style={{
              display: "block",
              color: "#aaa",
              textDecoration: "none",
              padding: "8px 12px",
              fontSize: "14px",
            }}
          >
            Projects
          </Link>
        </aside>

        <main
          style={{
            marginLeft: "290px",
            padding: "40px",
            maxWidth: "900px",
            lineHeight: "1.8",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

