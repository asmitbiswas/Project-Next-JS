import Link from "next/link";

export default function ReactLayout({
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    borderBottom: "1px solid #252525",
                    background: "#080808",
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                }}
            >
                <Link
                    href="/React"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    React
                </Link>

                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        maxWidth: "75%",
                        overflowX: "auto",
                    }}
                >
                    <Link href="/React" style={{ color: "white", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Overview
                    </Link>

                    <Link href="/React/Basics" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Basics
                    </Link>

                    <Link href="/React/JSX" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        JSX
                    </Link>

                    <Link href="/React/Components" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Components
                    </Link>

                    <Link href="/React/Props" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Props
                    </Link>

                    <Link href="/React/State" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        State
                    </Link>

                    <Link href="/React/Events" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Events
                    </Link>

                    <Link href="/React/Conditional" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Conditional Rendering
                    </Link>

                    <Link href="/React/Lists" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Lists & Keys
                    </Link>

                    <Link href="/React/Hooks" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Hooks
                    </Link>

                    <Link href="/React/Forms" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Forms
                    </Link>

                    <Link href="/React/Context" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Context
                    </Link>

                    <Link href="/React/Refs" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Refs
                    </Link>

                    <Link href="/React/Performance" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", whiteSpace: "nowrap" }}>
                        Performance
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
                        REACT
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                        }}
                    >
                        <Link href="/React" style={{ color: "white", textDecoration: "none", fontSize: "14px", padding: "7px 10px", borderRadius: "6px", background: "#151515" }}>
                            Overview
                        </Link>

                        <Link href="/React/Introduction_to_React" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Basics
                        </Link>

                        <Link href="/React/JSX" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            JSX
                        </Link>

                        <Link href="/React/Componentss" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Components
                        </Link>

                        <Link href="/React/Props" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Props
                        </Link>

                        <Link href="/React/State" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            State
                        </Link>

                        <Link href="/React/Events" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Events
                        </Link>

                        <Link href="/React/Conditional" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Conditional Rendering
                        </Link>

                        <Link href="/React/Lists" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Lists & Keys
                        </Link>

                        <Link href="/React/Hooks" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Hooks
                        </Link>

                        <Link href="/React/Forms" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Forms
                        </Link>

                        <Link href="/React/Context" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Context
                        </Link>

                        <Link href="/React/Refs" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Refs
                        </Link>

                        <Link href="/React/Performance" style={{ color: "#aaa", textDecoration: "none", fontSize: "14px", padding: "7px 10px" }}>
                            Performance
                        </Link>
                    </div>
                </aside>

                <main
                    style={{
                        flex: 1,
                        minWidth: 0,
                        padding: "48px",
                    }}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}