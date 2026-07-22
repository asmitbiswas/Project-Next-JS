export default function Loops() {
  return (
    <div>

      <h1>Loops</h1>

      <p>
        Imagine writing the same piece of code over and over again.
        That would be slow and frustrating. Loops solve this problem by
        repeating a block of code for you.
      </p>

      <h2>Why Use Loops?</h2>

      <p>
        Loops make your code shorter, cleaner, and easier to maintain.
        They're commonly used to work with arrays, count numbers, or
        repeat a task multiple times.
      </p>

      <h2>Types of Loops</h2>

      <ul>
        <li>for Loop</li>
        <li>while Loop</li>
        <li>do...while Loop</li>
        <li>for...of Loop</li>
        <li>for...in Loop</li>
      </ul>

      <h2>for Loop</h2>

      <p>
        Use a <code>for</code> loop when you already know how many times
        the code should run.
      </p>

      <pre
      style={{
        borderLeft:"6px solid rgb(13 200 13)",
        padding:"14px",
        background:"#111",
        borderRadius:"12px"
      }}
      >
{`for (let i = 1; i <= 5; i++) {
    console.log(i);
}`}
      </pre>

      <h2>while Loop</h2>

      <p>
        A <code>while</code> loop keeps running as long as the condition
        is true.
      </p>

      <pre
           style={{
        borderLeft:"6px solid rgb(13 200 13)",
        padding:"14px",
        background:"#111",
        borderRadius:"12px"
      }}
      >
{`let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}`}
      </pre>

      <h2>do...while Loop</h2>

      <p>
        This loop always runs at least once because the condition is
        checked after the code executes.
      </p>

      <pre
           style={{
        borderLeft:"6px solid rgb(13 200 13)",
        padding:"14px",
        background:"#111",
        borderRadius:"12px"
      }}
      >
{`let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);`}
      </pre>

      <h2>for...of Loop</h2>

      <p>
        Use <code>for...of</code> to loop through arrays or other
        iterable objects.
      </p>

      <pre
           style={{
        borderLeft:"6px solid rgb(13 200 13)",
        padding:"14px",
        background:"#111",
        borderRadius:"12px"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}`}
      </pre>

      <h2>for...in Loop</h2>

      <p>
        Use <code>for...in</code> to loop through the keys of an object.
      </p>

      <pre
           style={{
        borderLeft:"6px solid rgb(13 200 13)",
        padding:"14px",
        background:"#111",
        borderRadius:"12px"
      }}
      >
{`const user = {
    name: "Asmit",
    age: 13
};

for (const key in user) {
    console.log(key, user[key]);
}`}
      </pre>

      <h2>Loop Control Statements</h2>

      <table
      style={{
        borderCollapse:"collapse",
        width:"100%",
        border:"1px solid #444",
        overflowX:"auto"
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
            >Statement</th>
            <th
             style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
            }}
            >Purpose</th>
          </tr>

          <tr>
            <td
            style={{
                padding:"10px",
                border:"1px solid #444"
            }}
            >break</td>
            <td
                style={{
                padding:"10px",
                border:"1px solid #444"
            }}
            >Stops the loop immediately.</td>
          </tr>

          <tr>
            <td
             style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
            }}
            >continue</td>
            <td
             style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
            }}
            >Skips the current iteration and moves to the next one.</td>
          </tr>
        </tbody>
      </table>

      <h2>Example</h2>

      <pre
           style={{
        borderLeft:"6px solid rgb(13 200 13)",
        padding:"14px",
        background:"#111",
        borderRadius:"12px"
      }}
      >
{`for (let i = 1; i <= 10; i++) {

    if (i === 5) continue;

    if (i === 8) break;

    console.log(i);
}`}
      </pre>

      <h2>Wrapping Up</h2>

      <p>
        Loops are one of the most useful features in JavaScript.
        Once you understand them, you'll use them everywhere—from
        printing numbers to working with arrays, objects, and data
        from APIs.
      </p>

    </div>
  );
}