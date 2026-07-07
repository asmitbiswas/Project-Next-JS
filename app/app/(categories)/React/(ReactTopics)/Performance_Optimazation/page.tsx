import Sidebar from "@/app/components/page";

export default function PerformanceOptimization() {
    return (
        <div

        >
            <Sidebar />

            <div

            >
                <h1>Performance Optimization</h1>

                <p>
                    Performance optimization is the process of making React applications
                    faster and more efficient. React provides several techniques to reduce
                    unnecessary renders and improve user experience.
                </p>

                <h2>Why Optimize Performance?</h2>

                <p>
                    As applications become larger, unnecessary rendering and expensive
                    calculations can slow them down. Optimizing performance helps keep
                    applications fast and responsive.
                </p>

                <h2>Common Optimization Techniques</h2>

                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        margin: "25px 0",
                    }}
                >
                    <tbody>
                        <tr>
                            <th
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111",
                                    textAlign: "left",
                                }}
                            >
                                Technique
                            </th>

                            <th
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                    background: "#111",
                                    textAlign: "left",
                                }}
                            >
                                Purpose
                            </th>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                React.memo
                            </td>

                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                Prevents unnecessary component re-renders.
                            </td>
                        </tr>

                        <tr
                            style={{
                                background: "#0d0d0d",
                            }}
                        >
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                useMemo
                            </td>

                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                Caches expensive calculations.
                            </td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                useCallback
                            </td>

                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                Caches functions to avoid unnecessary recreation.
                            </td>
                        </tr>

                        <tr
                            style={{
                                background: "#0d0d0d",
                            }}
                        >
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                Lazy Loading
                            </td>

                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                Loads components only when required.
                            </td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                Code Splitting
                            </td>

                            <td
                                style={{
                                    border: "1px solid #444",
                                    padding: "14px",
                                }}
                            >
                                Reduces the initial JavaScript bundle size.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h2>React.memo Example</h2>

                <pre
                    style={{
                        background: "#111",
                        padding: "20px",
                        borderRadius: "8px",
                        overflowX: "auto",
                        margin: "20px 0",
                        borderLeft: "4px solid #4CAF50",
                        fontFamily: "Consolas, monospace",
                    }}
                >
                    {`const Button = React.memo(function Button() {
  return <button>Click Me</button>;
});`}
                </pre>

                <h2>useMemo Example</h2>

                <pre
                    style={{
                        background: "#111",
                        padding: "20px",
                        borderRadius: "8px",
                        overflowX: "auto",
                        margin: "20px 0",
                        borderLeft: "4px solid #4CAF50",
                        fontFamily: "Consolas, monospace",
                    }}
                >
                    {`const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);`}
                </pre>

                <h2>useCallback Example</h2>

                <pre
                    style={{
                        background: "#111",
                        padding: "20px",
                        borderRadius: "8px",
                        overflowX: "auto",
                        margin: "20px 0",
                        borderLeft: "4px solid #4CAF50",
                        fontFamily: "Consolas, monospace",
                    }}
                >
                    {`const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);`}
                </pre>

                <h2>Lazy Loading Example</h2>

                <pre
                    style={{
                        background: "#111",
                        padding: "20px",
                        borderRadius: "8px",
                        overflowX: "auto",
                        margin: "20px 0",
                        borderLeft: "4px solid #4CAF50",
                        fontFamily: "Consolas, monospace",
                    }}
                >
                    {`const Home = React.lazy(() => import("./Home"));`}
                </pre>

                <h2>Best Practices</h2>

                <ul>
                    <li>Optimize only when necessary.</li>
                    <li>Measure performance before optimizing.</li>
                    <li>Use React.memo for expensive components.</li>
                    <li>Memoize expensive calculations with useMemo.</li>
                    <li>Use useCallback for frequently passed functions.</li>
                    <li>Lazy load large components.</li>
                </ul>

                <h2>Common Mistakes</h2>

                <ul>
                    <li>Using memoization everywhere.</li>
                    <li>Optimizing before identifying bottlenecks.</li>
                    <li>Creating unnecessary state updates.</li>
                    <li>Rendering very large lists without optimization.</li>
                </ul>

                <h2>Summary</h2>

                <p>
                    Performance optimization helps React applications remain fast,
                    responsive, and scalable. Features such as React.memo, useMemo,
                    useCallback, lazy loading, and code splitting should be used when
                    they solve real performance problems instead of being added
                    everywhere by default.
                </p>
            </div>
        </div>
    );
}