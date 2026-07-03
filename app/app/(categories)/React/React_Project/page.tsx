import Sidebar from "@/app/components/page";

export default function ReactProjects() {
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
        <h1>React Projects</h1>

        <p>
          Building projects is one of the best ways to learn React. Every project
          teaches you something new, whether it's managing state, handling user
          input, working with APIs, or organizing components. Start with simple
          projects and gradually move to more advanced applications.
        </p>

        <h2>Beginner Projects</h2>

        <ul>
          <li>Counter App</li>
          <li>Digital Clock</li>
          <li>Calculator</li>
          <li>To-Do List</li>
          <li>Notes App</li>
          <li>Weather App</li>
          <li>Quiz App</li>
          <li>Random Quote Generator</li>
        </ul>

        <h2>Intermediate Projects</h2>

        <ul>
          <li>Expense Tracker</li>
          <li>Movie Search App</li>
          <li>Recipe Finder</li>
          <li>Music Player</li>
          <li>Chat UI</li>
          <li>Authentication System</li>
          <li>Blog Website</li>
          <li>E-commerce Store</li>
        </ul>

        <h2>Advanced Projects</h2>

        <ul>
          <li>Admin Dashboard</li>
          <li>Social Media Clone</li>
          <li>Project Management Tool</li>
          <li>Learning Platform</li>
          <li>Video Streaming UI</li>
          <li>Real-time Chat Application</li>
          <li>Portfolio CMS</li>
          <li>DevVault Documentation Website</li>
        </ul>

        <h2>Skills You'll Practice</h2>

        <ul>
          <li>Components and Props</li>
          <li>State Management</li>
          <li>React Hooks</li>
          <li>React Router</li>
          <li>API Fetching</li>
          <li>Form Validation</li>
          <li>Local Storage</li>
          <li>Responsive Design</li>
        </ul>

        <h2>Project Tips</h2>

        <p>
          Don't focus on making the perfect project. Instead, build something,
          finish it, and then improve it. Every completed project teaches you
          more than an unfinished one. Challenge yourself by adding new
          features, fixing bugs, and refactoring your code as your skills grow.
        </p>

        <h2>Challenge Yourself</h2>

        <p>
          Once you're comfortable with React fundamentals, try creating your own
          ideas instead of following tutorials. Solving problems on your own is
          one of the fastest ways to improve as a developer.
        </p>

        <p>
          <strong>Remember:</strong> The goal isn't to build hundreds of
          projects—it's to build projects that teach you something new every
          time.
        </p>
      </div>
    </div>
  );
}