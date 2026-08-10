export default function UtilityTypes() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Utility Types</h1>

            <p>
                Utility types are built-in TypeScript types that help you
                transform existing types into new types. They make it easier
                to reuse and modify type definitions.
            </p>

            <h2>Partial</h2>

            <p>
                <code>Partial&lt;T&gt;</code> makes all properties of a type
                optional.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age: number;
    email: string;
};

type OptionalUser = Partial<User>;

const user: OptionalUser = {
    name: "Asmit"
};`}</code>
            </pre>

            <h2>Required</h2>

            <p>
                <code>Required&lt;T&gt;</code> makes all optional properties
                required.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age?: number;
};

type CompleteUser = Required<User>;

const user: CompleteUser = {
    name: "Asmit",
    age: 13
};`}</code>
            </pre>

            <h2>Readonly</h2>

            <p>
                <code>Readonly&lt;T&gt;</code> makes all properties readonly,
                preventing them from being changed.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age: number;
};

const user: Readonly<User> = {
    name: "Asmit",
    age: 13
};

// user.age = 14; // Error`}</code>
            </pre>

            <h2>Pick</h2>

            <p>
                <code>Pick&lt;T, K&gt;</code> creates a new type containing
                only selected properties from another type.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age: number;
    email: string;
};

type UserPreview = Pick<User, "name" | "age">;

const user: UserPreview = {
    name: "Asmit",
    age: 13
};`}</code>
            </pre>

            <h2>Omit</h2>

            <p>
                <code>Omit&lt;T, K&gt;</code> creates a new type by removing
                selected properties.
            </p>

            <pre style={codeStyle}>
                <code>{`type User = {
    name: string;
    age: number;
    password: string;
};

type PublicUser = Omit<User, "password">;

const user: PublicUser = {
    name: "Asmit",
    age: 13
};`}</code>
            </pre>

            <h2>Record</h2>

            <p>
                <code>Record&lt;K, T&gt;</code> creates an object type with
                a specific set of keys and value types.
            </p>

            <pre style={codeStyle}>
                <code>{`type Scores = Record<string, number>;

const scores: Scores = {
    Asmit: 100,
    Alex: 90,
    John: 85
};`}</code>
            </pre>

            <h2>Exclude</h2>

            <p>
                <code>Exclude&lt;T, U&gt;</code> removes types from a union
                that are assignable to another type.
            </p>

            <pre style={codeStyle}>
                <code>{`type Status =
    | "loading"
    | "success"
    | "error";

type FailedStatus = Exclude<Status, "loading" | "success">;

let status: FailedStatus = "error";`}</code>
            </pre>

            <h2>Extract</h2>

            <p>
                <code>Extract&lt;T, U&gt;</code> keeps only the types from a
                union that are assignable to another type.
            </p>

            <pre style={codeStyle}>
                <code>{`type Status =
    | "loading"
    | "success"
    | "error";

type SuccessfulStatus = Extract<Status, "success" | "error">;

let status: SuccessfulStatus = "success";`}</code>
            </pre>

            <h2>NonNullable</h2>

            <p>
                <code>NonNullable&lt;T&gt;</code> removes
                <code>null</code> and <code>undefined</code> from a type.
            </p>

            <pre style={codeStyle}>
                <code>{`type Value = string | number | null | undefined;

type SafeValue = NonNullable<Value>;

let value: SafeValue = "Hello";`}</code>
            </pre>

            <h2>ReturnType</h2>

            <p>
                <code>ReturnType&lt;T&gt;</code> extracts the return type of
                a function.
            </p>

            <pre style={codeStyle}>
                <code>{`function getUser() {
    return {
        name: "Asmit",
        age: 13
    };
}

type User = ReturnType<typeof getUser>;

const user: User = {
    name: "Alex",
    age: 14
};`}</code>
            </pre>

            <h2>Parameters</h2>

            <p>
                <code>Parameters&lt;T&gt;</code> extracts the parameter types
                of a function as a tuple.
            </p>

            <pre style={codeStyle}>
                <code>{`function add(a: number, b: number): number {
    return a + b;
}

type AddParameters = Parameters<typeof add>;

const values: AddParameters = [10, 20];`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Utility types provide ready-made ways to transform existing
                TypeScript types. Common utility types include
                <code>Partial</code>, <code>Required</code>,
                <code>Readonly</code>, <code>Pick</code>, <code>Omit</code>,
                <code>Record</code>, <code>Exclude</code>, <code>Extract</code>,
                <code>NonNullable</code>, <code>ReturnType</code>, and
                <code>Parameters</code>.
            </p>

        </div>
    );
}