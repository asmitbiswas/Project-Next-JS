export default function Strings() {
  return (
    <div>

      <h1>Strings</h1>

      <p>
        A string is a sequence of characters used to store text.
        Strings can contain letters, numbers, symbols, and spaces.
      </p>

      <h2>Creating Strings</h2>

      <pre
      style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const firstName = "Asmit";
const lastName = 'Biswas';
const language = \`JavaScript\`;

console.log(firstName);
console.log(lastName);
console.log(language);`}
      </pre>

      <h2>String Length</h2>

      <p>
        The <code>length</code> property returns the number of characters
        in a string.
      </p>

      <pre
        style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "DevVault";

console.log(text.length);`}
      </pre>

      <h2>Accessing Characters</h2>

      <pre
        style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "JavaScript";

console.log(text[0]);
console.log(text[4]);`}
      </pre>

      <h2>Changing Case</h2>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "JavaScript";

console.log(text.toUpperCase());
console.log(text.toLowerCase());`}
      </pre>

      <h2>Removing Extra Spaces</h2>

      <p>
        Use <code>trim()</code> to remove spaces from the beginning and end
        of a string.
      </p>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "   Hello World   ";

console.log(text.trim());`}
      </pre>

      <h2>Finding Text</h2>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "I love JavaScript";

console.log(text.includes("JavaScript"));
console.log(text.startsWith("I"));
console.log(text.endsWith("Script"));`}
      </pre>

      <h2>Finding the Position</h2>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "JavaScript";

console.log(text.indexOf("S"));
console.log(text.lastIndexOf("a"));`}
      </pre>

      <h2>Extracting Part of a String</h2>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "JavaScript";

console.log(text.slice(0, 4));
console.log(text.substring(4, 10));`}
      </pre>

      <h2>Replacing Text</h2>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const text = "I love Java";

console.log(text.replace("Java", "JavaScript"));`}
      </pre>

      <h2>Splitting a String</h2>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const fruits = "Apple,Banana,Mango";

console.log(fruits.split(","));`}
      </pre>

      <h2>Template Literals</h2>

      <p>
        Template literals make it easier to combine variables with text.
      </p>

      <pre
          style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const name = "Asmit";
const age = 13;

console.log(\`My name is \${name} and I am \${age} years old.\`);`}
      </pre>

      <h2>Common String Methods</h2>

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
              background:"#111",
              padding:"14px"
            }}
            >Method</th>
            <th
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >Description</th>
          </tr>

          <tr>
            <td
            style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >length</td>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >Returns the number of characters.</td>
          </tr>

          <tr>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >toUpperCase()</td>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >Converts text to uppercase.</td>
          </tr>

          <tr>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >toLowerCase()</td>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >Converts text to lowercase.</td>
          </tr>

          <tr>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >trim()</td>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >Removes extra spaces.</td>
          </tr>

          <tr>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >includes()</td>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >Checks if text exists.</td>
          </tr>

          <tr>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >indexOf()</td>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >Returns the first matching index.</td>
          </tr>

          <tr>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >slice()</td>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >Extracts part of a string.</td>
          </tr>

          <tr>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >replace()</td>
            <td
                style={{
              border:"1px solid #444",
              background:"#111",
              padding:"14px"
            }}
            >Replaces text.</td>
          </tr>

          <tr>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >split()</td>
            <td
             style={{
              border:"1px solid #444",
              padding:"14px"
            }}
            >Converts a string into an array.</td>
          </tr>
        </tbody>
      </table>

      <h2>Summary</h2>

      <p>
        Strings are one of the most commonly used data types in JavaScript.
        You'll use them to work with names, messages, URLs, user input,
        and much more. Learning string methods will make text manipulation
        much easier.
      </p>

    </div>
  );
}