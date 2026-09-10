export default function GoArrays() {
  const codeStyle = {
    backgroundColor: "#111",
    padding: "14px",
    borderRadius: "12px",
    borderLeft: "6px solid rgb(13 200 13)",
    overflowX: "auto" as const,
    fontSize: "14px",
    lineHeight: "1.8",
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        // padding: "40px",
        lineHeight: "1.2",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Arrays
      </h1>

      <p
        style={{
          color: "#aaa",
          fontSize: "17px",
          marginBottom: "40px",
        }}
      >
        Learn how to store multiple values of the same type using arrays in Go.
      </p>

      <h2>What is an Array?</h2>

      <p style={{ color: "#bbb" }}>
        An array is a collection of a fixed number of values of the same
        type. Each value is stored at a numbered position called an index.
      </p>

      <h2 style={{ marginTop: "40px" }}>Creating an Array</h2>

      <p style={{ color: "#bbb" }}>
        You can create an array by specifying its length and type.
      </p>

      <pre style={codeStyle}>
{`var numbers [5]int`}
      </pre>

      <p style={{ color: "#bbb", marginTop: "20px" }}>
        The array above can store exactly 5 integer values.
      </p>

      <h2 style={{ marginTop: "40px" }}>Initializing an Array</h2>

      <p style={{ color: "#bbb" }}>
        You can initialize an array with values when you create it.
      </p>

      <pre style={codeStyle}>
{`numbers := [5]int{10, 20, 30, 40, 50}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Array Index</h2>

      <p style={{ color: "#bbb" }}>
        Array indexes start at <code>0</code>. The first element is at index
        0, the second at index 1, and so on.
      </p>

      <pre style={codeStyle}>
{`numbers := [5]int{10, 20, 30, 40, 50}

fmt.Println(numbers[0])
fmt.Println(numbers[2])`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Changing Array Values</h2>

      <p style={{ color: "#bbb" }}>
        You can change an element by accessing its index.
      </p>

      <pre style={codeStyle}>
{`numbers := [3]int{10, 20, 30}

numbers[1] = 99

fmt.Println(numbers)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Array Length</h2>

      <p style={{ color: "#bbb" }}>
        The <code>len()</code> function returns the number of elements in
        an array.
      </p>

      <pre style={codeStyle}>
{`numbers := [5]int{10, 20, 30, 40, 50}

fmt.Println(len(numbers))`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Looping Through an Array</h2>

      <p style={{ color: "#bbb" }}>
        You can use a <code>for</code> loop to go through every element.
      </p>

      <pre style={codeStyle}>
{`numbers := [5]int{10, 20, 30, 40, 50}

for i := 0; i < len(numbers); i++ {
    fmt.Println(numbers[i])
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Arrays with Strings</h2>

      <p style={{ color: "#bbb" }}>
        Arrays can store any single type, including strings.
      </p>

      <pre style={codeStyle}>
{`languages := [3]string{"Go", "TypeScript", "JavaScript"}

fmt.Println(languages[0])`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Key Points</h2>

      <ul
        style={{
          color: "#bbb",
          paddingLeft: "25px",
        }}
      >
        <li>Arrays have a fixed length.</li>
        <li>All elements must have the same type.</li>
        <li>Array indexes start at 0.</li>
        <li>Use len() to get the array length.</li>
        <li>Arrays can store numbers, strings, booleans, and more.</li>
      </ul>
    </div>
  );
}