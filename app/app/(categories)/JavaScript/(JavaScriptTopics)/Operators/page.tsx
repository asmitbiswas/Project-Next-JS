// import Sidebar from "@/app/components/page";

export default function Operators() {
  return (
    <div>
      {/* <Sidebar /> */}

      <div>
        <h1>Operators</h1>

        <p>
          Operators are symbols that perform operations on values and
          variables. They are used to perform calculations, comparisons,
          assignments, and logical operations.
        </p>

        <h2>Arithmetic Operators</h2>

        <table
        style={{
            borderCollapse:"collapse",
            width:"100%",
            border:"1px solid #444",
            padding:"20px"
        }}
        >
          <tbody>
            <tr>
              <th
              style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Operator</th>
              <th
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Description</th>
              <th
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Example</th>
            </tr>

            <tr>
              <td
              style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >+</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Addition</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >5 + 2 = 7</td>
            </tr>

            <tr>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >-</td>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Subtraction</td>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >5 - 2 = 3</td>
            </tr>

            <tr>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >*</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Multiplication</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >5 * 2 = 10</td>
            </tr>

            <tr>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >/</td>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Division</td>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >10 / 2 = 5</td>
            </tr>

            <tr>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >%</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >Remainder</td>
              <td
               style={{
                padding:"14px",
                border:"1px solid #444"
              }}
              >10 % 3 = 1</td>
            </tr>

            <tr>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >**</td>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >Exponentiation</td>
              <td
                  style={{
                border:"1px solid #444",
                padding:"14px",
                background:"#111"
              }}
              >2 ** 3 = 8</td>
            </tr>
          </tbody>
        </table>
            <h2>Arithmetic Operator Examples</h2>
        <pre
        style={{
            padding:"14px",
            background:"#111",
            overflowX:"auto",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
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

        <pre
         style={{
            padding:"14px",
            background:"#111",
            overflowX:"auto",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
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

        <pre
         style={{
            padding:"14px",
            background:"#111",
            overflowX:"auto",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
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

        <pre
         style={{
            padding:"14px",
            background:"#111",
            overflowX:"auto",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);`}
        </pre>

        <h2>Increment & Decrement</h2>

        <pre
              style={{
            padding:"14px",
            background:"#111",
            overflowX:"auto",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
{`let count = 5;

count++;
count--;

console.log(count);`}
        </pre>

        <h2>Operator Precedence</h2>

        <pre
              style={{
            padding:"14px",
            background:"#111",
            overflowX:"auto",
            borderRadius:"12px",
            borderLeft:"6px solid rgb(13 200 13)"
        }}
        >
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