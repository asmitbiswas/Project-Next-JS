import Link from "next/link";

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
        <Link href="/" style={{
            textDecoration:"none"
        }}></Link>
        <table
          style={{
            border: "1px solid white",
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          {/* <tbody>
            <tr>
              <th style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}></th>
              <th style={{ border: "1px solid white", padding: "10px", textAlign: "left" }}></th>
            </tr>
          </tbody> */}
        </table>
        {children}
      </div>
    </div>
  );
}  
