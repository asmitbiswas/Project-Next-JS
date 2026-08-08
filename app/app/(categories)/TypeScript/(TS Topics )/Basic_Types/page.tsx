export default function BasicTypes() {
    return (
        <div>

            <h1>Basic Types</h1>

            <p>
                TypeScript provides several basic types that allow you to
                describe what kind of values a variable can contain.
            </p>

            <h2>String</h2>

            <p>
                The <code>string</code> type is used for text values.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let username: string = "Asmit";
let language: string = "TypeScript";`}
            </pre>

            <h2>Number</h2>

            <p>
                The <code>number</code> type is used for both integers and
                floating-point numbers.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let age: number = 13;
let price: number = 99.99;`}
            </pre>

            <h2>Boolean</h2>

            <p>
                The <code>boolean</code> type represents either
                <code>true</code> or <code>false</code>.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let isLoggedIn: boolean = true;
let isAdmin: boolean = false;`}
            </pre>

            <h2>Array</h2>

            <p>
                Arrays store multiple values of the same or compatible type.
                TypeScript provides several ways to define array types.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let numbers: number[] = [1, 2, 3, 4];

let names: string[] = ["Asmit", "Alex", "Sam"];`}
            </pre>

            <h2>Object</h2>

            <p>
                The <code>object</code> type represents non-primitive values.
                You can also describe the exact shape of an object.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let user: {
    name: string;
    age: number;
} = {
    name: "Asmit",
    age: 13
};`}
            </pre>

            <h2>Tuple</h2>

            <p>
                A tuple defines an array with a fixed number of elements and
                specific types for each position.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let user: [string, number] = ["Asmit", 13];`}
            </pre>

            <h2>Any</h2>

            <p>
                The <code>any</code> type disables most type checking for a
                value. It should generally be avoided when a more specific
                type can be used.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let value: any = "Hello";

value = 100;
value = true;`}
            </pre>

            <h2>Unknown</h2>

            <p>
                The <code>unknown</code> type can hold values of any type,
                but you must narrow the type before performing operations
                on the value.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}`}
            </pre>

            <h2>Null</h2>

            <p>
                The <code>null</code> value represents the intentional
                absence of a value.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let result: null = null;`}
            </pre>

            <h2>Undefined</h2>

            <p>
                The <code>undefined</code> value represents a value that
                has not been assigned.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let result: undefined = undefined;`}
            </pre>

            <h2>BigInt</h2>

            <p>
                The <code>bigint</code> type is used for integers that are
                larger than the range supported by the <code>number</code>
                type.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let bigNumber: bigint = 9007199254740991n;`}
            </pre>

            <h2>Symbol</h2>

            <p>
                The <code>symbol</code> type represents a unique value.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let id: symbol = Symbol("id");`}
            </pre>

            <h2>Type Inference</h2>

            <p>
                TypeScript can automatically determine a variable's type from
                the value assigned to it. This is called type inference.
            </p>

            <pre
                style={{
                    backgroundColor: "#111",
                    padding: "14px",
                    borderRadius: "12px",
                    borderLeft: "6px solid rgb(13 200 13)",
                    overflowX: "auto"
                }}
            >
{`let username = "Asmit";
// TypeScript infers: string

let age = 13;
// TypeScript infers: number`}
            </pre>

            <h2>Basic Types Overview</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    margin: "24px 0"
                }}
            >
                <tbody>
                    <tr>
                        <th style={{
                            border: "1px solid #333",
                            padding: "12px",
                            textAlign: "left",
                            backgroundColor: "#111"
                        }}>
                            Type
                        </th>

                        <th style={{
                            border: "1px solid #333",
                            padding: "12px",
                            textAlign: "left",
                            backgroundColor: "#111"
                        }}>
                            Used For
                        </th>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            string
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Text
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            number
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Numbers
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            boolean
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            true / false
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            array
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Collections of values
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            tuple
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Fixed-length typed arrays
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            object
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Objects
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            any
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Disables most type checking
                        </td>
                    </tr>

                    <tr>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            unknown
                        </td>
                        <td style={{ border: "1px solid #333", padding: "12px" }}>
                            Unknown values requiring type narrowing
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2>Summary</h2>

            <p>
                TypeScript's basic types help describe the values your
                variables can contain. Using types makes code easier to
                understand and allows TypeScript to catch many mistakes
                before the program runs.
            </p>

        </div>
    );
}