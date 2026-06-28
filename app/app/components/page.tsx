import Link from "next/link";
import "./Sidebar.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo"> DevVault</h1>

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