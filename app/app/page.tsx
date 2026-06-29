"use client";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/page";
import { Poiret_One } from "next/font/google";
const a = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="div" style={{display:"flex"}}>
      
      <Sidebar />
       <h1 style={{color:"black",}}>DevVault</h1>
      <p className="content">
       
        Welcome to DevVault 🚀
Your central hub for building and debugging the full stack. This space is designed to hold your quick-reference guides, code snippets, and architectural breakdowns.

System Architecture Overview
The platform divides full-stack development into three distinct layers. Select a module from the sidebar to begin populating this workspace:

Frontend Ecosystem: Core UI building blocks, state synchronization, type safety, and server-side rendering frameworks (React, Next.js, TypeScript).

Backend Services: Server environments, routing architectures, middleware configuration, and REST/GraphQL API design (Node.js, Express).

Data Layer: Schema design, indexing strategies, non-relational document storage, and relational query optimization (MongoDB, PostgreSQL).

Workspace Configuration
To begin integrating documentation into the main content panel, ensure your routing layer maps the sidebar navigation keys directly to their corresponding markdown or data components.

{/* JavaScript
// Example component routing logic
const renderContent = (activeTab) => {
  switch(activeTab) {
    case 'react': return <ReactDocs />;
    case 'nodejs': return <NodeDocs />;
    default: return <HomeDashboard />;
  }
}; */}
      </p>
    </div>
  );
}
