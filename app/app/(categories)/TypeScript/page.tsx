import Link from "next/link";


export default function TypeScript() {
    return (
        <div>

            <h1>TypeScript</h1>

            <p>
                TypeScript is a programming language built on top of JavaScript.
                It adds static typing and other features that make JavaScript
                code easier to write, understand, and maintain.
            </p>

            <h2>Why TypeScript?</h2>

            <p>
                JavaScript is flexible, but that flexibility can sometimes
                make large applications harder to manage. TypeScript helps
                catch many mistakes while writing code instead of waiting
                until the program runs.
            </p>

            <ul>
                <li>Static type checking</li>
                <li>Better code completion</li>
                <li>Easier refactoring</li>
                <li>Better documentation through types</li>
                <li>Works with existing JavaScript</li>
            </ul>

            <h2>TypeScript Example</h2>

            <pre
            style={{
                background:"#111",
                padding:"14px",
                borderLeft:"6px solid rgb( 13 200 13 )",
                borderRadius:"12px"
            }}
            >
{`let username: string = "Asmit";
let age: number = 13;

console.log(username);
console.log(age);`}
            </pre>

            <h2>JavaScript vs TypeScript</h2>

            <p>
                TypeScript extends JavaScript, so JavaScript code can generally
                be used inside TypeScript projects. TypeScript adds features
                such as type annotations, interfaces, generics, and more.
            </p>

            <pre
              style={{
                background:"#111",
                padding:"14px",
                borderLeft:"6px solid rgb( 13 200 13 )",
                borderRadius:"12px"
            }}
            >
{`// JavaScript

let username = "Asmit";`}
            </pre>

            <pre
              style={{
                background:"#111",
                padding:"14px",
                borderLeft:"6px solid rgb( 13 200 13 )",
                borderRadius:"12px"
            }}
            >
{`// TypeScript

let username: string = "Asmit";`}
            </pre>

            <h2>What You Will Learn</h2>

            <ul>
                <li><Link href="/TypeScript/Basic_Types" style={{color:"white"}}>Basic_Types</Link></li>
                <li><Link href="/TypeScript/TI"style={{color:"white"}}>Type interface</Link></li>
                <li><Link href="/TypeScript/TA"style={{color:"white"}}>Type Annotations</Link></li>
                <li>Union Types</li>
                <li>Type Narrowing</li>
                <li>Interfaces</li>
                <li>Type Aliases</li>
                <li>Functions</li>
                <li>Objects</li>
                <li>Arrays</li>
                <li>Generics</li>
                <li>Enums</li>
                <li>Classes</li>
                <li>Modules</li>
                <li>Utility Types</li>
                <li>Advanced Types</li>
            </ul>

            <h2>Getting Started</h2>

            <p>
                TypeScript code is compiled into JavaScript before it can run
                in environments that execute JavaScript.
            </p>

            <pre>
{`npm install -g typescript`}
            </pre>

            <p>
                Check the installed TypeScript version with:
            </p>

            <pre
              style={{
                background:"#111",
                padding:"14px",
                borderLeft:"6px solid rgb( 13 200 13 )",
                borderRadius:"12px"
            }}
            >
{`tsc --version`}
            </pre>

            <h2>Your First TypeScript Program</h2>

            <pre
              style={{
                background:"#111",
                padding:"14px",
                borderLeft:"6px solid rgb( 13 200 13 )",
                borderRadius:"12px"
            }}
            >
{`function greet(name: string): string {
    return "Hello, " + name;
}

console.log(greet("DevVault"));`}
            </pre>

            <h2>Summary</h2>

            <p>
                TypeScript adds a powerful type system to JavaScript while
                keeping the language familiar to JavaScript developers.
                It is widely used for building larger and more maintainable
                applications.
            </p>

        </div>
    );
}