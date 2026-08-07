export default function Promises() {
    return (
        <div>

            <h1>Promises</h1>

            <p>
                A Promise is an object that represents the result of an
                asynchronous operation. It allows JavaScript to handle tasks
                that take time, such as fetching data from an API or reading
                a file, without blocking the rest of the code. :contentReference[oaicite:0] [index=0]
            </p>

            <h2>Promise States</h2>

            <p>
                Every Promise has one of three states:
            </p>

            <ul>
                <li><strong>Pending</strong> - The operation is still running.</li>
                <li><strong>Fulfilled</strong> - The operation completed successfully.</li>
                <li><strong>Rejected</strong> - The operation failed.</li>
            </ul>

            <h2>Creating a Promise</h2>

            <pre>
{`const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Task Completed");
    } else {
        reject("Task Failed");
    }

});`}
            </pre>

            <h2>Using then()</h2>

            <p>
                The <code>then()</code> method runs when the Promise is fulfilled.
            </p>

            <pre>
{`promise.then((result) => {
    console.log(result);
});`}
            </pre>

            <h2>Using catch()</h2>

            <p>
                The <code>catch()</code> method handles errors.
            </p>

            <pre>
{`promise.catch((error) => {
    console.log(error);
});`}
            </pre>

            <h2>Using finally()</h2>

            <p>
                The <code>finally()</code> method runs whether the Promise
                succeeds or fails.
            </p>

            <pre>
{`promise.finally(() => {
    console.log("Finished");
});`}
            </pre>

            <h2>Chaining Promises</h2>

            <pre>
{`Promise.resolve(10)
    .then((value) => value * 2)
    .then((value) => value + 5)
    .then((value) => {
        console.log(value);
    });`}
            </pre>

            <h2>Promise.all()</h2>

            <p>
                Waits until all Promises are completed.
            </p>

            <pre>
{`Promise.all([
    Promise.resolve("HTML"),
    Promise.resolve("CSS"),
    Promise.resolve("JavaScript")
]).then((result) => {
    console.log(result);
});`}
            </pre>

            <h2>Promise.race()</h2>

            <p>
                Returns the result of the first Promise to finish.
            </p>

            <pre>
{`Promise.race([
    Promise.resolve("Fast"),
    Promise.resolve("Slow")
]).then((result) => {
    console.log(result);
});`}
            </pre>

            <h2>Async / Await</h2>

            <p>
                <code>async</code> and <code>await</code> provide a cleaner
                way to work with Promises.
            </p>

            <pre>
{`async function getData() {

    const result = await Promise.resolve("Hello DevVault");

    console.log(result);

}

getData();`}
            </pre>

            <h2>Common Promise Methods</h2>

            <table>
                <tbody>

                    <tr>
                        <th>Method</th>
                        <th>Description</th>
                    </tr>

                    <tr>
                        <td>then()</td>
                        <td>Runs after a successful Promise.</td>
                    </tr>

                    <tr>
                        <td>catch()</td>
                        <td>Handles rejected Promises.</td>
                    </tr>

                    <tr>
                        <td>finally()</td>
                        <td>Runs after completion.</td>
                    </tr>

                    <tr>
                        <td>Promise.resolve()</td>
                        <td>Creates a resolved Promise.</td>
                    </tr>

                    <tr>
                        <td>Promise.reject()</td>
                        <td>Creates a rejected Promise.</td>
                    </tr>

                    <tr>
                        <td>Promise.all()</td>
                        <td>Waits for all Promises.</td>
                    </tr>

                    <tr>
                        <td>Promise.race()</td>
                        <td>Returns the first completed Promise.</td>
                    </tr>

                </tbody>
            </table>

            <h2>Summary</h2>

            <p>
                Promises make asynchronous programming easier by providing a
                structured way to handle success and failure. They replace
                deeply nested callbacks and work seamlessly with
                <code> async </code> and <code>await</code>, making modern
                JavaScript code cleaner and easier to read. :contentReference[oaicite:1] [index=1]
            </p>

        </div>
    );
}