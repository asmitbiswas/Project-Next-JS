import  styles  from "./React.module.css"
export default function React() {
    return (
        <div className={styles.Container}>
            <h1 className={styles.A}>What is React?</h1>
            <p className={styles.Ao}>
                React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes. React follows a component-based architecture, where each component manages its own state and can be composed together to build complex UIs. It uses a virtual DOM to optimize rendering performance and provides a declarative syntax for defining UI elements. React is widely used in web development and has a large ecosystem of libraries and tools that enhance its capabilities.
            </p>
            <h1 className={styles.B}>React components</h1>
            <p className={styles.Bo}>
                1.Your browser still reads a standard HTML file first. But instead of writing hundreds of lines of layout here, you just leave a single, empty div tag for React to attach itself to.
            </p>
            <p className={styles.C}>
                2.React handles standard web interactions almost exactly like regular HTML, but with a slight twist in the spelling (camelCase).

                In plain HTML, you use onclick="...". In React, you use onClick={ }

                Instead of passing a string of code, you pass a JavaScript function.
            </p>
            <h1 className={styles.D}>React Hooks</h1>
            <p className={styles.E}>
                Item 4: Hooks
                Title: Hooks

                Tagline: The specialized tools inside your components.

                Content: In modern React, "Hooks" are just special built-in JavaScript functions that let you "hook into" React’s internal systems. Before hooks existed, components were pretty dumb—they couldn't hold memory or handle complex logic without a massive amount of messy boilerplate code. Hooks changed everything by giving regular functions the power to manage data, talk to databases, and track user actions using clean, single-line commands.

                Tip: You can easily spot a hook in the wild because their names always start with the word "use"—like useState or useEffect.
            </p>
            <p className={styles.F}>
                Item 5: The useState Hook
                Title: useState

                Tagline: Giving a component its own memory.

                Content: This is the absolute bread and butter of React hooks. You use it whenever you have data in your app that needs to change based on what the user does—like a counter going up, a checkbox getting checked, or a search bar tracking what someone types. When you call it, React gives you two things: a variable to hold the current value, and a highly specific function that is the only thing allowed to change that value.

                Tip: When you use the updater function to change the memory, React instantly rewrites the HTML on the screen so the user sees the update happen live.
            </p>
            <p className={styles.G}>
                Item 6: The useEffect Hook
                Title: useEffect

                Tagline: Connecting your app to the outside world.

                Content: This hook is the ultimate tool for handling "side effects," which is just developer speak for things that live outside of React's direct control. You use it when your component needs to do heavy lifting after it has already loaded onto the screen—like reaching out to an API to fetch weather data, setting up a countdown timer, or manually changing the title of the browser tab.

                Tip: This hook has a little guard at the end called a "dependency array" []. If you leave it empty, the hook runs exactly once when the page loads. If you forget to include it at all, the hook will run infinitely and crash your user's browser.
            </p>
        </div>
    )
}