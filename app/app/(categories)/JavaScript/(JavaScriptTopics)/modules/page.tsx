export default function Modules() {
    return (
        <div>

            <h1>JavaScript Modules</h1>

            <p>
                JavaScript modules allow you to split code into separate files.
                Each module can contain variables, functions, classes, or other
                pieces of code that can be exported and used by other modules.
            </p>

            <h2>Why Use Modules?</h2>

            <p>
                As a project grows, putting everything inside one JavaScript
                file becomes difficult to manage. Modules allow you to organize
                related code into separate files.
            </p>

            <ul>
                <li>Keep code organized.</li>
                <li>Reuse code between files.</li>
                <li>Avoid unnecessary global variables.</li>
                <li>Make large projects easier to maintain.</li>
                <li>Separate different parts of an application.</li>
            </ul>

            <h2>Creating a Module</h2>

            <p>
                A JavaScript file can be used as a module when it uses
                <code> export </code> or <code> import </code>.
            </p>

            <pre
            style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// math.js

export const pi = 3.14159;

export function add(a, b) {
    return a + b;
}`}
            </pre>

            <h2>Named Export</h2>

            <p>
                A named export allows you to export specific values from a
                module.
            </p>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// math.js

export const number = 10;

export function multiply(a, b) {
    return a * b;
}`}
            </pre>

            <h2>Named Import</h2>

            <p>
                Named exports can be imported using their exact exported names.
            </p>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { number, multiply } from "./math.js";

console.log(number);
console.log(multiply(5, 4));`}
            </pre>

            <h2>Exporting Multiple Values</h2>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`const name = "Asmit";
const age = 13;

function greet() {
    console.log("Hello!");
}

export { name, age, greet };`}
            </pre>

            <h2>Importing Multiple Values</h2>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { name, age, greet } from "./user.js";

console.log(name);
console.log(age);
greet();`}
            </pre>

            <h2>Default Export</h2>

            <p>
                A module can have one default export. A default export does
                not need to use the same name when it is imported.
            </p>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// message.js

export default function message() {
    console.log("Hello from the module!");
}`}
            </pre>

            <h2>Importing a Default Export</h2>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import message from "./message.js";

message();`}
            </pre>

            <h2>Default Export with a Value</h2>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// config.js

const appName = "DevVault";

export default appName;`}
            </pre>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import appName from "./config.js";

console.log(appName);`}
            </pre>

            <h2>Named and Default Exports</h2>

            <p>
                A module can have one default export along with multiple named
                exports.
            </p>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// user.js

const version = "1.0";

export const name = "Asmit";

export function greet() {
    console.log("Hello!");
}

export default version;`}
            </pre>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import version, { name, greet } from "./user.js";

console.log(version);
console.log(name);
greet();`}
            </pre>

            <h2>Renaming Imports</h2>

            <p>
                The <code>as</code> keyword can be used to give an imported
                value a different name.
            </p>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { add as sum } from "./math.js";

console.log(sum(10, 20));`}
            </pre>

            <h2>Renaming Exports</h2>

            <pre
             style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`const username = "Asmit";

export {
    username as name
};`}
            </pre>

            <h2>Import Everything</h2>

            <p>
                You can import all named exports from a module as an object.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import * as math from "./math.js";

console.log(math.add(10, 20));
console.log(math.pi);`}
            </pre>

            <h2>Module Paths</h2>

            <p>
                The path used in an import statement tells JavaScript where
                the module is located.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { add } from "./math.js";`}
            </pre>

            <p>
                <code>./</code> means the current directory.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { add } from "../math.js";`}
            </pre>

            <p>
                <code>../</code> means the parent directory.
            </p>

            <h2>Modules and Strict Mode</h2>

            <p>
                JavaScript modules automatically run in strict mode. You do
                not need to manually add <code>"use strict"</code>.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// module.js

x = 10;`}
            </pre>

            <p>
                Assigning to an undeclared variable will cause an error in
                strict mode.
            </p>

            <h2>Module Scope</h2>

            <p>
                Variables declared inside a module are scoped to that module.
                They are not automatically added to the global scope.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// file.js

const secret = "hidden";

console.log(secret);`}
            </pre>

            <p>
                Another module cannot access <code>secret</code> unless it is
                explicitly exported.
            </p>

            <h2>Exporting Functions</h2>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`export function square(number) {
    return number * number;
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { square } from "./math.js";

console.log(square(5));`}
            </pre>

            <h2>Exporting Variables</h2>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`export const username = "Asmit";
export let score = 100;`}
            </pre>

            <h2>Exporting Classes</h2>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`export class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }

}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { User } from "./User.js";

const user = new User("Asmit");

user.greet();`}
            </pre>

            <h2>Re-exporting Modules</h2>

            <p>
                A module can export values that come from another module.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`export { add, subtract } from "./math.js";`}
            </pre>

            <h2>Re-exporting Everything</h2>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`export * from "./math.js";`}
            </pre>

            <h2>Barrel Files</h2>

            <p>
                A barrel file is a module that collects exports from multiple
                modules and re-exports them from one place.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// index.js

export { add } from "./math.js";
export { User } from "./User.js";
export { greet } from "./greet.js";`}
            </pre>

            <p>
                Other files can then import everything from the barrel file.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { add, User, greet } from "./index.js";`}
            </pre>

            <h2>Dynamic Import</h2>

            <p>
                JavaScript also supports dynamic imports. Instead of loading
                a module at the top of the file, you can load it when needed.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`const module = await import("./math.js");

console.log(module.add(10, 20));`}
            </pre>

            <h2>Dynamic Import with a Promise</h2>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import("./math.js")
    .then((math) => {
        console.log(math.add(5, 10));
    });`}
            </pre>

            <h2>Conditional Module Loading</h2>

            <p>
                Dynamic imports can be useful when a module should only be
                loaded under certain conditions.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`if (condition) {
    const module = await import("./feature.js");

    module.start();
}`}
            </pre>

            <h2>Modules in the Browser</h2>

            <p>
                Browser JavaScript can use modules by adding
                <code> type="module" </code> to a script element.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`<script type="module" src="app.js"></script>`}
            </pre>

            <h2>Browser Module Example</h2>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`<!-- index.html -->

<script type="module" src="app.js"></script>`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { greet } from "./greet.js";

greet();`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// greet.js

export function greet() {
    console.log("Hello!");
}`}
            </pre>

            <h2>Module Dependencies</h2>

            <p>
                When one module imports another module, the imported module
                becomes a dependency of the current module.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { add } from "./math.js";`}
            </pre>

            <p>
                Here, <code>app.js</code> depends on <code>math.js</code>.
            </p>

            <h2>Module Execution</h2>

            <p>
                A module is normally evaluated when it is loaded. Imported
                modules are evaluated before the code that depends on them.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// math.js

console.log("Math module loaded");

export function add(a, b) {
    return a + b;
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { add } from "./math.js";

console.log(add(2, 3));`}
            </pre>

            <h2>Live Bindings</h2>

            <p>
                Imports are live bindings. An imported value reflects changes
                made to the exported binding.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// counter.js

export let count = 0;

export function increment() {
    count++;
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { count, increment } from "./counter.js";

console.log(count);

increment();

console.log(count);`}
            </pre>

            <h2>Cannot Reassign an Import</h2>

            <p>
                Imported bindings cannot be reassigned from the importing
                module.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { count } from "./counter.js";

count = 10;`}
            </pre>

            <p>
                The imported binding is read-only from the importing module.
            </p>

            <h2>Module Namespace Objects</h2>

            <p>
                Using <code>import *</code> creates a namespace object
                containing the module's named exports.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import * as user from "./user.js";

console.log(user.name);
console.log(user.greet);`}
            </pre>

            <h2>Side-Effect Imports</h2>

            <p>
                A module can be imported only for its side effects without
                importing any specific value.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import "./setup.js";`}
            </pre>

            <p>
                The module is loaded and executed, but nothing is imported
                into the current file.
            </p>

            <h2>Modules and JSON</h2>

            <p>
                Modern JavaScript environments can support importing JSON
                modules, although the exact syntax depends on the environment.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import data from "./data.json";`}
            </pre>

            <h2>Modules and npm Packages</h2>

            <p>
                Modules are also used by packages installed from npm.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import express from "express";`}
            </pre>

            <p>
                Here, JavaScript looks for the package rather than a relative
                file path.
            </p>

            <h2>Relative vs Package Imports</h2>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// Relative module

import { add } from "./math.js";

// Package

import express from "express";`}
            </pre>

            <h2>Modules in Node.js</h2>

            <p>
                Node.js supports JavaScript modules. Modern Node.js projects
                commonly use ECMAScript modules with <code>import</code> and
                <code>export</code>.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// math.js

export function add(a, b) {
    return a + b;
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { add } from "./math.js";

console.log(add(10, 20));`}
            </pre>

            <h2>CommonJS</h2>

            <p>
                Node.js also has the older CommonJS module system. It uses
                <code>require()</code> and <code>module.exports</code>.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// math.js

function add(a, b) {
    return a + b;
}

module.exports = {
    add
};`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

const { add } = require("./math.js");

console.log(add(10, 20));`}
            </pre>

            <h2>ES Modules vs CommonJS</h2>

            <table
            style={{
                borderCollapse:"collapse",
                width:"100%",
                padding:"14px",
                border:"1px solid #444"
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
                        >ES Modules</th>
                        <th
                          style={{
                            border:"1px solid #444",
                            padding:"14px",
                            background:"#111"
                        }}
                        >CommonJS</th>
                    </tr>

                    <tr>
                        <td
                        style={{
                            padding:"14px",
                            border:"1px solid #444"
                        }}
                        >import</td>
                        <td
                          style={{
                            padding:"14px",
                            border:"1px solid #444"
                        }}
                        >require()</td>
                    </tr>

                    <tr>
                        <td
                          style={{
                            border:"1px solid #444",
                            padding:"14px",
                            background:"#111"
                        }}
                        >export</td>
                        <td
                          style={{
                            border:"1px solid #444",
                            padding:"14px",
                            background:"#111"
                        }}
                        >module.exports</td>
                    </tr>

                    <tr>
                        <td
                          style={{
                            padding:"14px",
                            border:"1px solid #444"
                        }}
                        >export default</td>
                        <td
                          style={{
                            padding:"14px",
                            border:"1px solid #444"
                        }}
                        >module.exports</td>
                    </tr>

                    <tr>
                        <td
                          style={{
                            border:"1px solid #444",
                            padding:"14px",
                            background:"#111"
                        }}
                        >Modern JavaScript standard</td>
                        <td
                          style={{
                            border:"1px solid #444",
                            padding:"14px",
                            background:"#111"
                        }}
                        >Older Node.js module system</td>
                    </tr>
                </tbody>
            </table>

            <h2>Modules in React</h2>

            <p>
                React applications use modules extensively. Components,
                utilities, hooks, and other pieces of code can all be stored
                in separate files.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// Button.jsx

export default function Button() {
    return <button>Click me</button>;
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// App.jsx

import Button from "./Button";

export default function App() {
    return (
        <div>
            <Button />
        </div>
    );
}`}
            </pre>

            <h2>Utility Modules</h2>

            <p>
                A common pattern is to keep reusable functions inside a
                utility module.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// utils.js

export function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

export function double(number) {
    return number * 2;
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { capitalize, double } from "./utils.js";

console.log(capitalize("javascript"));
console.log(double(10));`}
            </pre>

            <h2>Advantages of Modules</h2>

            <ul>
                <li>Better code organization.</li>
                <li>Reusable code.</li>
                <li>Clear dependencies.</li>
                <li>Smaller and easier-to-understand files.</li>
                <li>Less global scope pollution.</li>
                <li>Easier maintenance.</li>
                <li>Better separation of responsibilities.</li>
            </ul>

            <h2>Common Mistakes</h2>

            <h3>Forgetting the Export</h3>

            <pre
                         style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// math.js

function add(a, b) {
    return a + b;
}`}
            </pre>

            <p>
                Trying to import <code>add</code> from this file will fail
                because it was never exported.
            </p>

            <h3>Wrong Import Name</h3>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`export const username = "Asmit";

import { name } from "./user.js";`}
            </pre>

            <p>
                The named import must match the exported name unless it is
                renamed with <code>as</code>.
            </p>

            <h3>Wrong File Path</h3>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`import { add } from "./math.js";`}
            </pre>

            <p>
                The path must point to the correct module.
            </p>

            <h3>Confusing Default and Named Exports</h3>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// Named export

export const name = "Asmit";

// Named import

import { name } from "./user.js";`}
            </pre>

            <p>
                Named exports use curly braces when imported.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// Default export

export default function greet() {
    console.log("Hello");
}

// Default import

import greet from "./greet.js";`}
            </pre>

            <p>
                Default imports do not use curly braces.
            </p>

            <h2>Module Example</h2>

            <p>
                Here is a small project using multiple modules.
            </p>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`project/
│
├── app.js
├── math.js
└── user.js`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// math.js

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// user.js

export const name = "Asmit";

export function greet() {
    console.log("Hello " + name);
}`}
            </pre>

            <pre
                     style={{
                background:"#111",
                padding:"14px",
                borderRadius:"12px",
                borderLeft:"6px solid rgb(13 200 13)"
            }}
            >
{`// app.js

import { add, subtract } from "./math.js";
import { name, greet } from "./user.js";

console.log(name);

greet();

console.log(add(10, 5));
console.log(subtract(10, 5));`}
            </pre>

            <h2>Module Checklist</h2>

            <ul>
                <li>Understand what a module is.</li>
                <li>Understand named exports.</li>
                <li>Understand named imports.</li>
                <li>Understand default exports.</li>
                <li>Understand default imports.</li>
                <li>Know how to rename imports and exports.</li>
                <li>Know how to import everything with <code>*</code>.</li>
                <li>Understand relative module paths.</li>
                <li>Understand dynamic imports.</li>
                <li>Understand module scope.</li>
                <li>Know the difference between ES Modules and CommonJS.</li>
                <li>Understand how modules are used in React.</li>
            </ul>

            <h2>Summary</h2>

            <p>
                JavaScript modules make it possible to divide a large
                application into smaller and more manageable pieces.
                The <code>export</code> keyword makes values available to
                other modules, while <code>import</code> allows those values
                to be used elsewhere.
            </p>

            <p>
                Modern JavaScript applications rely heavily on modules.
                React, Next.js, Node.js projects, and many other tools use
                module systems to organize their code.
            </p>

        </div>
    );
}