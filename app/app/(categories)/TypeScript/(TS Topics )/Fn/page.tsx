export default function Functions() {
    return (
        <div>

            <h1>Functions</h1>

            <p>
                Functions are reusable blocks of code that perform a specific
                task. TypeScript allows you to define the types of function
                parameters and return values.
            </p>

            <h2>Basic Function</h2>

            <p>
                A function can be created using the <code>function</code> keyword.
            </p>

            <pre>
                <code>{`function greet() {
    console.log("Hello, Asmit!");
}

greet();`}</code>
            </pre>

            <h2>Function Parameters</h2>

            <p>
                Parameters allow you to pass values into a function. You can
                specify their types using type annotations.
            </p>

            <pre>
                <code>{`function greet(name: string) {
    console.log("Hello " + name);
}

greet("Asmit");`}</code>
            </pre>

            <h2>Return Types</h2>

            <p>
                You can specify the type of value that a function should return.
            </p>

            <pre>
                <code>{`function add(a: number, b: number): number {
    return a + b;
}

const result = add(10, 20);

console.log(result);`}</code>
            </pre>

            <h2>Void Return Type</h2>

            <p>
                Use <code>void</code> when a function does not return a value.
            </p>

            <pre>
                <code>{`function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello TypeScript!");`}</code>
            </pre>

            <h2>Optional Parameters</h2>

            <p>
                Add <code>?</code> to make a parameter optional.
            </p>

            <pre>
                <code>{`function greet(name?: string): void {
    if (name) {
        console.log("Hello " + name);
    } else {
        console.log("Hello!");
    }
}

greet();
greet("Asmit");`}</code>
            </pre>

            <h2>Default Parameters</h2>

            <p>
                A parameter can have a default value that is used when no
                value is provided.
            </p>

            <pre>
                <code>{`function greet(name: string = "Guest"): string {
    return "Hello " + name;
}

console.log(greet());
console.log(greet("Asmit"));`}</code>
            </pre>

            <h2>Arrow Functions</h2>

            <p>
                Arrow functions provide a shorter syntax for writing functions.
            </p>

            <pre>
                <code>{`const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(5, 10));`}</code>
            </pre>

            <h2>Function Type</h2>

            <p>
                You can create a type that describes the structure of a function.
            </p>

            <pre>
                <code>{`type MathFunction = (a: number, b: number) => number;

const multiply: MathFunction = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));`}</code>
            </pre>

            <h2>Rest Parameters</h2>

            <p>
                Rest parameters allow a function to accept any number of
                arguments of a specific type.
            </p>

            <pre>
                <code>{`function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20, 30));`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Functions allow you to reuse code and perform specific tasks.
                TypeScript lets you add types to parameters, return values,
                optional parameters, default parameters, arrow functions,
                and function types.
            </p>

        </div>
    );
}