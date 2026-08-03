export default function DOM() {
  return (
    <div>

      <h1>Document Object Model (DOM)</h1>

      <p>
        The Document Object Model (DOM) is a programming interface for HTML
        documents. It allows JavaScript to access, modify, create, and
        remove HTML elements after a webpage has loaded.
      </p>

      <h2>Why Learn the DOM?</h2>

      <p>
        Without the DOM, JavaScript cannot interact with a webpage.
        The DOM is used to change text, styles, images, attributes,
        and respond to user actions like clicks and keyboard input.
      </p>

      <h2>Selecting Elements</h2>

      <h3>getElementById()</h3>

      <pre
      style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const heading = document.getElementById("title");

console.log(heading);`}
      </pre>

      <h3>querySelector()</h3>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const heading = document.querySelector(".title");

console.log(heading);`}
      </pre>

      <h3>querySelectorAll()</h3>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const items = document.querySelectorAll(".item");

console.log(items);`}
      </pre>

      <h2>Changing Text</h2>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const heading = document.getElementById("title");

heading.textContent = "Welcome to DevVault";`}
      </pre>

      <h2>Changing HTML</h2>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const box = document.querySelector(".box");

box.innerHTML = "<h2>Hello World</h2>";`}
      </pre>

      <h2>Changing CSS</h2>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const heading = document.querySelector("h1");

heading.style.color = "lime";
heading.style.fontSize = "40px";`}
      </pre>

      <h2>Changing Attributes</h2>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const image = document.querySelector("img");

image.src = "logo.png";
image.alt = "Logo";`}
      </pre>

      <h2>Adding Classes</h2>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark");`}
      </pre>

      <h2>Creating Elements</h2>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const heading = document.createElement("h2");

heading.textContent = "New Heading";

document.body.appendChild(heading);`}
      </pre>

      <h2>Removing Elements</h2>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const heading = document.querySelector("h2");

heading.remove();`}
      </pre>

      <h2>Event Listeners</h2>

      <p>
        Event listeners allow JavaScript to respond to user actions.
      </p>

      <pre
         style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        // borderLeft:"rgb(13 200 13)",
        borderLeft:"6px solid rgb(13 200 13)",
      }}
      >
{`const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button Clicked!");
});`}
      </pre>

      <h2>Getting Input Value</h2>

      <pre
      style={{
        overflowX:"auto",
        background:"#111",
        padding:"14px",
        borderRadius:"12px",
        borderLeft:"6px solid rgb(13 200 13)"
      }}
      >
{`const input = document.querySelector("input");

console.log(input.value);`}
      </pre>

      <h2>Common DOM Methods</h2>

      <table
      style={{
        width:"100%",
        borderCollapse:"collapse",
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
              background:"#111",
            }}
            >Method</th>
            <th
            style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >Description</th>
          </tr>

          <tr>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >getElementById()</td>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >Selects an element by ID.</td>
          </tr>

          <tr>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >querySelector()</td>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >Selects the first matching element.</td>
          </tr>

          <tr>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >querySelectorAll()</td>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >Selects all matching elements.</td>
          </tr>

          <tr>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >textContent</td>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >Changes or returns text.</td>
          </tr>

          <tr>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >innerHTML</td>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >Changes HTML content.</td>
          </tr>

          <tr>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >style</td>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >Changes CSS styles.</td>
          </tr>

          <tr>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >classList</td>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >Adds, removes, or toggles classes.</td>
          </tr>

          <tr>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >createElement()</td>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >Creates a new HTML element.</td>
          </tr>

          <tr>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >appendChild()</td>
            <td
            
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}>Adds an element to the page.</td>
          </tr>

          <tr>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >remove()</td>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >Removes an element.</td>
          </tr>

          <tr>
            <td
               style={{
              padding:"14px",
              border:"1px solid #444"
            }}
            >addEventListener()</td>
            <td
              style={{
              border:"1px solid #444",
              padding:"14px",
              background:"#111",
            }}
            >Listens for user events.</td>
          </tr>

        </tbody>
      </table>

      <h2>Summary</h2>

      <p>
        The DOM connects JavaScript with HTML. It allows developers to
        create interactive web pages by selecting elements, changing
        content, updating styles, handling events, and creating or
        removing elements dynamically.
      </p>

    </div>
  );
}