import Sidebar from "@/app/components/page";
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
        {children}
      </div>
    </div>
  );
}