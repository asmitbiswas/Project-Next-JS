export default function Events() {
    return (
        <div>

            <h1>JavaScript Events</h1>

            <p>
                Events are actions that happen in the browser. JavaScript can
                detect these actions and execute code in response.
            </p>

            <h2>Why Use Events?</h2>

            <p>
                Events make websites interactive. They allow users to click
                buttons, type in inputs, submit forms, move the mouse, and much
                more.
            </p>

            <h2>Click Event</h2>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                    // borderRadius: "12px"
                }}
            >
                {`const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button Clicked!");
});`}
            </pre>

            <h2>Double Click Event</h2>

            <pre
            style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`const button = document.querySelector("button");

button.addEventListener("dblclick", () => {
    console.log("Double Clicked!");
});`}
            </pre>

            <h2>Mouse Over Event</h2>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`const box = document.querySelector(".box");

box.addEventListener("mouseover", () => {
    console.log("Mouse is over the box.");
});`}
            </pre>

            <h2>Mouse Out Event</h2>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`const box = document.querySelector(".box");

box.addEventListener("mouseout", () => {
    console.log("Mouse left the box.");
});`}
            </pre>

            <h2>Keyboard Events</h2>

            <pre
            style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`const input = document.querySelector("input");

input.addEventListener("keydown", () => {
    console.log("Key Pressed");
});`}
            </pre>

            <h2>Input Event</h2>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`const input = document.querySelector("input");

input.addEventListener("input", () => {
    console.log(input.value);
});`}
            </pre>

            <h2>Submit Event</h2>

            <pre
            style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form Submitted");
});`}
            </pre>

            <h2>Change Event</h2>

            <pre
            style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`const select = document.querySelector("select");

select.addEventListener("change", () => {
    console.log(select.value);
});`}
            </pre>

            <h2>Window Load Event</h2>

            <pre
            style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",
                }}
            >
                {`window.addEventListener("load", () => {
    console.log("Page Loaded");
});`}
            </pre>

            <h2>Resize Event</h2>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto",

                }}
            >
                {`window.addEventListener("resize", () => {
    console.log(window.innerWidth);
});`}
            </pre>

            <h2>Common Event Types</h2>

            <table>
                <tbody>

                    <tr>
                        <th>Event</th>
                        <th>Description</th>
                    </tr>

                    <tr>
                        <td>click</td>
                        <td>Triggered when an element is clicked.</td>
                    </tr>

                    <tr>
                        <td>dblclick</td>
                        <td>Triggered when double-clicked.</td>
                    </tr>

                    <tr>
                        <td>mouseover</td>
                        <td>Triggered when the mouse enters an element.</td>
                    </tr>

                    <tr>
                        <td>mouseout</td>
                        <td>Triggered when the mouse leaves an element.</td>
                    </tr>

                    <tr>
                        <td>keydown</td>
                        <td>Triggered when a key is pressed.</td>
                    </tr>

                    <tr>
                        <td>keyup</td>
                        <td>Triggered when a key is released.</td>
                    </tr>

                    <tr>
                        <td>input</td>
                        <td>Triggered whenever the input value changes.</td>
                    </tr>

                    <tr>
                        <td>change</td>
                        <td>Triggered after an input or select value changes.</td>
                    </tr>

                    <tr>
                        <td>submit</td>
                        <td>Triggered when a form is submitted.</td>
                    </tr>

                    <tr>
                        <td>load</td>
                        <td>Triggered when the page finishes loading.</td>
                    </tr>

                    <tr>
                        <td>resize</td>
                        <td>Triggered when the browser window is resized.</td>
                    </tr>

                </tbody>
            </table>

            <h2>Summary</h2>

            <p>
                Events allow JavaScript to respond to user actions.
                They are the foundation of interactive web applications.
                Most events are handled using the <code>addEventListener()</code>
                method.
            </p>

        </div>
    );
}