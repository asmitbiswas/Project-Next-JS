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
                    href="/TypeScript"
                    style={{
                        flexShrink: 0,
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
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        overflowX: "auto",
                        overflowY: "hidden",
                    }}
                >
                    {links.map(([name, href]) => (
                        <Link
                            key={href}
                            href={href}
                            style={{
                                flexShrink: 0,
                                color:
                                    href === "/TypeScript"
                                        ? "white"
                                        : "#aaa",
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
                        TYPESCRIPT
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                        }}
                    >
                        {links.map(([name, href]) => (
                            <Link
                                key={href}
                                href={href}
                                style={{
                                    display: "block",
                                    padding: "7px 10px",
                                    borderRadius: "6px",
                                    color:
                                        href === "/TypeScript"
                                            ? "white"
                                            : "#aaa",
                                    background:
                                        href === "/TypeScript"
                                            ? "#151515"
                                            : "transparent",
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