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

      <pre>
{`const heading = document.getElementById("title");

console.log(heading);`}
      </pre>

      <h3>querySelector()</h3>

      <pre>
{`const heading = document.querySelector(".title");

console.log(heading);`}
      </pre>

      <h3>querySelectorAll()</h3>

      <pre>
{`const items = document.querySelectorAll(".item");

console.log(items);`}
      </pre>

      <h2>Changing Text</h2>

      <pre>
{`const heading = document.getElementById("title");

heading.textContent = "Welcome to DevVault";`}
      </pre>

      <h2>Changing HTML</h2>

      <pre>
{`const box = document.querySelector(".box");

box.innerHTML = "<h2>Hello World</h2>";`}
      </pre>

      <h2>Changing CSS</h2>

      <pre>
{`const heading = document.querySelector("h1");

heading.style.color = "lime";
heading.style.fontSize = "40px";`}
      </pre>

      <h2>Changing Attributes</h2>

      <pre>
{`const image = document.querySelector("img");

image.src = "logo.png";
image.alt = "Logo";`}
      </pre>

      <h2>Adding Classes</h2>

      <pre>
{`const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark");`}
      </pre>

      <h2>Creating Elements</h2>

      <pre>
{`const heading = document.createElement("h2");

heading.textContent = "New Heading";

document.body.appendChild(heading);`}
      </pre>

      <h2>Removing Elements</h2>

      <pre>
{`const heading = document.querySelector("h2");

heading.remove();`}
      </pre>

      <h2>Event Listeners</h2>

      <p>
        Event listeners allow JavaScript to respond to user actions.
      </p>

      <pre>
{`const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button Clicked!");
});`}
      </pre>

      <h2>Getting Input Value</h2>

      <pre>
{`const input = document.querySelector("input");

console.log(input.value);`}
      </pre>

      <h2>Common DOM Methods</h2>

      <table>
        <tbody>

          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>

          <tr>
            <td>getElementById()</td>
            <td>Selects an element by ID.</td>
          </tr>

          <tr>
            <td>querySelector()</td>
            <td>Selects the first matching element.</td>
          </tr>

          <tr>
            <td>querySelectorAll()</td>
            <td>Selects all matching elements.</td>
          </tr>

          <tr>
            <td>textContent</td>
            <td>Changes or returns text.</td>
          </tr>

          <tr>
            <td>innerHTML</td>
            <td>Changes HTML content.</td>
          </tr>

          <tr>
            <td>style</td>
            <td>Changes CSS styles.</td>
          </tr>

          <tr>
            <td>classList</td>
            <td>Adds, removes, or toggles classes.</td>
          </tr>

          <tr>
            <td>createElement()</td>
            <td>Creates a new HTML element.</td>
          </tr>

          <tr>
            <td>appendChild()</td>
            <td>Adds an element to the page.</td>
          </tr>

          <tr>
            <td>remove()</td>
            <td>Removes an element.</td>
          </tr>

          <tr>
            <td>addEventListener()</td>
            <td>Listens for user events.</td>
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