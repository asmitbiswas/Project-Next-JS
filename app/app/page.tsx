import Link from "next/link";

export default function Home() {
    const technologies = [
        ["JavaScript", "/JavaScript"],
        ["TypeScript", "/TypeScript"],
        ["React", "/React"],
        ["Next.js", "/Next-JS"],
        ["Node.js", "/Node.js"],
        ["Go", "/Go"],
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    borderBottom: "1px solid #252525",
                    background: "#080808",
                }}
            >
                <Link
                    href="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    DevVault
                </Link>

                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "14px",
                        }}
                    >
                        Home
                    </Link>
                </nav>
            </header>

            <main
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "80px 48px",
                }}
            >
                <section>
                    <p
                        style={{
                            color: "#666",
                            fontSize: "13px",
                            letterSpacing: "2px",
                            marginBottom: "12px",
                        }}
                    >
                        DEVELOPER KNOWLEDGE BASE
                    </p>

                    <h1
                        style={{
                            fontSize: "52px",
                            lineHeight: "1.1",
                            margin: "0 0 20px",
                        }}
                    >
                        Welcome to DevVault.
                    </h1>

                    <p
                        style={{
                            color: "#aaa",
                            fontSize: "18px",
                            maxWidth: "700px",
                            lineHeight: "1.8",
                        }}
                    >
                        A personal vault for learning programming,
                        development, frameworks, and everything in
                        between.
                    </p>
                </section>

                <section style={{ marginTop: "70px" }}>
                    <h2
                        style={{
                            fontSize: "26px",
                            marginBottom: "24px",
                        }}
                    >
                        Explore
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "16px",
                        }}
                    >
                        {technologies.map(([name, href]) => (
                            <Link
                                key={href}
                                href={href}
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    border: "1px solid #252525",
                                    borderRadius: "10px",
                                    padding: "24px",
                                    background: "#080808",
                                    transition: "border-color 0.2s",
                                }}
                            >
                                <h3
                                    style={{
                                        margin: "0 0 8px",
                                        fontSize: "20px",
                                    }}
                                >
                                    {name}
                                </h3>

                                <p
                                    style={{
                                        margin: 0,
                                        color: "#777",
                                        fontSize: "14px",
                                    }}
                                >
                                    Explore {name} concepts →
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>

                <section
                    style={{
                        marginTop: "70px",
                        padding: "28px",
                        border: "1px solid #252525",
                        borderRadius: "10px",
                        background: "#080808",
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 10px",
                            fontSize: "24px",
                        }}
                    >
                        Keep Learning.
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            color: "#888",
                        }}
                    >
                        Pick a technology and start building.
                    </p>
                </section>
            </main>
        </div>
    );
}