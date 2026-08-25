import Link from "next/link";

export default function JavaScriptLayout({
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
                    href="/JavaScript"
                    style={{
                        flexShrink: 0,
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    JavaScript
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
                    <Link href="/JavaScript" style={{ color: "white", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Overview
                    </Link>

                    <Link href="/JavaScript/Introduction_to_JavaScript" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Introduction
                    </Link>

                    <Link href="/JavaScript/Variable_Data_Types" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Variables & Data Types
                    </Link>

                    <Link href="/JavaScript/Operators" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Operators
                    </Link>

                    <Link href="/JavaScript/CT" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Conditionals
                    </Link>

                    <Link href="/JavaScript/Loops" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Loops
                    </Link>

                    <Link href="/JavaScript/Functions" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Functions
                    </Link>

                    <Link href="/JavaScript/Arrays" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Arrays
                    </Link>

                    <Link href="/JavaScript/Objects" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Objects
                    </Link>

                    <Link href="/JavaScript/Strings" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Strings
                    </Link>

                    <Link href="/JavaScript/DOM_Manuplation" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        DOM
                    </Link>

                    <Link href="/JavaScript/Events" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Events
                    </Link>

                    <Link href="/JavaScript/ES6" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        ES6
                    </Link>

                    <Link href="/JavaScript/Promises" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Promises
                    </Link>

                    <Link href="/JavaScript/Async_Await" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Async/Await
                    </Link>

                    <Link href="/JavaScript/modules" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Modules
                    </Link>

                    <Link href="/JavaScript/Error_Handling" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Error Handling
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
                        JAVASCRIPT
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                        }}
                    >
                        <Link href="/JavaScript" style={{ color: "white", textDecoration: "none", fontSize: "14px", padding: "7px 10px", borderRadius: "6px", background: "#151515" }}>
                            Overview
                        </Link>

                        <Link href="/JavaScript/Introduction_to_JavaScript" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Introduction to JavaScript
                        </Link>

                        <Link href="/JavaScript/Variable_Data_Types" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Variables and Data Types
                        </Link>

                        <Link href="/JavaScript/Operators" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Operators
                        </Link>

                        <Link href="/JavaScript/CT" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Conditional Statements
                        </Link>

                        <Link href="/JavaScript/Loops" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Loops
                        </Link>

                        <Link href="/JavaScript/Functions" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Functions
                        </Link>

                        <Link href="/JavaScript/Arrays" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Arrays
                        </Link>

                        <Link href="/JavaScript/Objects" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Objects
                        </Link>

                        <Link href="/JavaScript/Strings" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Strings
                        </Link>

                        <Link href="/JavaScript/DOM_Manuplation" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            DOM Manipulation
                        </Link>

                        <Link href="/JavaScript/Events" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Events
                        </Link>

                        <Link href="/JavaScript/ES6" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            ES6 Features
                        </Link>

                        <Link href="/JavaScript/Promises" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Promises
                        </Link>

                        <Link href="/JavaScript/Async_Await" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Async/Await
                        </Link>

                        <Link href="/JavaScript/modules" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Modules
                        </Link>

                        <Link href="/JavaScript/Error_Handling" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Error Handling
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