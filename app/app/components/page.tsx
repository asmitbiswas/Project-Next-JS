import Link from "next/link";
import "./Sidebar.css";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo"> DevVault (⌐■_■)⌐¯</h1>

      <input
        className="search"
        type="text"
        placeholder="Search..."
      />

      <h3>Frontend</h3>

      <nav>
        <Link href="/"> Home</Link>
        <Link href="/React"> React</Link>
        <Link href="/Next.js"> Next.js</Link>
        <Link href="/JavaScript"> JavaScript</Link>
        <Link href="/TypeScript"> TypeScript</Link>
      </nav>

      <h3>Backend</h3>

      <nav>
        <Link href="/Node"> Node.js</Link>
        <Link href="/Express"> Express</Link>
      </nav>

      <h3>Database</h3>

      <nav>
        <Link href="/MongoDB"> MongoDB</Link>
        <Link href="/PostgreSQL"> PostgreSQL</Link>
      </nav>
    </aside>
  );
}