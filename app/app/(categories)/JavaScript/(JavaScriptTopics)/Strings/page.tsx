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

      <table>
        <tbody>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>

          <tr>
            <td>length</td>
            <td>Returns the number of characters.</td>
          </tr>

          <tr>
            <td>toUpperCase()</td>
            <td>Converts text to uppercase.</td>
          </tr>

          <tr>
            <td>toLowerCase()</td>
            <td>Converts text to lowercase.</td>
          </tr>

          <tr>
            <td>trim()</td>
            <td>Removes extra spaces.</td>
          </tr>

          <tr>
            <td>includes()</td>
            <td>Checks if text exists.</td>
          </tr>

          <tr>
            <td>indexOf()</td>
            <td>Returns the first matching index.</td>
          </tr>

          <tr>
            <td>slice()</td>
            <td>Extracts part of a string.</td>
          </tr>

          <tr>
            <td>replace()</td>
            <td>Replaces text.</td>
          </tr>

          <tr>
            <td>split()</td>
            <td>Converts a string into an array.</td>
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