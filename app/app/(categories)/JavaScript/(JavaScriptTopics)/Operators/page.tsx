import Sidebar from "@/app/components/page";

export default function Operators() {
  return (
    <div>
      <Sidebar />

      <div>
        <h1>Operators</h1>

        <p>
          Operators are symbols that perform operations on values and
          variables. They are used to perform calculations, comparisons,
          assignments, and logical operations.
        </p>

        <h2>Arithmetic Operators</h2>

        <table>
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Description</th>
              <th>Example</th>
            </tr>

            <tr>
              <td>+</td>
              <td>Addition</td>
              <td>5 + 2 = 7</td>
            </tr>

            <tr>
              <td>-</td>
              <td>Subtraction</td>
              <td>5 - 2 = 3</td>
            </tr>

            <tr>
              <td>*</td>
              <td>Multiplication</td>
              <td>5 * 2 = 10</td>
            </tr>

            <tr>
              <td>/</td>
              <td>Division</td>
              <td>10 / 2 = 5</td>
            </tr>

            <tr>
              <td>%</td>
              <td>Remainder</td>
              <td>10 % 3 = 1</td>
            </tr>

            <tr>
              <td>**</td>
              <td>Exponentiation</td>
              <td>2 ** 3 = 8</td>
            </tr>
          </tbody>
        </table>

        <pre>
{`let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);`}
        </pre>

        <h2>Assignment Operators</h2>

        <table>
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Example</th>
            </tr>

            <tr>
              <td>=</td>
              <td>x = 10</td>
            </tr>

            <tr>
              <td>+=</td>
              <td>x += 5</td>
            </tr>

            <tr>
              <td>-=</td>
              <td>x -= 5</td>
            </tr>

            <tr>
              <td>*=</td>
              <td>x *= 5</td>
            </tr>

            <tr>
              <td>/=</td>
              <td>x /= 5</td>
            </tr>

            <tr>
              <td>%=</td>
              <td>x %= 5</td>
            </tr>
          </tbody>
        </table>

        <pre>
{`let score = 10;

score += 5;
score *= 2;

console.log(score);`}
        </pre>

        <h2>Comparison Operators</h2>

        <table>
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>==</td>
              <td>Equal to</td>
            </tr>

            <tr>
              <td>===</td>
              <td>Strict equal to</td>
            </tr>

            <tr>
              <td>!=</td>
              <td>Not equal to</td>
            </tr>

            <tr>
              <td>!==</td>
              <td>Strict not equal to</td>
            </tr>

            <tr>
              <td>&gt;</td>
              <td>Greater than</td>
            </tr>

            <tr>
              <td>&lt;</td>
              <td>Less than</td>
            </tr>

            <tr>
              <td>&gt;=</td>
              <td>Greater than or equal to</td>
            </tr>

            <tr>
              <td>&lt;=</td>
              <td>Less than or equal to</td>
            </tr>
          </tbody>
        </table>

        <pre>
{`console.log(10 > 5);
console.log(10 === "10");
console.log(10 == "10");`}
        </pre>

        <h2>Logical Operators</h2>

        <table>
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>&&</td>
              <td>Logical AND</td>
            </tr>

            <tr>
              <td>||</td>
              <td>Logical OR</td>
            </tr>

            <tr>
              <td>!</td>
              <td>Logical NOT</td>
            </tr>
          </tbody>
        </table>

        <pre>
{`let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);`}
        </pre>

        <h2>Increment & Decrement</h2>

        <pre>
{`let count = 5;

count++;
count--;

console.log(count);`}
        </pre>

        <h2>Operator Precedence</h2>

        <pre>
{`let result = 5 + 2 * 3;

console.log(result); // 11`}
        </pre>

        <p>
          Multiplication and division are evaluated before addition and
          subtraction unless parentheses are used.
        </p>

        <h2>Best Practices</h2>

        <ul>
          <li>Use <code>===</code> instead of <code>==</code>.</li>
          <li>Use parentheses to improve readability.</li>
          <li>Avoid writing overly complex expressions.</li>
          <li>Choose meaningful variable names.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          Operators allow JavaScript programs to perform calculations,
          comparisons, assignments, and logical decisions. Understanding
          operators is essential for writing efficient and readable code.
        </p>
      </div>
    </div>
  );
}