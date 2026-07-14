import Link from "next/link";

// import Sidebar from "@/app/components/page";

export default function NextJS() {
  return (
    <div >
      {/* <Sidebar /> */}

      <div>
        <h1>Next.js</h1>

        <p>
          Next.js is a React framework that helps developers build fast,
          scalable, and production-ready web applications. It extends React by
          providing features like file-based routing, server-side rendering,
          static site generation, API routes, image optimization, and much more.
        </p>

        <h2>Why Next.js?</h2>

        <p>
          React is responsible for building user interfaces, while Next.js
          provides the tools needed to build complete web applications. It
          simplifies routing, improves performance, and offers excellent SEO
          support out of the box.
        </p>

        <h2>Key Features</h2>

        <ul>
          <li>Built on top of React.</li>
          <li>File-based Routing.</li>
          <li>App Router.</li>
          <li>Server Components.</li>
          <li>Client Components.</li>
          <li>Server-Side Rendering (SSR).</li>
          <li>Static Site Generation (SSG).</li>
          <li>API Routes.</li>
          <li>Image Optimization.</li>
          <li>Metadata API.</li>
          <li>Loading & Error UI.</li>
          <li>Route Groups.</li>
          <li>Dynamic Routes.</li>
        </ul>

        <h2>Prerequisites</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React Fundamentals</li>
          <li>Node.js & npm</li>
        </ul>

        <h2>What You'll Learn</h2>

        <ul>
          <li><Link href="/Next.js/Creating_Next_Project" style={{color:"white"}}>Creating a Next.js project</Link></li>
          <li><Link href="/Next.js/Folder_Structure" style={{color:"white"}}>Folder Structure</Link></li>
          <li><Link href="/Next.js/App_Router" style={{color:"white"}}>App Router</Link></li>
          <li><Link href="/Next.js/Page_Layouts" style={{color:"white"}}>Pages & Layouts</Link></li>
          <li><Link href="/Next.js/Routing" style={{color:"white"}}>Routing</Link></li>
          <li><Link href="/Next.js/ServerClientComponents" style={{color:"white"}}>Server & Client Components</Link></li>
          <li><Link href="/Next.js/Navigation" style={{color:"white"}}>Navigation</Link></li>
          <li><Link href="/Next.js/LoadingPage" style={{color:"white"}}>Lodaing and error page</Link></li>
          <li><Link href="/Next.js/DataFetching" style={{color:"white"}}>Fetching Data</Link></li>
          <li><Link href="/Next.js/Metadata"  style={{color:"white"}}>MetaData</Link></li>
          <li><Link href="/Next.js/Api_Routes" style={{color:"white"}}>Api Routes</Link></li>
          <li><Link href="/Next.js/Deployment" style={{color:"white"}}>Deployment</Link></li>
        </ul>

        <h2>Why Learn Next.js?</h2>

        <p>
          Next.js is one of the most popular frameworks for modern React
          development. It is widely used for production applications because of
          its excellent performance, SEO capabilities, and developer
          experience.
        </p>

        <h2>Summary</h2>

        <p>
          Next.js combines the power of React with powerful built-in features,
          making it one of the best choices for building modern web
          applications. Throughout this section, you'll learn everything from
          creating your first project to building production-ready applications.
        </p>
      </div>
    </div>
  );
}