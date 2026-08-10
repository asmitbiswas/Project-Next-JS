export default function Arrays() {
    return (
        <div>

            <h1>Arrays</h1>

            <p>
                Arrays are used to store multiple values in a single variable.
                TypeScript allows you to specify the type of values an array
                can contain.
            </p>

            <h2>Basic Arrays</h2>

            <p>
                You can define an array using the type followed by
                <code>[]</code>.
            </p>

            <pre>
                <code>{`let fruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

let scores: number[] = [
    10,
    20,
    30
];`}</code>
            </pre>

            <h2>Alternative Array Syntax</h2>

            <p>
                TypeScript also provides a generic syntax for defining arrays.
            </p>

            <pre>
                <code>{`let names: Array<string> = [
    "Asmit",
    "Alex",
    "John"
];

let numbers: Array<number> = [
    10,
    20,
    30
];`}</code>
            </pre>

            <h2>Accessing Array Elements</h2>

            <p>
                Array elements can be accessed using their index. Array
                indexes start from <code>0</code>.
            </p>

            <pre>
                <code>{`let fruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(fruits[0]);
console.log(fruits[1]);`}</code>
            </pre>

            <h2>Changing Array Elements</h2>

            <p>
                You can change an element by assigning a new value to its index.
            </p>

            <pre>
                <code>{`let fruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

fruits[1] = "Orange";

console.log(fruits);`}</code>
            </pre>

            <h2>Adding Elements</h2>

            <p>
                The <code>push()</code> method adds one or more elements to
                the end of an array.
            </p>

            <pre>
                <code>{`let fruits: string[] = [
    "Apple",
    "Banana"
];

fruits.push("Mango");

console.log(fruits);`}</code>
            </pre>

            <h2>Removing Elements</h2>

            <p>
                The <code>pop()</code> method removes the last element from
                an array.
            </p>

            <pre>
                <code>{`let fruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

fruits.pop();

console.log(fruits);`}</code>
            </pre>

            <h2>Array Length</h2>

            <p>
                The <code>length</code> property tells you how many elements
                are in an array.
            </p>

            <pre>
                <code>{`let fruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(fruits.length);`}</code>
            </pre>

            <h2>Readonly Arrays</h2>

            <p>
                A readonly array cannot be modified after it is created.
            </p>

            <pre>
                <code>{`const fruits: readonly string[] = [
    "Apple",
    "Banana",
    "Mango"
];

// fruits.push("Orange"); // Error
// fruits[0] = "Orange";  // Error`}</code>
            </pre>

            <h2>Arrays with Multiple Types</h2>

            <p>
                Union types can be used when an array needs to contain
                different types of values.
            </p>

            <pre>
                <code>{`let values: (string | number)[] = [
    "Asmit",
    13,
    "TypeScript",
    100
];`}</code>
            </pre>

            <h2>Looping Through Arrays</h2>

            <p>
                You can use methods such as <code>forEach()</code> to work
                with every element in an array.
            </p>

            <pre>
                <code>{`let fruits: string[] = [
    "Apple",
    "Banana",
    "Mango"
];

fruits.forEach((fruit) => {
    console.log(fruit);
});`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Arrays store multiple values in a single variable. TypeScript
                allows you to define array types, access and modify elements,
                add and remove values, use readonly arrays, work with union
                types, and loop through array elements.
            </p>

        </div>
    );
}