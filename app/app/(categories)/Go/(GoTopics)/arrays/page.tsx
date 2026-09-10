
export default function GoArraysSlices() {
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
        Arrays & Slices
      </h1>

      <p
        style={{
          color: "#aaa",
          fontSize: "17px",
          marginBottom: "40px",
        }}
      >
        Learn how Go stores collections of values using arrays and slices.
      </p>

      <h2>Arrays</h2>

      <p style={{ color: "#bbb" }}>
        An array is a collection of a fixed number of values. Every element
        in an array must have the same type.
      </p>

      <h2 style={{ marginTop: "40px" }}>Creating an Array</h2>

      <p style={{ color: "#bbb" }}>
        The size of an array is written inside square brackets.
      </p>

      <pre style={codeStyle}>
{`var numbers [5]int`}
      </pre>

      <p style={{ color: "#bbb", marginTop: "20px" }}>
        This creates an array that can contain exactly 5 integers.
      </p>

      <h2 style={{ marginTop: "40px" }}>Initializing an Array</h2>

      <pre style={codeStyle}>
{`numbers := [5]int{10, 20, 30, 40, 50}`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Accessing Elements</h2>

      <p style={{ color: "#bbb" }}>
        Array indexes start at 0.
      </p>

      <pre style={codeStyle}>
{`numbers := [5]int{10, 20, 30, 40, 50}

fmt.Println(numbers[0])
fmt.Println(numbers[2])`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Changing Elements</h2>

      <pre style={codeStyle}>
{`numbers := [3]int{10, 20, 30}

numbers[1] = 99

fmt.Println(numbers)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Array Length</h2>

      <p style={{ color: "#bbb" }}>
        Use <code>len()</code> to find the number of elements in an array.
      </p>

      <pre style={codeStyle}>
{`numbers := [5]int{10, 20, 30, 40, 50}

fmt.Println(len(numbers))`}
      </pre>

      <h2 style={{ marginTop: "50px" }}>Slices</h2>

      <p style={{ color: "#bbb" }}>
        A slice is a flexible and dynamically sized collection. Unlike an
        array, a slice does not have a fixed length.
      </p>

      <h2 style={{ marginTop: "40px" }}>Creating a Slice</h2>

      <pre style={codeStyle}>
{`numbers := []int{10, 20, 30, 40}

fmt.Println(numbers)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Adding Elements</h2>

      <p style={{ color: "#bbb" }}>
        The <code>append()</code> function adds elements to a slice.
      </p>

      <pre style={codeStyle}>
{`numbers := []int{10, 20, 30}

numbers = append(numbers, 40)

fmt.Println(numbers)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Slicing a Slice</h2>

      <p style={{ color: "#bbb" }}>
        You can create a smaller slice from another slice using a range of
        indexes.
      </p>

      <pre style={codeStyle}>
{`numbers := []int{10, 20, 30, 40, 50}

part := numbers[1:4]

fmt.Println(part)`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Length and Capacity</h2>

      <p style={{ color: "#bbb" }}>
        <code>len()</code> returns the number of elements in a slice, while
        <code> cap()</code> returns its capacity.
      </p>

      <pre style={codeStyle}>
{`numbers := []int{10, 20, 30}

fmt.Println(len(numbers))
fmt.Println(cap(numbers))`}
      </pre>

      <h2 style={{ marginTop: "40px" }}>Arrays vs Slices</h2>

      <ul
        style={{
          color: "#bbb",
          paddingLeft: "25px",
        }}
      >
        <li>Arrays have a fixed length.</li>
        <li>Slices can grow and shrink.</li>
        <li>Arrays use a fixed size in their type.</li>
        <li>Slices are more commonly used for collections in Go.</li>
        <li>Use append() to add elements to a slice.</li>
      </ul>
    </div>
  );
}
