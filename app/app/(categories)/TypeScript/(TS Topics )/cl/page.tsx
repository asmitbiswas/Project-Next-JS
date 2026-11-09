export default function Classes() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Classes</h1>

            <p>
                Classes are blueprints for creating objects. They can contain
                properties and methods that describe the data and behavior of
                an object.
            </p>

            <h2>Basic Class</h2>

            <p>
                You can create a class using the <code>class</code> keyword.
            </p>

            <pre style={codeStyle}>
                <code>{`class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const user = new User("Asmit", 13);

console.log(user.name);
console.log(user.age);`}</code>
            </pre>

            <h2>Class Methods</h2>

            <p>
                Classes can contain methods that define what an object can do.
            </p>

            <pre style={codeStyle}>
                <code>{`class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log("Hello " + this.name);
    }
}

const user = new User("Asmit");

user.greet();`}</code>
            </pre>

            <h2>Access Modifiers</h2>

            <p>
                TypeScript provides access modifiers such as
                <code>public</code>, <code>private</code>, and
                <code>protected</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`class User {
    public name: string;
    private password: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
}

const user = new User("Asmit", "secret");

console.log(user.name);

// user.password; // Error`}</code>
            </pre>

            <h2>Readonly Properties</h2>

            <p>
                The <code>readonly</code> modifier prevents a property from
                being changed after it has been initialized.
            </p>

            <pre style={codeStyle}>
                <code>{`class User {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const user = new User(1, "Asmit");

user.name = "Alex";

// user.id = 2; // Error`}</code>
            </pre>

            <h2>Inheritance</h2>

            <p>
                A class can extend another class and inherit its properties
                and methods.
            </p>

            <pre style={codeStyle}>
                <code>{`class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(this.name + " is moving.");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}

const dog = new Dog("Buddy");

dog.move();
dog.bark();`}</code>
            </pre>

            <h2>Using super</h2>

            <p>
                The <code>super</code> keyword can be used to call the
                constructor or methods of the parent class.
            </p>

            <pre style={codeStyle}>
                <code>{`class Animal {
    constructor(public name: string) {}

    move(): void {
        console.log(this.name + " is moving.");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark(): void {
        console.log("Woof!");
    }
}

const dog = new Dog("Buddy");

dog.move();
dog.bark();`}</code>
            </pre>

            <h2>Getters and Setters</h2>

            <p>
                Getters and setters allow you to control how properties are
                read and changed.
            </p>

            <pre style={codeStyle}>
                <code>{`class User {
    constructor(private _name: string) {}

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const user = new User("Asmit");

console.log(user.name);

user.name = "Alex";

console.log(user.name);`}</code>
            </pre>

            <h2>Static Members</h2>

            <p>
                Static properties and methods belong to the class itself
                rather than individual objects.
            </p>

            <pre style={codeStyle}>
                <code>{`class MathUtils {
    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log(MathUtils.add(10, 20));`}</code>
            </pre>

            <h2>Implementing Interfaces</h2>

            <p>
                A class can implement an interface and must provide the
                properties and methods required by that interface.
            </p>

            <pre style={codeStyle}>
                <code>{`interface Person {
    name: string;
    greet(): void;
}

class User implements Person {
    constructor(public name: string) {}

    greet(): void {
        console.log("Hello " + this.name);
    }
}

const user = new User("Asmit");

user.greet();`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Classes provide a way to create objects with their own
                properties and methods. TypeScript supports constructors,
                access modifiers, readonly properties, inheritance, getters,
                setters, static members, and interfaces with classes.
            </p>

        </div>
    );
}