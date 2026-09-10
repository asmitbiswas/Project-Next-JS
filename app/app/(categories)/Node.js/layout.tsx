import Link from "next/link";

export default function NodeJSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#050505",
                color: "white",
                lineHeight: "1.6",
            }}
        >
            <header
                style={{
                    height: "64px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    padding: "0 32px",
                    borderBottom: "1px solid #252525",
                    background: "#080808",
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                }}
            >
                <Link
                    href="/Node.js"
                    style={{
                        flexShrink: 0,
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    Node.js
                </Link>

                <nav
                    style={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        overflowX: "auto",
                    }}
                >
                    <Link href="/Node.js" style={{ color: "white", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Overview
                    </Link>

                    <Link href="/Node.js/basics" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Node.js Basics
                    </Link>

                    <Link href="/Node.js/Modules" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Modules
                    </Link>

                    <Link href="/Node.js/NPM" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        npm
                    </Link>

                    <Link href="/Node.js/FS" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        File System
                    </Link>

                    <Link href="/Node.js/HTTP" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        HTTP
                    </Link>

                    <Link href="/Node.js/ASYNC" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Async
                    </Link>

                    <Link href="/Node.js/EXJ" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Express.js
                    </Link>

                    <Link href="/Node.js/RA" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        REST APIs
                    </Link>

                    <Link href="/Node.js/DB" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Databases
                    </Link>

                    <Link href="/Node.js/Authentication" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Authentication
                    </Link>
                </nav>
            </header>

            <div
                style={{
                    display: "flex",
                    minHeight: "calc(100vh - 64px)",
                }}
            >
                <aside
                    style={{
                        width: "240px",
                        boxSizing: "border-box",
                        flexShrink: 0,
                        padding: "28px 22px",
                        borderRight: "1px solid #252525",
                        background: "#080808",
                        position: "sticky",
                        top: "64px",
                        height: "calc(100vh - 64px)",
                        overflowY: "auto",
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            display: "block",
                            color: "#888",
                            textDecoration: "none",
                            fontSize: "14px",
                            marginBottom: "20px",
                            paddingBottom: "16px",
                            borderBottom: "1px solid #252525",
                        }}
                    >
                        ← DevVault Home
                    </Link>

                    <h3
                        style={{
                            margin: "0 0 18px",
                            fontSize: "13px",
                            letterSpacing: "1.5px",
                            color: "#666",
                        }}
                    >
                        NODE.JS
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                        }}
                    >
                        <Link
                            href="/Node.js"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                                borderRadius: "6px",
                                background: "#151515",
                            }}
                        >
                            Overview
                        </Link>

                        <Link href="/Node.js/basics" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Node.js Basics
                        </Link>

                        <Link href="/Node.js/Modules" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Modules
                        </Link>

                        <Link href="/Node.js/NPM" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            npm
                        </Link>

                        <Link href="/Node.js/FS" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            File System
                        </Link>

                        <Link href="/Node.js/HTTP" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            HTTP
                        </Link>

                        <Link href="/Node.js/ASYNC" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Asynchronous Programming
                        </Link>

                        <Link href="/Node.js/EXJ" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Express.js
                        </Link>

                        <Link href="/Node.js/RA" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            REST APIs
                        </Link>

                        <Link href="/Node.js/DB" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Databases
                        </Link>

                        <Link href="/Node.js/Authentication" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Authentication
                        </Link>
                    </div>
                </aside>

                <main
                    style={{
                        flex: 1,
                        minWidth: 0,
                        boxSizing: "border-box",
                        padding: "48px",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "1100px",
                        }}
                    >
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}