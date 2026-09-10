
export default function GoInterfaces() {
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
        Interfaces
      </h1>

      <p style={{ color: "#aaa", fontSize: "17px", marginBottom: "40px" }}>
        Learn how interfaces let different types follow the same behavior in Go.
      </p>

      <h2>What is an Interface?</h2>

      <p style={{ color: "#bbb" }}>
        An interface is a type that defines a set of methods. Any type that
        implements all of those methods automatically satisfies the interface.
      </p>

      <h2 style={{ marginTop: "40px" }}>Creating an Interface</h2>

      <p style={{ color: "#bbb" }}>
        Use the <code>type</code> keyword followed by the interface name and
        the <code>interface</code> keyword.
      </p>

      <pre style={codeStyle}>
{`type Speaker interface {
    Speak()
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Implementing an Interface</h2>

      <p style={{ color: "#bbb" }}>
        Go does not use an explicit keyword to implement an interface. A type
        implements an interface simply by having all of its required methods.
      </p>

      <pre style={codeStyle}>
{`type Speaker interface {
    Speak()
}

type Person struct {
    Name string
}

func (p Person) Speak() {
    fmt.Println("Hello!")
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Using an Interface</h2>

      <p style={{ color: "#bbb" }}>
        A function can accept an interface instead of a specific type.
      </p>

      <pre style={codeStyle}>
{`type Speaker interface {
    Speak()
}

func makeSpeak(s Speaker) {
    s.Speak()
}

type Person struct {
    Name string
}

func (p Person) Speak() {
    fmt.Println("Hello!")
}

func main() {
    person := Person{Name: "Alex"}

    makeSpeak(person)
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Multiple Types</h2>

      <p style={{ color: "#bbb" }}>
        Different types can implement the same interface.
      </p>

      <pre style={codeStyle}>
{`type Speaker interface {
    Speak()
}

type Person struct {
    Name string
}

type Robot struct {
    Model string
}

func (p Person) Speak() {
    fmt.Println("Hello from a person")
}

func (r Robot) Speak() {
    fmt.Println("Beep boop")
}

func makeSpeak(s Speaker) {
    s.Speak()
}

func main() {
    person := Person{Name: "Alex"}
    robot := Robot{Model: "RX-1"}

    makeSpeak(person)
    makeSpeak(robot)
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Empty Interface</h2>

      <p style={{ color: "#bbb" }}>
        An empty interface has no methods, so every value can be stored in it.
        The modern Go syntax for this is <code>any</code>.
      </p>

      <pre style={codeStyle}>
{`var value any

value = 42
fmt.Println(value)

value = "Hello"
fmt.Println(value)

value = true
fmt.Println(value)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Interface Values</h2>

      <p style={{ color: "#bbb" }}>
        An interface value can hold a concrete value that satisfies the
        interface.
      </p>

      <pre style={codeStyle}>
{`type Animal interface {
    Sound()
}

type Dog struct{}

func (d Dog) Sound() {
    fmt.Println("Woof")
}

func main() {
    var animal Animal

    animal = Dog{}

    animal.Sound()
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Why Use Interfaces?</h2>

      <ul style={{ color: "#bbb", paddingLeft: "25px" }}>
        <li>Write flexible and reusable code.</li>
        <li>Allow different types to share behavior.</li>
        <li>Reduce dependencies between parts of a program.</li>
        <li>Make large applications easier to maintain.</li>
        <li>Interfaces are heavily used in Go backend development.</li>
      </ul>
    </div>
  );
}

