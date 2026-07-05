export default function ReactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      {/* <Sidebar /> */}

      <div
        style={{
          maxWidth: "900px",
          marginLeft: "280px",
          lineHeight: "1.8",
        }}
      >
        {children}
      </div>
    </div>
  );
}  
