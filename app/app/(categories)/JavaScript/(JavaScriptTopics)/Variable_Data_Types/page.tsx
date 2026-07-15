// import Sidebar from "@/app/components/page";

export default function VariablesAndDataTypes() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Variables and Data Types</h1>

        <p>
          Variables are containers used to store data in JavaScript.
          Data Types define the kind of value stored inside a variable.
        </p>

        <h2>What is a Variable?</h2>

        <p>
          A variable is a named storage location that can hold a value.
          Variables allow us to store, update, and use data throughout
          a program.
        </p>

        <h2>Declaring Variables</h2>

        <p>
          JavaScript provides three ways to declare variables:
        </p>

        <ul>
          <li>var</li>
          <li>let</li>
          <li>const</li>
        </ul>

        <h2>var</h2>

        <pre
        style={{
            overflowX:"auto",
            padding:"14px",
            borderRadius:"12px",
            background:"#111",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`var name = "DevVault";
console.log(name);`}
        </pre>

        <p>
          Variables declared with <code>var</code> can be reassigned and
          redeclared.
        </p>

        <h2>let</h2>

        <pre
          style={{
            overflowX:"auto",
            padding:"14px",
            borderRadius:"12px",
            background:"#111",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`let age = 18;
age = 19;

console.log(age);`}
        </pre>

        <p>
          Variables declared with <code>let</code> can be reassigned but
          cannot be redeclared in the same scope.
        </p>

        <h2>const</h2>

        <pre
          style={{
            overflowX:"auto",
            padding:"14px",
            borderRadius:"12px",
            background:"#111",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`const pi = 3.14159;

console.log(pi);`}
        </pre>

        <p>
          Variables declared with <code>const</code> cannot be reassigned.
        </p>

        <h2>Difference Between var, let, and const</h2>

        <table
        style={{
            borderCollapse:"collapse",
            width:"100%",
            margin:"25 0",
            overflowX:"auto",
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
              >Feature</th>
              <th
                   style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >var</th>
              <th
                   style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >let</th>
              <th
                   style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >const</th>
            </tr>

            <tr>
              <td
              style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Redeclare</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Yes</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >No</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >No</td>
            </tr>

            <tr>
              <td
                   style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Reassign</td>
              <td
                   style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Yes</td>
              <td
                   style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Yes</td>
              <td
                   style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >No</td>
            </tr>

            <tr>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Block Scope</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >No</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Yes</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Yes</td>
            </tr>
          </tbody>
        </table>

        <h2>What are Data Types?</h2>

        <p>
          Data types specify the type of value stored in a variable.
        </p>

        <h2>Primitive Data Types</h2>

        <table
              style={{
            borderCollapse:"collapse",
            width:"100%",
            margin:"25 0",
            overflowX:"auto",
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
              >Type</th>
              <th
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Example</th>
            </tr>

            <tr>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >String</td>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >"Hello"</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Number</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >42</td>
            </tr>

            <tr>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Boolean</td>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >true</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Undefined</td>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >undefined</td>
            </tr>

            <tr>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Null</td>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >null</td>
            </tr>

            <tr>
              <td
               style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >BigInt</td>
              <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >123n</td>
            </tr>

            <tr>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Symbol</td>
              <td
                 style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Symbol()</td>
            </tr>
          </tbody>
        </table>

        <h2>Examples</h2>

        <pre
          style={{
            overflowX:"auto",
            padding:"14px",
            borderRadius:"12px",
            background:"#111",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`let username = "Asmit";
let age = 12;
let isCoding = true;

console.log(username);
console.log(age);
console.log(isCoding);`}
        </pre>

        <h2>Checking Data Types</h2>

        <p>
          Use the <code>typeof</code> operator to check the type of a value.
        </p>

        <pre
          style={{
            overflowX:"auto",
            padding:"14px",
            borderRadius:"12px",
            background:"#111",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`let language = "JavaScript";

console.log(typeof language);`}
        </pre>

        <h2>Output</h2>

        <pre
             style={{
            overflowX:"auto",
            padding:"14px",
            borderRadius:"12px",
            background:"#111",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`string`}
        </pre>

        <h2>Best Practices</h2>

        <ul>
          <li>Prefer <code>const</code> by default.</li>
          <li>Use <code>let</code> when values need to change.</li>
          <li>Avoid using <code>var</code> in modern JavaScript.</li>
          <li>Use meaningful variable names.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Variables are used to store data, while data types define the
          kind of value being stored. Understanding variables and data
          types is essential because they form the foundation of every
          JavaScript program.
        </p>
      </div>
    </div>
  );
}
