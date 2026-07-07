import Sidebar from "@/app/components/page";

export default function ReactRouter() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>React Router</h1>

        <p>
          React Router is a library that enables navigation between different
          pages in a React application without reloading the browser.
        </p>

        <h2>Why React Router?</h2>

        <p>
          Single Page Applications (SPAs) display different pages while keeping
          the application running. React Router makes this possible.
        </p>

        <h2>Installation</h2>

        <pre
        style={{
            background:"#111",
            overflowX:"auto",
            padding:"18px",
            borderRadius:"10px"
        }}
        >
{`npm install react-router-dom`}
        </pre>

        <h2>Basic Example</h2>

        <pre
           style={{
            background:"#111",
            overflowX:"auto",
            padding:"18px",
            borderRadius:"10px"
        }}
        >
{`import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}`}
        </pre>

        <h2>Navigation</h2>

        <pre
           style={{
            background:"#111",
            overflowX:"auto",
            padding:"18px",
            borderRadius:"10px"
        }}
        >
{`import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}`}
        </pre>

        <h2>Main Components</h2>

        <table
        style={{
            borderCollapse:"collapse",
            // padding:"10px",
            width:"100%",
            border:"1px solid white",
            margin:"25 0 px"
        }}
        >
          <tbody>
            <tr>
              <th
              style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Component</th>
              <th
                style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Purpose</th>
            </tr>

            <tr>
              <td
                style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >BrowserRouter</td>
              <td
                style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Wraps the application.</td>
            </tr>

            <tr>
              <td
                style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Routes</td>
              <td
              
                style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}>Groups all routes.</td>
            </tr>

            <tr>
              <td
                style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
                >Route</td>
              <td
                    style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Defines a page.</td>
            </tr>

            <tr>
              <td
                    style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Link</td>
              <td
                    style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Navigates without page reload.</td>
            </tr>

            <tr>
              <td
                    style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >useNavigate</td>
              <td
                    style={{
                textAlign:"left",
                padding:"10px", 
                border:"1px solid white"
              }}
              >Programmatic navigation.</td>
            </tr>
          </tbody>
        </table>

        <h2>Programmatic Navigation</h2>

        <pre
           style={{
            background:"#111",
            overflowX:"auto",
            padding:"18px",
            borderRadius:"10px"
        }}
        >
{`import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Go to About
    </button>
  );
}`}
        </pre>

        <h2>Advantages</h2>

        <ul>
          <li>Fast navigation.</li>
          <li>No full page reloads.</li>
          <li>Supports nested routes.</li>
          <li>Easy page management.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Forgetting BrowserRouter.</li>
          <li>Using href instead of Link.</li>
          <li>Incorrect route paths.</li>
          <li>Importing from the wrong package.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          React Router is the standard routing library for React. It enables
          smooth navigation between pages, making Single Page Applications fast
          and user-friendly.
        </p>

      </div>
    </div>
  );
}