export default function Functions() {
  return (
    <div>

      <h1>Functions</h1>

      <p>
        Functions let you group a piece of code and run it whenever you
        need. Instead of writing the same code again and again, you can
        simply call a function.
      </p>

      <h2>Why Use Functions?</h2>

      <p>
        Functions make your code cleaner, easier to read, and reusable.
        They also help break large programs into smaller, manageable parts.
      </p>

      <h2>Function Syntax</h2>

      <pre>
{`function greet() {
    console.log("Hello, World!");
}

greet();`}
      </pre>

      <h2>Function Parameters</h2>

      <p>
        Parameters are values a function receives when it is called.
      </p>

      <pre>
{`function greet(name) {
    console.log("Hello " + name);
}

greet("Asmit");`}
      </pre>

      <h2>Returning Values</h2>

      <p>
        Use the <code>return</code> keyword when you want a function to
        send a value back.
      </p>

      <pre>
{`function add(a, b) {
    return a + b;
}

const result = add(10, 5);

console.log(result);`}
      </pre>

      <h2>Function Expression</h2>

      <p>
        A function can also be stored inside a variable.
      </p>

      <pre>
{`const greet = function () {
    console.log("Hello!");
};

greet();`}
      </pre>

      <h2>Arrow Function</h2>

      <p>
        Arrow functions are a shorter way to write functions.
      </p>

      <pre>
{`const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));`}
      </pre>

      <h2>Short Arrow Function</h2>

      <pre>
{`const square = num => num * num;

console.log(square(5));`}
      </pre>

      <h2>Default Parameters</h2>

      <p>
        Default parameters are used when no value is passed.
      </p>

      <pre>
{`function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Asmit");`}
      </pre>

      <h2>Scope</h2>

      <p>
        Variables created inside a function can only be used inside that
        function.
      </p>

      <pre>
{`function demo() {
    let message = "Inside Function";
    console.log(message);
}

demo();

// console.log(message); // Error`}
      </pre>

      <h2>Summary</h2>

      <p>
        Functions are one of the most important parts of JavaScript.
        They help organize your code, avoid repetition, and make programs
        easier to build and maintain.
      </p>

    </div>
  );
}