export default function Generics() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Generics</h1>

            <p>
                Generics allow you to create reusable code that can work with
                different types while still keeping type safety.
            </p>

            <h2>Basic Generic</h2>

            <p>
                A generic type is written inside angle brackets
                <code>&lt;&gt;</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`function identity<T>(value: T): T {
    return value;
}

const numberValue = identity<number>(100);
const stringValue = identity<string>("Hello");

console.log(numberValue);
console.log(stringValue);`}</code>
            </pre>

            <h2>Type Inference with Generics</h2>

            <p>
                TypeScript can often infer the generic type automatically,
                so you do not always need to specify it.
            </p>

            <pre style={codeStyle}>
                <code>{`function identity<T>(value: T): T {
    return value;
}

const numberValue = identity(100);
const stringValue = identity("Hello");`}</code>
            </pre>

            <h2>Generic Arrays</h2>

            <p>
                Generics can be used to describe arrays while keeping the
                type of their elements.
            </p>

            <pre style={codeStyle}>
                <code>{`function getFirst<T>(items: T[]): T {
    return items[0];
}

const firstNumber = getFirst([10, 20, 30]);
const firstName = getFirst(["Asmit", "Alex", "John"]);`}</code>
            </pre>

            <h2>Multiple Type Parameters</h2>

            <p>
                A generic function can use more than one type parameter.
            </p>

            <pre style={codeStyle}>
                <code>{`function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result = pair("Asmit", 13);

console.log(result);`}</code>
            </pre>

            <h2>Generic Object Types</h2>

            <p>
                Generics can also be used with object types to make them
                reusable with different types of data.
            </p>

            <pre style={codeStyle}>
                <code>{`type Box<T> = {
    value: T;
};

const numberBox: Box<number> = {
    value: 100
};

const stringBox: Box<string> = {
    value: "Hello"
};`}</code>
            </pre>

            <h2>Generic Interfaces</h2>

            <p>
                Interfaces can use generics when their properties need to
                work with different types.
            </p>

            <pre style={codeStyle}>
                <code>{`interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const userResponse: ApiResponse<string> = {
    data: "Asmit",
    success: true
};

const scoreResponse: ApiResponse<number> = {
    data: 100,
    success: true
};`}</code>
            </pre>

            <h2>Generic Constraints</h2>

            <p>
                You can restrict the types that a generic can accept by
                using the <code>extends</code> keyword.
            </p>

            <pre style={codeStyle}>
                <code>{`function getLength<T extends { length: number }>(
    value: T
): number {
    return value.length;
}

console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));`}</code>
            </pre>

            <h2>Why Use Generics?</h2>

            <p>
                Generics allow you to write reusable code without giving up
                TypeScript's type safety.
            </p>

            <pre style={codeStyle}>
                <code>{`function reverse<T>(items: T[]): T[] {
    return [...items].reverse();
}

const numbers = reverse([1, 2, 3]);
const names = reverse(["Asmit", "Alex", "John"]);`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Generics make code reusable across different types while
                preserving type safety. They can be used with functions,
                arrays, objects, interfaces, and type aliases.
            </p>

        </div>
    );
}