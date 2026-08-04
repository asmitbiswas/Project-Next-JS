export default function ES6Features() {
    return (
        <div>

            <h1>ES6 Features</h1>

            <p>
                ES6 (ECMAScript 2015) introduced many powerful features that
                made JavaScript easier to write, read, and maintain. Most
                modern JavaScript projects use ES6 syntax.
            </p>

            <h2>let and const</h2>

            <p>
                <code style={{ color: "#12fa40a1" }}>let</code> is used for variables that can change, while
                <code style={{ color: "#12fa40a1" }}> const </code> is used for values that should not be reassigned.
            </p>

            <pre>
{`let age = 13;
age = 14;

const name = "Asmit";

console.log(age);
console.log(name);`}
            </pre>

            <h2>Arrow Functions</h2>

            <pre>
{`const greet = (name) => {
    console.log("Hello " + name);
};

greet("Asmit");`}
            </pre>

            <h2>Template Literals</h2>

            <pre>
{`const name = "Asmit";

console.log(\`Hello, \${name}!\`);`}
            </pre>

            <h2>Default Parameters</h2>

            <pre>
{`function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Asmit");`}
            </pre>

            <h2>Destructuring</h2>

            <pre>
{`const person = {
    name: "Asmit",
    age: 13
};

const { name, age } = person;

console.log(name);
console.log(age);`}
            </pre>

            <h2>Spread Operator (...)</h2>

            <pre>
{`const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);`}
            </pre>

            <h2>Rest Operator (...)</h2>

            <pre>
{`function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);`}
            </pre>

            <h2>Enhanced Object Literals</h2>

            <pre>
{`const name = "Asmit";
const age = 13;

const person = {
    name,
    age
};

console.log(person);`}
            </pre>

            <h2>for...of Loop</h2>

            <pre>
{`const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}`}
            </pre>

            <h2>Classes</h2>

            <pre>
{`class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }

}

const user = new Person("Asmit");

user.greet();`}
            </pre>

            <h2>Modules</h2>

            <pre>
{`// Export
export const name = "Asmit";

// Import
import { name } from "./file.js";

console.log(name);`}
            </pre>

            <h2>Promises</h2>

            <pre>
{`const promise = new Promise((resolve) => {
    resolve("Success");
});

promise.then(result => {
    console.log(result);
});`}
            </pre>

            <h2>Common ES6 Features</h2>

            <table>
                <tbody>

                    <tr>
                        <th>Feature</th>
                        <th>Description</th>
                    </tr>

                    <tr>
                        <td>let</td>
                        <td>Block-scoped variable.</td>
                    </tr>

                    <tr>
                        <td>const</td>
                        <td>Block-scoped constant.</td>
                    </tr>

                    <tr>
                        <td>Arrow Functions</td>
                        <td>Shorter function syntax.</td>
                    </tr>

                    <tr>
                        <td>Template Literals</td>
                        <td>Embed variables inside strings.</td>
                    </tr>

                    <tr>
                        <td>Destructuring</td>
                        <td>Extract values from objects or arrays.</td>
                    </tr>

                    <tr>
                        <td>Spread (...)</td>
                        <td>Expands arrays or objects.</td>
                    </tr>

                    <tr>
                        <td>Rest (...)</td>
                        <td>Collects remaining values.</td>
                    </tr>

                    <tr>
                        <td>Classes</td>
                        <td>Create object templates.</td>
                    </tr>

                    <tr>
                        <td>Modules</td>
                        <td>Import and export code.</td>
                    </tr>

                    <tr>
                        <td>Promises</td>
                        <td>Handle asynchronous tasks.</td>
                    </tr>

                </tbody>
            </table>

            <h2>Summary</h2>

            <p>
                ES6 modernized JavaScript with cleaner syntax and powerful
                features like arrow functions, classes, template literals,
                destructuring, modules, and promises. These features are
                widely used in modern frameworks such as React and Next.js.
            </p>

        </div>
    );
}