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

    greet() {
        console.log("Hello!");
    }
};

person.greet();`}
      </pre>

      <h2>Looping Through an Object</h2>

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

for (let key in person) {
    console.log(key + ": " + person[key]);
}`}
      </pre>

      <h2>Common Object Methods</h2>

      <table
                  style={{
            borderCollapse:"collapse",
            width:"100%",
            border:"1px solid #444",
            padding:"20px"
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
            >Method</th>
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
                padding:"14px",
                border:"1px solid #444"
            }}
            >Object.keys()</td>
            <td
              style={{
                padding:"14px",
                border:"1px solid #444"
            }}
            >Returns an array of all keys.</td>
          </tr>

          <tr>
            <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
            }}
            >Object.values()</td>
            <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
            }}
            >Returns an array of all values.</td>
          </tr>

          <tr>
            <td
              style={{
                padding:"14px",
                border:"1px solid #444"
            }}
            >Object.entries()</td>
            <td
                     style={{
                padding:"14px",
                border:"1px solid #444"
            }}
            >Returns key-value pairs as arrays.</td>
          </tr>

          <tr>
            <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
            }}
            >hasOwnProperty()</td>
            <td
                style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
            }}
            >Checks if a property exists.</td>
          </tr>

          <tr>
            <td
                     style={{
                padding:"14px",
                border:"1px solid #444"
            }}
            >delete</td>
            <td
                     style={{
                padding:"14px",
                border:"1px solid #444"
            }}
            >Removes a property.</td>
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