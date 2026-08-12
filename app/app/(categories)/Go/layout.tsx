import Link from "next/link";

export default function GoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#050505",
                color: "#fff",
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
                }}
            >
                <Link
                    href="/Go"
                    style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    Go
                </Link>

                <nav
                    style={{
                        display: "flex",
                        gap: "20px",
                    }}
                >
                    {[
                        ["Home", "/Go"],
                        ["Basics", "/Go/basics"],
                        ["Variables", "/Go/variables"],
                        ["Functions", "/Go/functions"],
                        ["Arrays", "/Go/arrays"],
                        ["Structs", "/Go/structs"],
                        ["Interfaces", "/Go/interfaces"],
                        ["Concurrency", "/Go/concurrency"],
                        ["HTTP", "/Go/http"],
                    ].map(([name, href]) => (
                        <Link
                            key={href}
                            href={href}
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
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
                        width: "230px",
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
                        GO
                    </h3>

                    {[
                        ["Overview", "/Go"],
                        ["Basics", "/Go/basics"],
                        ["Variables & Types", "/Go/variables"],
                        ["Functions", "/Go/functions"],
                        ["Arrays & Slices", "/Go/arrays"],
                        ["Structs", "/Go/structs"],
                        ["Interfaces", "/Go/interfaces"],
                        ["Error Handling", "/Go/errors"],
                        ["Goroutines & Channels", "/Go/concurrency"],
                        ["HTTP", "/Go/http"],
                        ["Databases", "/Go/database"],
                    ].map(([name, href]) => (
                        <Link
                            key={href}
                            href={href}
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                            }}
                        >
                            {name}
                        </Link>
                    ))}
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