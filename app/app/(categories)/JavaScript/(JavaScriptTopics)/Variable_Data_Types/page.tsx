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
            padding:"14px"
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

        <pre>
{`let age = 18;
age = 19;

console.log(age);`}
        </pre>

        <p>
          Variables declared with <code>let</code> can be reassigned but
          cannot be redeclared in the same scope.
        </p>

        <h2>const</h2>

        <pre>
{`const pi = 3.14159;

console.log(pi);`}
        </pre>

        <p>
          Variables declared with <code>const</code> cannot be reassigned.
        </p>

        <h2>Difference Between var, let, and const</h2>

        <table>
          <tbody>
            <tr>
              <th>Feature</th>
              <th>var</th>
              <th>let</th>
              <th>const</th>
            </tr>

            <tr>
              <td>Redeclare</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>

            <tr>
              <td>Reassign</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
            </tr>

            <tr>
              <td>Block Scope</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>

        <h2>What are Data Types?</h2>

        <p>
          Data types specify the type of value stored in a variable.
        </p>

        <h2>Primitive Data Types</h2>

        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Example</th>
            </tr>

            <tr>
              <td>String</td>
              <td>"Hello"</td>
            </tr>

            <tr>
              <td>Number</td>
              <td>42</td>
            </tr>

            <tr>
              <td>Boolean</td>
              <td>true</td>
            </tr>

            <tr>
              <td>Undefined</td>
              <td>undefined</td>
            </tr>

            <tr>
              <td>Null</td>
              <td>null</td>
            </tr>

            <tr>
              <td>BigInt</td>
              <td>123n</td>
            </tr>

            <tr>
              <td>Symbol</td>
              <td>Symbol()</td>
            </tr>
          </tbody>
        </table>

        <h2>Examples</h2>

        <pre>
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

        <pre>
{`let language = "JavaScript";

console.log(typeof language);`}
        </pre>

        <h2>Output</h2>

        <pre>
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
