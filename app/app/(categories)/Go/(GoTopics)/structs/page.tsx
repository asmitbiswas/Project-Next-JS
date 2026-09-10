
export default function GoStructs() {
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
        Structs
      </h1>

      <p
        style={{
          color: "#aaa",
          fontSize: "17px",
          marginBottom: "40px",
        }}
      >
        Learn how to group related data together using structs in Go.
      </p>

      <h2>What is a Struct?</h2>

      <p style={{ color: "#bbb" }}>
        A struct is a custom data type that lets you group different values
        together. Each value is stored in a field with its own name and type.
      </p>

      <h2 style={{ marginTop: "40px" }}>Creating a Struct</h2>

      <p style={{ color: "#bbb" }}>
        Use the <code>type</code> keyword followed by the struct name and
        the <code>struct</code> keyword.
      </p>

      <pre style={codeStyle}>
{`type Person struct {
    Name string
    Age  int
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Creating a Struct Value</h2>

      <p style={{ color: "#bbb" }}>
        Once a struct is defined, you can create a value using its type.
      </p>

      <pre style={codeStyle}>
{`person := Person{
    Name: "Asmit",
    Age: 13,
}

fmt.Println(person)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Accessing Fields</h2>

      <p style={{ color: "#bbb" }}>
        Use the dot <code>.</code> operator to access a field.
      </p>

      <pre style={codeStyle}>
{`person := Person{
    Name: "Asmit",
    Age: 13,
}

fmt.Println(person.Name)
fmt.Println(person.Age)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Changing Fields</h2>

      <p style={{ color: "#bbb" }}>
        Struct fields can be changed after the struct has been created.
      </p>

      <pre style={codeStyle}>
{`person := Person{
    Name: "Asmit",
    Age: 13,
}

person.Age = 14

fmt.Println(person.Age)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Struct with Different Types</h2>

      <p style={{ color: "#bbb" }}>
        A struct can contain fields with completely different types.
      </p>

      <pre style={codeStyle}>
{`type Developer struct {
    Name     string
    Age      int
    IsActive bool
    Salary   float64
}

developer := Developer{
    Name:     "Alex",
    Age:      25,
    IsActive: true,
    Salary:   50000.50,
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Anonymous Structs</h2>

      <p style={{ color: "#bbb" }}>
        You can create a struct without giving it a named type.
      </p>

      <pre style={codeStyle}>
{`person := struct {
    Name string
    Age  int
}{
    Name: "Alex",
    Age: 25,
}

fmt.Println(person.Name)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Structs with Functions</h2>

      <p style={{ color: "#bbb" }}>
        Structs can be used with functions to work with related data.
      </p>

      <pre style={codeStyle}>
{`type Person struct {
    Name string
    Age  int
}

func introduce(person Person) {
    fmt.Println("My name is", person.Name)
}

func main() {
    person := Person{
        Name: "Alex",
        Age: 25,
    }

    introduce(person)
}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Why Use Structs?</h2>

      <ul
        style={{
          color: "#bbb",
          paddingLeft: "25px",
        }}
      >
        <li>Create your own data types.</li>
        <li>Group related data together.</li>
        <li>Keep complex data organized.</li>
        <li>Make programs easier to understand.</li>
        <li>Structs are heavily used in Go backend development.</li>
      </ul>
    </div>
  );
}

