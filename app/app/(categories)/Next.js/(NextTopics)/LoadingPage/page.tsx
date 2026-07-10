// import Sidebar from "@/app/components/page";

export default function LoadingPage() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Loading UI</h1>

        <p>
          Next.js provides a special <code>loading.tsx</code> file to display
          a loading interface while a page or route is being rendered.
          This improves the user experience by giving immediate visual
          feedback instead of showing a blank screen.
        </p>

        <h2>Folder Structure</h2>

        <pre
        style={{
            overflowX:"auto",
            borderRadius:"12px",
            background:"#111",
            padding:"14px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`app/
├── dashboard/
│   ├── page.tsx
│   └── loading.tsx`}
        </pre>

        <h2>Example</h2>

        <pre
               style={{
            overflowX:"auto",
            borderRadius:"12px",
            background:"#111",
            padding:"14px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`export default function Loading() {
  return <h2>Loading...</h2>;
}`}
        </pre>

        <h2>How It Works</h2>

        <ul>
          <li>Create a <code>loading.tsx</code> file inside a route.</li>
          <li>Next.js automatically displays it while the page loads.</li>
          <li>Once loading is complete, the actual page replaces it.</li>
        </ul>

        <h2>Common Use Cases</h2>

        <ul>
          <li>Fetching data from an API.</li>
          <li>Loading dashboards.</li>
          <li>Displaying skeleton screens.</li>
          <li>Improving perceived performance.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Keep loading components lightweight.</li>
          <li>Use skeleton loaders instead of plain text when possible.</li>
          <li>Provide immediate visual feedback.</li>
          <li>Keep the loading UI consistent with your application.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          The <code>loading.tsx</code> file automatically displays a loading
          interface while a route is rendering, creating a smoother user
          experience.
        </p>
      </div>
    </div>
  );
}