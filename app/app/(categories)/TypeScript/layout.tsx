import Link from "next/link";

export default function TypeScriptLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const links = [
        ["Overview", "/TypeScript"],
        ["Basic Types", "/TypeScript/Basic_Types"],
        ["Type Interface", "/TypeScript/TI"],
        ["Type Annotations", "/TypeScript/TA"],
        ["Union", "/TypeScript/UA"],
        ["Type Narrowing", "/TypeScript/Tn"],
        ["Interfaces", "/TypeScript/Interfaces"],
        ["Type Alias", "/TypeScript/TypeA"],
        ["Functions", "/TypeScript/Fn"],
        ["Objects", "/TypeScript/Obj"],
        ["Arrays", "/TypeScript/Arr"],
        ["Generics", "/TypeScript/Gen"],
        ["Enums", "/TypeScript/Enums"],
        ["Classes", "/TypeScript/cl"],
        ["Modules", "/TypeScript/module"],
        ["Utility Types", "/TypeScript/UT"],
        ["Advanced Types", "/TypeScript/At"],
    ];

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#050505",
                color: "white",
                lineHeight:"1.6"
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
                    href="/TypeScript"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    TypeScript
                </Link>

                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        // overflowX: "auto",
                        maxWidth: "75%",
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
                        TYPESCRIPT
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
                                        href === "/TypeScript"
                                            ? "white"
                                            : "#aaa",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
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