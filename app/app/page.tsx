"use client";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/page";
import { Poiret_One } from "next/font/google";
import styles from "./styles.css";
const a = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="div" style={{display:"flex", background:"black", color:"white"}}>
      
      <Sidebar />
   <div style={{margin:"80px auto", padding:"0 30px", maxWidth:"800px", lineHeight:"1.8"}}>
    <h1>Welcome to DevVault 👋</h1>

    <p>
        DevVault is a project I built to keep everything I'm learning in one
        place. Instead of searching through dozens of browser tabs or bookmarks,
        I can quickly find notes, code examples, and explanations whenever I
        need them.
    </p>

    <p>
        Whether it's React hooks, Next.js routing, JavaScript concepts, or
        backend topics, everything is organized into categories so learning
        feels less chaotic.
    </p>

    <h2>What's inside?</h2>

    <ul>
        <li>React documentation and hooks</li>
        <li>Next.js App Router</li>
        <li>JavaScript concepts</li>
        <li>Node.js & Express</li>
        <li>MongoDB & PostgreSQL</li>
    </ul>

    <h2>Why I made this</h2>

    <p>
        I wanted a place where I could learn, revise, and quickly look things
        up while building projects. DevVault is becoming my personal developer
        handbook, and I'll continue adding new topics as I learn.
    </p>

    <p>
        Pick a technology from the sidebar and start exploring.
    </p>
</div>
    </div>
  );
}
