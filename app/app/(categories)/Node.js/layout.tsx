import Link from "next/link";

export default function NextJSLayout({
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
                    href="/Next-JS"
                    style={{
                        flexShrink: 0,
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    Next.js
                </Link>

                <nav
                    style={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        overflowX: "auto",
                        overflowY: "hidden",
                    }}
                >
                    <Link href="/Next-JS" style={{ color: "white", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Overview
                    </Link>

                    <Link href="/Next-JS/Introduction" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Introduction
                    </Link>

                    <Link href="/Next-JS/App_Router" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        App Router
                    </Link>

                    <Link href="/Next-JS/Pages_Router" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Pages Router
                    </Link>

                    <Link href="/Next-JS/Routing" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Routing
                    </Link>

                    <Link href="/Next-JS/Layouts" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Layouts
                    </Link>

                    <Link href="/Next-JS/Server_Components" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Server Components
                    </Link>

                    <Link href="/Next-JS/Client_Components" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Client Components
                    </Link>

                    <Link href="/Next-JS/Data_Fetching" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Data Fetching
                    </Link>

                    <Link href="/Next-JS/API" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        API
                    </Link>

                    <Link href="/Next-JS/Loading" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Loading
                    </Link>

                    <Link href="/Next-JS/Error_Handling" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Error Handling
                    </Link>

                    <Link href="/Next-JS/Metadata" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Metadata
                    </Link>

                    <Link href="/Next-JS/Deployment" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Deployment
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
                        overflowX: "hidden",
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
                        NEXT.JS
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                        }}
                    >
                        <Link href="/Next-JS" style={{ color: "white", textDecoration: "none", fontSize: "14px", padding: "7px 10px", borderRadius: "6px", background: "#151515" }}>
                            Overview
                        </Link>

                        <Link href="/Next-JS/Introduction" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Introduction
                        </Link>

                        <Link href="/Next-JS/App_Router" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            App Router
                        </Link>

                        <Link href="/Next-JS/Pages_Router" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Pages Router
                        </Link>

                        <Link href="/Next-JS/Routing" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Routing
                        </Link>

                        <Link href="/Next-JS/Layouts" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Layouts
                        </Link>

                        <Link href="/Next-JS/Server_Components" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Server Components
                        </Link>

                        <Link href="/Next-JS/Client_Components" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Client Components
                        </Link>

                        <Link href="/Next-JS/Data_Fetching" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Data Fetching
                        </Link>

                        <Link href="/Next-JS/API" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            API
                        </Link>

                        <Link href="/Next-JS/Loading" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Loading
                        </Link>

                        <Link href="/Next-JS/Error_Handling" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Error Handling
                        </Link>

                        <Link href="/Next-JS/Metadata" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Metadata
                        </Link>

                        <Link href="/Next-JS/Deployment" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Deployment
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