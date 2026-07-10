import Sidebar from "@/app/components/page";

export default function Metadata() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Metadata</h1>

        <p>
          Metadata provides information about a web page that is not directly
          visible to users. It helps search engines, browsers, and social media
          platforms understand your page.
        </p>

        <h2>Why Metadata?</h2>

        <p>
          Metadata improves SEO (Search Engine Optimization), browser titles,
          social media previews, and the overall user experience.
        </p>

        <h2>Basic Example</h2>

        <pre
        style={{
            // borderCollapse:"collapse",
            overflowX:"auto",
            background:"#111",
            padding:"14px",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevVault",
  description: "Learn Web Development",
};

export default function Home() {
  return <h1>Home Page</h1>;
}`}
        </pre>

        <h2>Common Metadata Properties</h2>

        <table
        style={{
            borderCollapse:"collapse",
            overflowX:"auto",
            margin:"25 0",
            width:"100%",
            border:"1px solid #444"
        }}
        >
          <tbody>
            <tr>
              <th
              style={{
                padding:"14px",
                border:"1px solid #444",
                background:"#111"
              }}
              >Property</th>
              <th
                 style={{
                padding:"14px",
                border:"1px solid #444",
                background:"#111"
              }}
              >Description</th>
            </tr>

            <tr>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444",
              }}
              >title</td>
              <td
                  style={{
                padding:"14px",
                border:"1px solid #444",
              }}
              >Sets the page title.</td>
            </tr>

            <tr>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444",
                background:"#111"
              }}
              >description</td>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444",
                background:"#111"
              }}
              >Provides a short page description.</td>
            </tr>

            <tr>
              <td
                  style={{
                padding:"14px",
                border:"1px solid #444",
              }}

              
              >keywords</td>
              <td
                  style={{
                padding:"14px",
                border:"1px solid #444",
              }}
              >Specifies important keywords.</td>
            </tr>

            <tr>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444",
                background:"#111"
              }}
              >authors</td>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444",
                background:"#111"
              }}
              >Defines the page author.</td>
            </tr>

            <tr>
              <td
                   style={{
                padding:"14px",
                border:"1px solid #444",
              }}
              >icons</td>
              <td
                   style={{
                padding:"14px",
                border:"1px solid #444",
              }}
              >Sets the website favicon.</td>
            </tr>
          </tbody>
        </table>

        <h2>Example with More Metadata</h2>

        <pre
            style={{
            // borderCollapse:"collapse",
            overflowX:"auto",
            background:"#111",
            padding:"14px",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevVault",
  description: "Modern Web Development Documentation",
  keywords: ["React", "Next.js", "Node.js"],
  authors: [{ name: "Asmit" }],
};`}
        </pre>

        <h2>Dynamic Metadata</h2>

        <p>
          Next.js allows you to generate metadata dynamically using the
          <code>generateMetadata()</code> function.
        </p>

        <pre
            style={{
            // borderCollapse:"collapse",
            overflowX:"auto",
            background:"#111",
            padding:"14px",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dynamic Page",
    description: "Generated dynamically",
  };
}`}
        </pre>

        <h2>Benefits</h2>

        <ul>
          <li>Improves SEO.</li>
          <li>Creates better browser tab titles.</li>
          <li>Enhances social media sharing.</li>
          <li>Provides useful information to search engines.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Write unique titles for every page.</li>
          <li>Keep descriptions short and meaningful.</li>
          <li>Use relevant keywords.</li>
          <li>Add a favicon using the icons property.</li>
          <li>Generate metadata dynamically when needed.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Metadata is an essential feature of Next.js that helps define
          information about your pages. It improves SEO, browser titles,
          search engine visibility, and social media previews while making
          your application more professional.
        </p>
      </div>
    </div>
  );
}