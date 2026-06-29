"use client";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./components/page";


export default function Home() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
      <p className="content">
     <h1>Welcome to DevVault</h1>
<p>Your central hub for building, debugging, and documenting the full stack. This workspace is built for quick-reference guides, operational checklists, and system architectural patterns.</p>

<h2>System Architecture Modules</h2>
<h3>Frontend Ecosystem</h3>
<p>Core UI building blocks, state synchronization, type safety, and framework architectures.</p>

<strong>React:</strong> Component lifecycles, local state mechanics, and optimized hook patterns.

<strong>Next.js:</strong> Server-side rendering paradigms, dynamic routing configurations, and data fetching strategies.

<strong>TypeScript:</strong> Static typing boundaries, interface declarations, and strict type safety setups.

<h3>Backend Services</h3>
<p>Server environments, scalable routing systems, custom middleware pipelines, and API design.</p>

<strong>Node.js:</strong> Event-driven architecture, file system operations, and asynchronous runtime execution.

<strong>Express:</strong> REST API endpoints, routing patterns, controller layers, and error-handling middleware.

<h3>Database Systems</h3>
<p>Data modeling structures, indexing mechanics, and storage optimization.</p>

<strong>MongoDB:</strong> Document schemas, aggregation pipelines, and non-relational storage clusters.

<strong>PostgreSQL:</strong> Relational data normalization, complex SQL joins, indexing, and transactional integrity.

<h2>Deployment Checklist</h2>
Ensure all environment variables are securely loaded via production configurations.

Verify structural CORS policies match your specific frontend client domains.

Execute production build optimization steps to minimize code payload sizes.
      </p>
    </div>
  );
}
