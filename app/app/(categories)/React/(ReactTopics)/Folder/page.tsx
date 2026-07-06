import Sidebar from "@/app/components/page";

export default function FolderStructure() {
  return (
    <div >
      <Sidebar />

      <div >
        <h1>Folder Structure</h1>

        <p>
          A well-organized folder structure makes React projects easier to
          understand, maintain, and scale. As your application grows, separating
          files into meaningful folders helps you quickly find components,
          pages, styles, and other resources.
        </p>

        <h2>Why is Folder Structure Important?</h2>

        <p>
          Keeping your project organized improves readability, teamwork, and
          code maintenance. A clean folder structure also reduces confusion when
          working on large applications.
        </p>

        <h2>Example Folder Structure</h2>

        <pre
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
{`my-react-app/
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── styles/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js`}
        </pre>

        <h2>Folder Explanation</h2>

        <ul>
          <li><strong>public/</strong> - Static files like images and icons.</li>
          <li><strong>components/</strong> - Reusable UI components.</li>
          <li><strong>pages/</strong> - Individual application pages.</li>
          <li><strong>assets/</strong> - Images, fonts, and other assets.</li>
          <li><strong>styles/</strong> - CSS and styling files.</li>
          <li><strong>hooks/</strong> - Custom React hooks.</li>
          <li><strong>utils/</strong> - Helper and utility functions.</li>
          <li><strong>App.jsx</strong> - Main application component.</li>
          <li><strong>main.jsx</strong> - Entry point of the application.</li>
        </ul>

        <h2>Best Practices</h2>

        <ul>
          <li>Group related files together.</li>
          <li>Keep components small and reusable.</li>
          <li>Use meaningful folder names.</li>
          <li>Avoid placing every file inside one folder.</li>
          <li>Create separate folders as the project grows.</li>
        </ul>

        <h2>Summary</h2>

        <p>
          There is no single "correct" folder structure in React. The best
          structure is one that keeps your project clean, easy to navigate, and
          scalable. As your application becomes larger, organizing files
          properly will save time and make development much easier.
        </p>
      </div>
    </div>
  );
}