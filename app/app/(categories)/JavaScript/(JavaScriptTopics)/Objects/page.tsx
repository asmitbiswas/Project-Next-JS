export default function Objects() {
  return (
    <div>

      <h1>Objects</h1>

      <p>
        Objects are used to store related data in the form of key-value
        pairs. They help organize information about a single entity.
      </p>

      <h2>Creating an Object</h2>

      <pre
      style={{
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        overflowX:"auto",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const person = {
    name: "Asmit",
    age: 13,
    city: "Kolkata"
};

console.log(person);`}
      </pre>

      <h2>Accessing Object Properties</h2>

      <p>
        You can access properties using dot notation or bracket notation.
      </p>

      <pre
        style={{
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        overflowX:"auto",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const person = {
    name: "Asmit",
    age: 13
};

console.log(person.name);
console.log(person["age"]);`}
      </pre>

      <h2>Adding a Property</h2>

      <pre
        style={{
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        overflowX:"auto",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const person = {
    name: "Asmit"
};

person.age = 13;

console.log(person);`}
      </pre>

      <h2>Updating a Property</h2>

      <pre
        style={{
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        overflowX:"auto",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const person = {
    name: "Asmit",
    age: 13
};

person.age = 14;

console.log(person);`}
      </pre>

      <h2>Deleting a Property</h2>

      <pre
        style={{
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        overflowX:"auto",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const person = {
    name: "Asmit",
    age: 13
};

delete person.age;

console.log(person);`}
      </pre>

      <h2>Object Methods</h2>

      <p>
        Objects can also store functions. These functions are called
        methods.
      </p>

      <pre>
{`const person = {
    name: "Asmit",

    greet() {
        console.log("Hello!");
    }
};

person.greet();`}
      </pre>

      <h2>Looping Through an Object</h2>

      <pre>
{`const person = {
    name: "Asmit",
    age: 13,
    city: "Kolkata"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}`}
      </pre>

      <h2>Common Object Methods</h2>

      <table>
        <tbody>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>

          <tr>
            <td>Object.keys()</td>
            <td>Returns an array of all keys.</td>
          </tr>

          <tr>
            <td>Object.values()</td>
            <td>Returns an array of all values.</td>
          </tr>

          <tr>
            <td>Object.entries()</td>
            <td>Returns key-value pairs as arrays.</td>
          </tr>

          <tr>
            <td>hasOwnProperty()</td>
            <td>Checks if a property exists.</td>
          </tr>

          <tr>
            <td>delete</td>
            <td>Removes a property.</td>
          </tr>
        </tbody>
      </table>

      <h2>Summary</h2>

      <p>
        Objects are used to group related data together. They store
        information using key-value pairs and can even contain functions
        called methods. Objects are one of the most important concepts in
        JavaScript.
      </p>

    </div>
  );
}