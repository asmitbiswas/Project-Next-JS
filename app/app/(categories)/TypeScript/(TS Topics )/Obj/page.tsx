export default function Objects() {
    return (
        <div>

            <h1>Objects</h1>

            <p>
                Objects are used to store related data together using
                key-value pairs. TypeScript allows you to define the types
                of an object's properties.
            </p>

            <h2>Basic Object</h2>

            <p>
                You can explicitly define the structure and types of an object.
            </p>

            <pre>
                <code>{`let user: {
    name: string;
    age: number;
} = {
    name: "Asmit",
    age: 13
};`}</code>
            </pre>

            <h2>Accessing Properties</h2>

            <p>
                You can access an object's properties using dot notation.
            </p>

            <pre>
                <code>{`let user = {
    name: "Asmit",
    age: 13
};

console.log(user.name);
console.log(user.age);`}</code>
            </pre>

            <h2>Changing Properties</h2>

            <p>
                Object properties can be changed as long as the new value
                matches the property's type.
            </p>

            <pre>
                <code>{`let user: {
    name: string;
    age: number;
} = {
    name: "Asmit",
    age: 13
};

user.name = "Alex";
user.age = 14;`}</code>
            </pre>

            <h2>Optional Properties</h2>

            <p>
                Add <code>?</code> to make an object property optional.
            </p>

            <pre>
                <code>{`let user: {
    name: string;
    age: number;
    email?: string;
} = {
    name: "Asmit",
    age: 13
};`}</code>
            </pre>

            <h2>Readonly Properties</h2>

            <p>
                The <code>readonly</code> keyword prevents a property from
                being changed after the object is created.
            </p>

            <pre>
                <code>{`let user: {
    readonly id: number;
    name: string;
} = {
    id: 1,
    name: "Asmit"
};

user.name = "Alex";

// user.id = 2; // Error`}</code>
            </pre>

            <h2>Nested Objects</h2>

            <p>
                Objects can contain other objects as their properties.
            </p>

            <pre>
                <code>{`let user: {
    name: string;
    address: {
        city: string;
        country: string;
    };
} = {
    name: "Asmit",
    address: {
        city: "Kolkata",
        country: "India"
    }
};

console.log(user.address.city);`}</code>
            </pre>

            <h2>Objects with Methods</h2>

            <p>
                Objects can contain functions, which are called methods.
            </p>

            <pre>
                <code>{`let user = {
    name: "Asmit",

    greet(): void {
        console.log("Hello " + this.name);
    }
};

user.greet();`}</code>
            </pre>

            <h2>Objects with Type Aliases</h2>

            <p>
                Type aliases can be used to describe an object's structure
                and make the type reusable.
            </p>

            <pre>
                <code>{`type User = {
    name: string;
    age: number;
};

let user: User = {
    name: "Asmit",
    age: 13
};`}</code>
            </pre>

            <h2>Objects with Interfaces</h2>

            <p>
                Interfaces can also be used to define the structure of objects.
            </p>

            <pre>
                <code>{`interface Product {
    name: string;
    price: number;
}

let product: Product = {
    name: "Keyboard",
    price: 2000
};`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Objects store related data using key-value pairs. TypeScript
                allows you to define property types, optional properties,
                readonly properties, nested objects, methods, and reusable
                object structures with type aliases and interfaces.
            </p>

        </div>
    );
}