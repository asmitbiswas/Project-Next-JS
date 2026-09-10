export default function GoBasics() {
      const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100px",
        lineHeight: "1.8",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Go Basics
      </h1>

      <p
        style={{
          color: "#aaa",
          fontSize: "15px",
          marginBottom: "40px",
        }}
      >
        Learn the fundamentals of Go and build a strong foundation for
        backend development.
      </p>

      <section style={{ marginBottom: "40px" }}>
        <h2>What is Go?</h2>

        <p style={{ color: "#bbb" }}>
          Go, also known as Golang, is a statically typed programming
          language created at Google. It is designed to be simple, fast,
          reliable, and efficient.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Your First Go Program</h2>

        <pre
          style={codeStyle}
        >
{`package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`}
        </pre>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Variables</h2>

        <p style={{ color: "#bbb" }}>
          Variables are used to store data. Go allows you to declare
          variables using the <code>var</code> keyword or the short
          declaration syntax.
        </p>

        <pre
          style={codeStyle}
        >
{`var name string = "Asmit"

age := 13`}
        </pre>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Functions</h2>

        <p style={{ color: "#bbb" }}>
          Functions are reusable blocks of code that perform a specific
          task.
        </p>

        <pre
          style={codeStyle}
        >
{`func greet(name string) {
    fmt.Println("Hello", name)
}

func main() {
    greet("Developer")
}`}
        </pre>
      </section>

      <section>
        <h2>What You'll Learn</h2>

        <ul
          style={{
            color: "#bbb",
            paddingLeft: "25px",
          }}
        >
          <li>Variables and Constants</li>
          <li>Data Types</li>
          <li>Operators</li>
          <li>Conditions</li>
          <li>Loops</li>
          <li>Functions</li>
          <li>Arrays and Slices</li>
          <li>Structs</li>
          <li>Maps</li>
          <li>Interfaces</li>
          <li>Goroutines</li>
        </ul>
      </section>
    </div>
  );
}

