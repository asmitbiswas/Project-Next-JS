
export default function MongoDBLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#050505",
                color: "white",
            }}
        >


            <main
                style={{
                    marginLeft: "280px",
                    minHeight: "100vh",
                    padding: "40px",
                }}
            >
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {children}
                </div>
            </main>
        </div>
    );
}