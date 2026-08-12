import Link from "next/link";

export default function NodeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const links = [
        ["Overview", "/Node.js"],
        ["Node.js Basics", "/Node.js/basics"],
        ["Modules", "/Node.js/Modules"],
        ["npm", "/Node.js/NPM"],
        ["File System", "/Node.js/FS"],
        ["HTTP", "/Node.js/HTTP"],
        ["Asynchronous Programming", "/Node.js/ASYNC"],
        ["Express.js", "/Node.js/EXJ"],
        ["REST APIs", "/Node.js/RA"],
        ["Databases", "/Node.js/DB"],
        ["Authentication", "/Node.js/AUTH"],
    ];

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#050505",
                color: "white",
            }}
        >
            
            <header
                style={{
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    borderBottom: "1px solid #252525",
                    background: "#080808",
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                }}
            >
                <Link
                    href="/Node.js"
                    style={{
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
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        overflowX: "auto",
                    }}
                >
                    {links.map(([name, href]) => (
                        <Link
                            key={href}
                            href={href}
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {name}
                        </Link>
                    ))}
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
                            gap: "14px",
                        }}
                    >
                        {links.map(([name, href]) => (
                            <Link
                                key={href}
                                href={href}
                                style={{
                                    color:
                                        href === "/Node.js"
                                            ? "white"
                                            : "#aaa",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                }}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </aside>

            
                <main
                    style={{
                        flex: 1,
                        minWidth: 0,
                        maxWidth: "1100px",
                        padding: "48px",
                    }}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}