import Sidebar from "@/app/components/page";

export default function EventHandling() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Event Handling</h1>

        <p>
          Event handling in React allows your application to respond to user
          actions such as clicking a button, typing in an input, submitting a
          form, or moving the mouse. React uses JavaScript functions called
          event handlers to perform these actions.
        </p>

        <h2>Why Event Handling?</h2>

        <p>
          Without event handling, a React application would only display static
          content. Event handlers make applications interactive by responding to
          user input.
        </p>

        <h2>Basic Example</h2>

        <pre
        style={{
            background:"#1d1d1d",
            borderRadius:"8px",
            padding:"18px",
            overflowX:"auto",
        }}>
{`function App() {

  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}
        </pre>

        <h2>Arrow Function Example</h2>

        <pre
          style={{
            background:"#1d1d1d",
            borderRadius:"8px",
            padding:"18px",
            overflowX:"auto",
        }}>
{`function App() {
  return (
    <button onClick={() => alert("Hello React!")}>
      Click Me
    </button>
  );
}`}
        </pre>

        <h2>Common React Events</h2>

        <table>
          <tbody>
            <tr>
              <th>Event</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>onClick</td>
              <td>Runs when an element is clicked.</td>
            </tr>

            <tr>
              <td>onChange</td>
              <td>Runs when an input value changes.</td>
            </tr>

            <tr>
              <td>onSubmit</td>
              <td>Runs when a form is submitted.</td>
            </tr>

            <tr>
              <td>onKeyDown</td>
              <td>Runs when a key is pressed.</td>
            </tr>

            <tr>
              <td>onMouseOver</td>
              <td>Runs when the mouse enters an element.</td>
            </tr>

            <tr>
              <td>onMouseLeave</td>
              <td>Runs when the mouse leaves an element.</td>
            </tr>
          </tbody>
        </table>

        <h2>Passing Arguments</h2>

        <pre>
{`function App() {

  function greet(name) {
    alert("Hello " + name);
  }

  return (
    <button onClick={() => greet("Asmit")}>
      Greet
    </button>
  );
}`}
        </pre>

        <h2>Event Object</h2>

        <p>
          React automatically passes an event object to event handler functions.
          It contains useful information about the event that occurred.
        </p>

        <pre>
{`function App() {

  function handleClick(event) {
    console.log(event.target);
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}
        </pre>

        <h2>Prevent Default Behavior</h2>

        <pre>
{`function App() {

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}`}
        </pre>

        <h2>Best Practices</h2>

        <ul>
          <li>Use descriptive handler names like handleClick.</li>
          <li>Keep event handlers short and readable.</li>
          <li>Use arrow functions only when necessary.</li>
          <li>Call event.preventDefault() for custom form handling.</li>
          <li>Avoid putting large amounts of logic directly inside JSX.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Writing onClick="handleClick()".</li>
          <li>Calling the function immediately instead of passing it.</li>
          <li>Forgetting event.preventDefault() on forms.</li>
          <li>Writing too much logic inside JSX.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Event handling is one of the core features of React. By attaching
          event handlers to elements, you can respond to user interactions,
          update state, validate forms, and build interactive applications.
        </p>
      </div>
    </div>
  );
}