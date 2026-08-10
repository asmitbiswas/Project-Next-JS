export default function Modules() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Modules</h1>

            <p>
                Modules allow you to split your TypeScript code into separate
                files. You can export values from one file and import them
                into another.
            </p>

            <h2>Why Use Modules?</h2>

            <p>
                Modules help organize large projects by separating related
                code into different files. They make code easier to maintain
                and reuse.
            </p>

            <h2>Exporting a Variable</h2>

            <p>
                Use the <code>export</code> keyword to make a variable
                available to other modules.
            </p>

            <pre style={codeStyle}>
                <code>{`// math.ts

export const pi = 3.14159;`}</code>
            </pre>

            <h2>Importing a Variable</h2>

            <p>
                Use the <code>import</code> keyword to use an exported value
                from another module.
            </p>

            <pre style={codeStyle}>
                <code>{`// main.ts

import { pi } from "./math";

console.log(pi);`}</code>
            </pre>

            <h2>Exporting Functions</h2>

            <p>
                Functions can also be exported and reused in other files.
            </p>

            <pre style={codeStyle}>
                <code>{`// math.ts

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}`}</code>
            </pre>

            <h2>Importing Functions</h2>

            <p>
                Multiple named exports can be imported from the same module.
            </p>

            <pre style={codeStyle}>
                <code>{`// main.ts

import { add, subtract } from "./math";

console.log(add(10, 20));
console.log(subtract(20, 10));`}</code>
            </pre>

            <h2>Default Exports</h2>

            <p>
                A module can have one default export. Default exports can be
                imported without using curly braces.
            </p>

            <pre style={codeStyle}>
                <code>{`// User.ts

export default class User {
    constructor(public name: string) {}
}`}</code>
            </pre>

            <h2>Importing a Default Export</h2>

            <p>
                You can choose the name of a default import when importing it.
            </p>

            <pre style={codeStyle}>
                <code>{`// main.ts

import User from "./User";

const user = new User("Asmit");

console.log(user.name);`}</code>
            </pre>

            <h2>Exporting Types</h2>

            <p>
                Type aliases and interfaces can also be exported from a
                module.
            </p>

            <pre style={codeStyle}>
                <code>{`// types.ts

export type User = {
    name: string;
    age: number;
};

export interface Product {
    name: string;
    price: number;
}`}</code>
            </pre>

            <h2>Importing Types</h2>

            <p>
                Exported types can be imported and used in other files.
            </p>

            <pre style={codeStyle}>
                <code>{`// main.ts

import type { User, Product } from "./types";

const user: User = {
    name: "Asmit",
    age: 13
};

const product: Product = {
    name: "Guitar",
    price: 5000
};`}</code>
            </pre>

            <h2>Renaming Imports</h2>

            <p>
                You can use the <code>as</code> keyword to give an imported
                value a different name.
            </p>

            <pre style={codeStyle}>
                <code>{`// main.ts

import { add as sum } from "./math";

console.log(sum(10, 20));`}</code>
            </pre>

            <h2>Importing Everything</h2>

            <p>
                You can import all named exports from a module using
                <code>*</code> and give them a namespace name.
            </p>

            <pre style={codeStyle}>
                <code>{`// main.ts

import * as MathUtils from "./math";

console.log(MathUtils.add(10, 20));
console.log(MathUtils.subtract(20, 10));`}</code>
            </pre>

            <h2>Modules and File Structure</h2>

            <p>
                A project can use multiple modules to keep different parts
                of the application organized.
            </p>

            <pre style={codeStyle}>
                <code>{`src/
├── main.ts
├── math.ts
├── types.ts
└── User.ts`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Modules allow TypeScript projects to split code across
                multiple files. The <code>export</code> keyword makes values
                available to other files, while <code>import</code> allows
                them to be reused. Modules can contain variables, functions,
                classes, type aliases, and interfaces.
            </p>

        </div>
    );
}