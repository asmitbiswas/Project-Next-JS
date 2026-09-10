export default function GoErrorHandling() {
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
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Error Handling
      </h1>

      <p style={{ color: "#aaa", fontSize: "17px", marginBottom: "40px" }}>
        Learn how Go handles errors and how to write programs that respond to
        failures safely.
      </p>

      <h2>What is Error Handling?</h2>

      <p style={{ color: "#bbb" }}>
        Errors happen when something goes wrong while a program is running.
        Go uses explicit error values instead of exceptions for most errors.
      </p>

      <h2 style={{ marginTop: "40px" }}>The error Type</h2>

      <p style={{ color: "#bbb" }}>
        Go has a built-in <code>error</code> interface that is commonly used
        to represent an error.
      </p>

      <pre style={codeStyle}>
{`var err error

if err != nil {
    fmt.Println("Something went wrong")
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Returning an Error</h2>

      <p style={{ color: "#bbb" }}>
        Functions can return both a result and an error.
      </p>

      <pre style={codeStyle}>
{`func divide(a float64, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }

    return a / b, nil
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Checking an Error</h2>

      <p style={{ color: "#bbb" }}>
        After calling a function that returns an error, check whether the
        error is <code>nil</code>.
      </p>

      <pre style={codeStyle}>
{`result, err := divide(10, 2)

if err != nil {
    fmt.Println("Error:", err)
    return
}

fmt.Println("Result:", result)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Creating Errors</h2>

      <p style={{ color: "#bbb" }}>
        Use <code>errors.New()</code> to create a simple error.
      </p>

      <pre style={codeStyle}>
{`import "errors"

err := errors.New("something went wrong")

fmt.Println(err)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>fmt.Errorf</h2>

      <p style={{ color: "#bbb" }}>
        Use <code>fmt.Errorf()</code> when you want to include dynamic
        information in an error message.
      </p>

      <pre style={codeStyle}>
{`import "fmt"

age := -5

err := fmt.Errorf("invalid age: %d", age)

fmt.Println(err)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>A Complete Example</h2>

      <p style={{ color: "#bbb" }}>
        Here is a simple example showing how a function can return and handle
        an error.
      </p>

      <pre style={codeStyle}>
{`package main

import (
    "errors"
    "fmt"
)

func divide(a float64, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }

    return a / b, nil
}

func main() {
    result, err := divide(10, 0)

    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    fmt.Println("Result:", result)
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Why Error Handling Matters</h2>

      <ul style={{ color: "#bbb", paddingLeft: "25px" }}>
        <li>Prevents unexpected program behavior.</li>
        <li>Makes failures easier to understand.</li>
        <li>Allows programs to recover or respond properly.</li>
        <li>Makes backend applications more reliable.</li>
        <li>Helps developers find problems quickly.</li>
      </ul>
    </div>
  );
}

