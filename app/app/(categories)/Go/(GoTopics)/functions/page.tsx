export default function GoFunctions() {
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
        lineHeight: "1.2",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Functions
      </h1>

      <p
        style={{
          color: "#aaa",
          fontSize: "17px",
          marginBottom: "40px",
        }}
      >
        Learn how to create reusable blocks of code using functions in Go.
      </p>

      <h2>What is a Function?</h2>

      <p style={{ color: "#bbb" }}>
        A function is a reusable block of code that performs a specific
        task. Functions help keep your programs organized and prevent
        repeating the same code.
      </p>

      <h2 style={{ marginTop: "40px" }}>Creating a Function</h2>

      <p style={{ color: "#bbb" }}>
        In Go, functions are declared using the <code>func</code> keyword.
      </p>

      <pre style={codeStyle}>
{`func greet() {
    fmt.Println("Hello, Developer!")
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Calling a Function</h2>

      <p style={{ color: "#bbb" }}>
        A function runs when you call it using its name followed by
        parentheses.
      </p>

      <pre style={codeStyle}>
{`func greet() {
    fmt.Println("Hello, Developer!")
}

func main() {
    greet()
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Function Parameters</h2>

      <p style={{ color: "#bbb" }}>
        Parameters allow you to pass data into a function.
      </p>

      <pre style={codeStyle}>
{`func greet(name string) {
    fmt.Println("Hello", name)
}

func main() {
    greet("Asmit")
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Returning Values</h2>

      <p style={{ color: "#bbb" }}>
        A function can return a value. The return type is written after the
        function parameters.
      </p>

      <pre style={codeStyle}>
{`func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(10, 20)
    fmt.Println(result)
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Multiple Return Values</h2>

      <p style={{ color: "#bbb" }}>
        One of Go's useful features is that a function can return multiple
        values.
      </p>

      <pre style={codeStyle}>
{`func divide(a int, b int) (int, int) {
    return a / b, a % b
}

func main() {
    result, remainder := divide(10, 3)

    fmt.Println(result)
    fmt.Println(remainder)
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Why Use Functions?</h2>

      <ul
        style={{
          color: "#bbb",
          paddingLeft: "25px",
        }}
      >
        <li>Reuse code</li>
        <li>Keep programs organized</li>
        <li>Reduce repetition</li>
        <li>Make code easier to maintain</li>
        <li>Break large programs into smaller parts</li>
      </ul>
    </div>
  );
}

