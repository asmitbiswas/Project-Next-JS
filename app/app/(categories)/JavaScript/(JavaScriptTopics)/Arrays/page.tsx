export default function Arrays() {
  return (
    <div>

      <h1>Arrays</h1>

      <p>
        An array is a special variable that can store multiple values in a
        single place. Each value in an array has an index starting from 0.
      </p>

      <h2>Creating an Array</h2>

      <pre
      style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);`}
      </pre>

      <h2>Accessing Array Elements</h2>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);`}
      </pre>

      <h2>Changing an Element</h2>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);`}
      </pre>

      <h2>Array Length</h2>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);`}
      </pre>

      <h2>Adding Elements</h2>

      <h3>push()</h3>

      <p>Adds an element to the end of the array.</p>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);`}
      </pre>

      <h3>unshift()</h3>

      <p>Adds an element to the beginning of the array.</p>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);`}
      </pre>

      <h2>Removing Elements</h2>

      <h3>pop()</h3>

      <p>Removes the last element.</p>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);`}
      </pre>

      <h3>shift()</h3>

      <p>Removes the first element.</p>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);`}
      </pre>

      <h2>Looping Through an Array</h2>

      <pre
         style={{
        padding:"14px",
        background:"#111",
        overflowX:"auto",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13 )"
      }}
      >
{`const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}`}
      </pre>

      <h2>Common Array Methods</h2>

      <table>
        <tbody>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>

          <tr>
            <td>push()</td>
            <td>Adds an element to the end.</td>
          </tr>

          <tr>
            <td>pop()</td>
            <td>Removes the last element.</td>
          </tr>

          <tr>
            <td>shift()</td>
            <td>Removes the first element.</td>
          </tr>

          <tr>
            <td>unshift()</td>
            <td>Adds an element to the beginning.</td>
          </tr>

          <tr>
            <td>length</td>
            <td>Returns the number of elements.</td>
          </tr>

          <tr>
            <td>includes()</td>
            <td>Checks if a value exists.</td>
          </tr>

          <tr>
            <td>indexOf()</td>
            <td>Returns the index of a value.</td>
          </tr>
        </tbody>
      </table>

      <h2>Summary</h2>

      <p>
        Arrays store multiple values in one variable. They make it easier
        to manage lists of data and work perfectly with loops and array
        methods.
      </p>

    </div>
  );
}