export default function Enums() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>Enums</h1>

            <p>
                Enums, short for enumerations, allow you to define a set of
                named constants. They are useful when a value should be one
                of a specific group of options.
            </p>

            <h2>Numeric Enums</h2>

            <p>
                By default, enum members receive numeric values starting from
                <code>0</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`enum Direction {
    Up,
    Down,
    Left,
    Right
}

let direction: Direction = Direction.Up;

console.log(direction);`}</code>
            </pre>

            <h2>Custom Enum Values</h2>

            <p>
                You can assign your own values to enum members.
            </p>

            <pre style={codeStyle}>
                <code>{`enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

let status: Status = Status.Success;

console.log(status);`}</code>
            </pre>

            <h2>String Enums</h2>

            <p>
                Enum members can also have string values. String enums are
                useful when you want readable values.
            </p>

            <pre style={codeStyle}>
                <code>{`enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

let role: Role = Role.Admin;

console.log(role);`}</code>
            </pre>

            <h2>Using Enums in Functions</h2>

            <p>
                Enums can be used as function parameter types to restrict
                which values can be passed to a function.
            </p>

            <pre style={codeStyle}>
                <code>{`enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction): void {
    console.log("Moving:", direction);
}

move(Direction.Up);
move(Direction.Left);`}</code>
            </pre>

            <h2>Enum Member Access</h2>

            <p>
                You can access an enum member using the enum name followed
                by a dot.
            </p>

            <pre style={codeStyle}>
                <code>{`enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

console.log(Color.Red);
console.log(Color.Blue);`}</code>
            </pre>

            <h2>Enums with Switch</h2>

            <p>
                Enums work well with <code>switch</code> statements when
                different actions are needed for different values.
            </p>

            <pre style={codeStyle}>
                <code>{`enum Status {
    Loading,
    Success,
    Error
}

function handleStatus(status: Status): void {
    switch (status) {
        case Status.Loading:
            console.log("Loading...");
            break;

        case Status.Success:
            console.log("Success!");
            break;

        case Status.Error:
            console.log("Something went wrong.");
            break;
    }
}

handleStatus(Status.Success);`}</code>
            </pre>

            <h2>Enums vs Union Types</h2>

            <p>
                Enums and union types can both represent a fixed set of
                possible values, but they work differently.
            </p>

            <pre style={codeStyle}>
                <code>{`// Enum
enum Direction {
    Up = "up",
    Down = "down"
}

// Union type
type DirectionType = "up" | "down";`}</code>
            </pre>

            <h2>When to Use Enums</h2>

            <p>
                Enums are useful when you want a named collection of related
                constants that can be reused throughout your application.
            </p>

            <pre style={codeStyle}>
                <code>{`enum Plan {
    Free = "free",
    Pro = "pro",
    Premium = "premium"
}

let currentPlan: Plan = Plan.Pro;

console.log(currentPlan);`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                Enums allow you to define a collection of named constants.
                TypeScript supports numeric and string enums, and enums can
                be used with variables, functions, and switch statements.
                Union types can also be used when you only need a fixed set
                of allowed values.
            </p>

        </div>
    );
}