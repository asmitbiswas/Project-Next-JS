// import Sidebar from "@/app/components/page";

export default function DataFetching() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Data Fetching</h1>

        <p>
          Data fetching is the process of retrieving data from a database,
          API, or another external source. In Next.js, Server Components
          can fetch data directly using the JavaScript{" "}
          <code>fetch()</code> function.
        </p>

        <h2>Why Data Fetching?</h2>

        <p>
          Most applications display dynamic data such as users, products,
          blog posts, weather information, or dashboards. Data fetching
          allows your application to display up-to-date information.
        </p>

        <h2>Basic Example</h2>

        <pre
        style={{
            overflowX:"auto",
            padding:"14px",
            background:"#111",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`export default async function Users() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await res.json();

  return (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
        </pre>

        <h2>Fetching Steps</h2>

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
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Step</th>
              <th
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Description</th>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >1</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >Call the fetch() function.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >2</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Wait for the response using await.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >3</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >Convert the response into JSON.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >4</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Display the fetched data.</td>
            </tr>
          </tbody>
        </table>

        <h2>Fetching from an API</h2>

        <pre
          style={{
            overflowX:"auto",
            padding:"14px",
            background:"#111",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`const res = await fetch(
  "https://jsonplaceholder.typicode.com/posts"
);

const posts = await res.json();`}
        </pre>

        <h2>Caching Options</h2>

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
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Option</th>
              <th
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Description</th>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >cache: "force-cache"</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >Uses cached data whenever possible.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >cache: "no-store"</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Always fetches fresh data.</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >next: {"{ revalidate: 60 }"}</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
              
              }}
              >Revalidates cached data every 60 seconds.</td>
            </tr>
          </tbody>
        </table>

        <h2>Example with No Cache</h2>

        <pre
          style={{
            overflowX:"auto",
            padding:"14px",
            background:"#111",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13, 200, 13)"
        }}
        >
{`const res = await fetch(
  "https://jsonplaceholder.typicode.com/users",
  {
    cache: "no-store",
  }
);`}
        </pre>

        <h2>Best Practices</h2>

        <ul>
          <li>Fetch data inside Server Components whenever possible.</li>
          <li>Handle loading and error states.</li>
          <li>Use caching when appropriate.</li>
          <li>Avoid unnecessary API requests.</li>
          <li>Keep API URLs secure.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Forgetting to use await.</li>
          <li>Ignoring loading states.</li>
          <li>Ignoring error handling.</li>
          <li>Fetching the same data multiple times.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Data fetching is one of the most important features of Next.js.
          Server Components make it easy to fetch data directly using
          <code>fetch()</code>, allowing applications to display dynamic
          content efficiently while benefiting from built-in caching and
          revalidation features.
        </p>
      </div>
    </div>
  );
}