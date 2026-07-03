import Sidebar from "@/app/components/page";


export default function IntroductionToReact() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <Sidebar />

      <div
        style={{
          maxWidth: "900px",
          marginLeft: "280px",
          lineHeight: "1.8",
        }}
      >
        <h1>Introduction to React</h1>

        <p>
          React is a powerful JavaScript library for building user interfaces.
          It allows developers to create reusable components, manage state
          efficiently, and build dynamic web applications with ease.
        </p>

        <h2>Getting Started</h2>

        <p>
          To get started with React, you need to have a basic understanding of
          HTML, CSS, and JavaScript. You can create a new React project using
          tools like Create React App or Next.js.
        </p>

        <h2>Core Concepts</h2>

        <ul>
          <li>Components: The building blocks of a React application.</li>
          <li>JSX: A syntax extension that allows you to write HTML in JavaScript.</li>
          <li>State: A way to manage data within a component.</li>
          <li>Props: A way to pass data from parent to child components.</li>
          <li>Lifecycle Methods: Functions that allow you to hook into different stages of a component's life.</li>
        </ul>

        <h2>Next Steps</h2>

        <p>
          After understanding the basics, you can explore advanced topics like
          React Router for navigation, Redux for state management, and testing
          with Jest and React Testing Library.
        </p>
      </div>
    </div>
  );
}