import Link from "next/link";

export default function NodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const topLinks = [
    ["Home", "/Node.js"],
    ["Basics", "/Node.js/basics"],
    ["Modules", "/Node.js/modules"],
    ["npm", "/Node.js/npm"],
    ["File System", "/Node.js/file-system"],
    ["HTTP", "/Node.js/http"],
    ["Async", "/Node.js/async"],
    ["Express", "/Node.js/express"],
  ];

  const sideLinks = [
    ["Overview", "/Node.js"],
    ["Basics", "/Node.js/basics"],
    ["Modules", "/Node.js/modules"],
    ["npm", "/Node.js/npm"],
    ["File System", "/Node.js/file-system"],
    ["HTTP", "/Node.js/http"],
    ["Async Programming", "/Node.js/async"],
    ["Express.js", "/Node.js/express"],
    ["REST APIs", "/Node.js/rest-api"],
    ["Databases", "/Node.js/database"],
    ["Authentication", "/Node.js/authentication"],
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          borderBottom: "1px solid #252525",
          background: "#080808",
        }}
      >
        <Link
          href="/Node.js"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Node.js
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {topLinks.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s ease",
              }}
            >
              {name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Content */}
      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: "240px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "28px 22px",
            borderRight: "1px solid #252525",
            background: "#080808",
          }}
        >
          <h3
            style={{
              margin: "0 0 8px",
              fontSize: "13px",
              letterSpacing: "1.5px",
              color: "#666",
            }}
          >
            NODE.JS
          </h3>

          {sideLinks.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              style={{
                color: "#aaa",
                textDecoration: "none",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {name}
            </Link>
          ))}
        </aside>

        {/* Main */}
        <main
          style={{
            flex: 1,
            minWidth: 0,
            maxWidth: "1100px",
            padding: "48px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#888",
              textDecoration: "none",
              fontSize: "14px",
              marginBottom: "12px",
              paddingBottom: "16px",
              borderBottom: "1px solid #252525",
            }}
          >
            ← DevVault Home
          </Link>
          {children}
        </main>
      </div>
    </div>
  );
}