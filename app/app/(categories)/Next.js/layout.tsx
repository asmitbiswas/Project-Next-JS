// Link
import Sidebar from "@/app/components/page";
import Link from "next/link";
export default function NextJSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          maxWidth: "900px",
          lineHeight: "1.8",
        }}
      >
          <pre style={{
            fontSize:"13px",
            lineHeight:"1.8"
          }}></pre>

        {/* <ul>
            <li style={{color:"white"}}></li>
        </ul> */}

        <Link href="/" style={{textDecoration:"none"}}></Link>
        {children}
      </div>
    </div>
  );
}