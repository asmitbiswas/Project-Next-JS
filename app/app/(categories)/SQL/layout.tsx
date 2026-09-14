import Link from "next/link";

export default function SQLLayout({
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
                    href="/SQL"
                    style={{
                        flexShrink: 0,
                        color: "white",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: 700,
                    }}
                >
                    SQL
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
                    <Link
                        href="/SQL"
                        style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Overview
                    </Link>

                    <Link
                        href="/SQL/Basics"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        SQL Basics
                    </Link>

                    <Link
                        href="/SQL/SELECT"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        SELECT
                    </Link>

                    <Link
                        href="/SQL/INSERT"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        INSERT
                    </Link>

                    <Link
                        href="/SQL/UPDATE"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        UPDATE
                    </Link>

                    <Link
                        href="/SQL/DELETE"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        DELETE
                    </Link>

                    <Link
                        href="/SQL/WHERE"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        WHERE
                    </Link>

                    <Link
                        href="/SQL/JOINS"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        JOINs
                    </Link>

                    <Link
                        href="/SQL/GROUP-BY"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        GROUP BY
                    </Link>

                    <Link
                        href="/SQL/ORDER-BY"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        ORDER BY
                    </Link>

                    <Link
                        href="/SQL/Functions"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Functions
                    </Link>

                    <Link
                        href="/SQL/Constraints"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Constraints
                    </Link>

                    <Link
                        href="/SQL/Transactions"
                        style={{
                            color: "#aaa",
                            textDecoration: "none",
                            fontSize: "14px",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Transactions
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
                        SQL
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                        }}
                    >
                        <Link
                            href="/SQL"
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

                        <Link
                            href="/SQL/Basics"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            SQL Basics
                        </Link>

                        <Link
                            href="/SQL/SELECT"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            SELECT
                        </Link>

                        <Link
                            href="/SQL/INSERT"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            INSERT
                        </Link>

                        <Link
                            href="/SQL/UPDATE"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            UPDATE
                        </Link>

                        <Link
                            href="/SQL/DELETE"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            DELETE
                        </Link>

                        <Link
                            href="/SQL/WHERE"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            WHERE
                        </Link>

                        <Link
                            href="/SQL/JOINS"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            JOINs
                        </Link>

                        <Link
                            href="/SQL/GROUP-BY"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            GROUP BY
                        </Link>

                        <Link
                            href="/SQL/ORDER-BY"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            ORDER BY
                        </Link>

                        <Link
                            href="/SQL/Functions"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            Functions
                        </Link>

                        <Link
                            href="/SQL/Constraints"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            Constraints
                        </Link>

                        <Link
                            href="/SQL/Transactions"
                            style={{
                                color: "#aaa",
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "7px 10px",
                            }}
                        >
                            Transactions
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