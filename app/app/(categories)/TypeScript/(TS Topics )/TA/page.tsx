export default function TypeAnnotationsPage() {
  return (
    <main>
      <h1>Type Annotations</h1>

      <p>
        Type annotations let you explicitly tell TypeScript what type of value
        a variable, parameter, or function should have.
      </p>

      <h2>Basic Syntax</h2>

      <pre
      style={{
        background:"#111",
        borderLeft:"6px solid rgb( 13 200 13)",
        padding:"14px",
        borderRadius:"12px"
      }}
      >
        <code>{`let username: string = "Asmit";
let age: number = 13;
let isDeveloper: boolean = true;`}</code>
      </pre>

      <p>
        The type is written after the variable name using a colon
        <code>:</code>.
      </p>

      <h2>Common Types</h2>

      <pre
          style={{
        background:"#111",
        borderLeft:"6px solid rgb( 13 200 13)",
        padding:"14px",
        borderRadius:"12px"
      }}
      >
        <code>{`let name: string = "John";
let score: number = 100;
let online: boolean = true;`}</code>
      </pre>

      <h2>Arrays</h2>

      <p>You can specify the type of values an array can contain.</p>

      <pre
           style={{
        background:"#111",
        borderLeft:"6px solid rgb( 13 200 13)",
        padding:"14px",
        borderRadius:"12px"
      }}
      >
        <code>{`let fruits: string[] = ["Apple", "Banana", "Mango"];

let scores: number[] = [10, 20, 30];`}</code>
      </pre>

      <h2>Function Parameters</h2>

      <p>
        Type annotations are especially useful for function parameters.
      </p>

      <pre
        style={{
        background:"#111",
        borderLeft:"6px solid rgb( 13 200 13)",
        padding:"14px",
        borderRadius:"12px"
      }}
      >
        <code>{`function greet(name: string): string {
  return "Hello " + name;
}

greet("Asmit");`}</code>
      </pre>

      <p>
        Here, <code>name</code> must be a string, and the function must return
        a string.
      </p>

      <h2>Optional Parameters</h2>

      <p>
        Add <code>?</code> when a parameter is allowed to be omitted.
      </p>

      <pre
        style={{
        background:"#111",
        borderLeft:"6px solid rgb( 13 200 13)",
        padding:"14px",
        borderRadius:"12px"
      }}
      >
        <code>{`function greet(name?: string) {
  console.log(name);
}

greet();
greet("Asmit");`}</code>
      </pre>

      <h2>Object Type Annotations</h2>

      <pre
        style={{
        background:"#111",
        borderLeft:"6px solid rgb( 13 200 13)",
        padding:"14px",
        borderRadius:"12px"
      }}
      >
        <code>{`let user: {
  name: string;
  age: number;
} = {
  name: "Asmit",
  age: 13
};`}</code>
      </pre>

      <h2>Type Annotation vs Type Inference</h2>

      <p>
        TypeScript can often figure out the type automatically. This is called
        <strong> type inference</strong>.
      </p>

      <pre
        style={{
        background:"#111",
        borderLeft:"6px solid rgb( 13 200 13)",
        padding:"14px",
        borderRadius:"12px"
      }}
      >
        <code>{`// Type annotation
let age: number = 13;

// Type inference
let score = 100;`}</code>
      </pre>

      <p>
        In the second example, TypeScript automatically knows that
        <code>score</code> is a number.
      </p>

      <h2>Key Takeaways</h2>

      <ul>
        <li>Use <code>:</code> to add a type annotation.</li>
        <li>Annotations can be used with variables, parameters, and objects.</li>
        <li>Function return types can also be annotated.</li>
        <li>TypeScript can often infer types automatically.</li>
        <li>Don't add annotations everywhere when inference is already clear.</li>
      </ul>
    </main>
  );
}