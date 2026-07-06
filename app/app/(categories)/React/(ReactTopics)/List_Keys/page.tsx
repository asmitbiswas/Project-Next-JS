import Sidebar from "@/app/components/page";

export default function ListsAndKeys() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Lists & Keys</h1>

        <p>
          Lists allow you to display multiple items by rendering components from
          an array. Keys help React identify which items have changed, been
          added, or removed, making updates faster and more efficient.
        </p>

        <h2>Why Use Lists?</h2>

        <p>
          Instead of writing the same JSX multiple times, you can store data in
          an array and use the <code>map()</code> method to generate UI
          dynamically.
        </p>

        <h2>Basic List Example</h2>

        <pre>
{`function App() {

  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}`}
        </pre>

        <h2>Using Keys</h2>

        <p>
          Every item rendered inside a list should have a unique
          <code> key </code> prop.
        </p>

        <pre>
{`function App() {

  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" }
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          {fruit.name}
        </li>
      ))}
    </ul>
  );
}`}
        </pre>

        <h2>What is a Key?</h2>

        <p>
          A key is a special React prop that uniquely identifies each element in
          a list. It helps React determine which items have changed when the UI
          updates.
        </p>

        <h2>Good vs Bad Keys</h2>

        <table>
          <tbody>
            <tr>
              <th>Good</th>
              <th>Bad</th>
            </tr>

            <tr>
              <td>Database ID</td>
              <td>Random Number</td>
            </tr>

            <tr>
              <td>UUID</td>
              <td>Math.random()</td>
            </tr>

            <tr>
              <td>Unique Value</td>
              <td>Duplicate Values</td>
            </tr>

            <tr>
              <td>Stable IDs</td>
              <td>Changing Keys</td>
            </tr>
          </tbody>
        </table>

        <h2>Using the Index as a Key</h2>

        <p>
          React allows you to use the array index as a key, but this should only
          be done when the list never changes order.
        </p>

        <pre>
{`{fruits.map((fruit, index) => (
  <li key={index}>
    {fruit}
  </li>
))}`}
        </pre>

        <h2>Real World Example</h2>

        <pre>
{`function Users() {

  const users = [
    { id: 1, name: "Asmit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Ankit" }
  ];

  return (
    <div>
      {users.map((user) => (
        <h3 key={user.id}>
          {user.name}
        </h3>
      ))}
    </div>
  );
}`}
        </pre>

        <h2>Best Practices</h2>

        <ul>
          <li>Always use unique keys.</li>
          <li>Prefer IDs over array indexes.</li>
          <li>Use <code>map()</code> to render lists.</li>
          <li>Keep list items small and reusable.</li>
          <li>Avoid duplicate keys.</li>
        </ul>

        <h2>Common Mistakes</h2>

        <ul>
          <li>Forgetting the key prop.</li>
          <li>Using Math.random() as a key.</li>
          <li>Using duplicate keys.</li>
          <li>Using array indexes for dynamic lists.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Lists make it easy to render multiple elements from an array, while
          keys help React efficiently update the user interface. Using unique
          and stable keys improves performance and prevents rendering issues.
        </p>
      </div>
    </div>
  );
}