export default function Npm() {
    const codeStyle = {
        backgroundColor: "#111",
        padding: "14px",
        borderRadius: "12px",
        borderLeft: "6px solid rgb(13 200 13)",
        overflowX: "auto" as const
    };

    return (
        <div>

            <h1>npm</h1>

            <p>
                npm is the default package manager for Node.js. It allows you
                to install, manage, update, and share packages for your
                projects.
            </p>

            <h2>What is npm?</h2>

            <p>
                npm stands for Node Package Manager. It provides access to a
                huge ecosystem of JavaScript and Node.js packages.
            </p>

            <h2>Check the Version</h2>

            <p>
                You can check whether npm is installed by displaying its
                version.
            </p>

            <pre style={codeStyle}>
                <code>{`npm --version`}</code>
            </pre>

            <h2>Create a Project</h2>

            <p>
                The <code>npm init</code> command creates a
                <code>package.json</code> file for your project.
            </p>

            <pre style={codeStyle}>
                <code>{`npm init`}</code>
            </pre>

            <p>
                You can also create the project using default settings:
            </p>

            <pre style={codeStyle}>
                <code>{`npm init -y`}</code>
            </pre>

            <h2>package.json</h2>

            <p>
                The <code>package.json</code> file contains information about
                your project, including its name, scripts, and dependencies.
            </p>

            <pre style={codeStyle}>
                <code>{`{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
        "start": "node index.js"
    }
}`}</code>
            </pre>

            <h2>Installing a Package</h2>

            <p>
                Use <code>npm install</code> to add a package to your project.
            </p>

            <pre style={codeStyle}>
                <code>{`npm install express`}</code>
            </pre>

            <p>
                The package will be added to your project's dependencies.
            </p>

            <h2>Installing Development Dependencies</h2>

            <p>
                Packages needed only during development can be installed with
                the <code>--save-dev</code> flag.
            </p>

            <pre style={codeStyle}>
                <code>{`npm install --save-dev typescript`}</code>
            </pre>

            <h2>Installing All Dependencies</h2>

            <p>
                If a project already has a <code>package.json</code>, run
                <code>npm install</code> to install its dependencies.
            </p>

            <pre style={codeStyle}>
                <code>{`npm install`}</code>
            </pre>

            <h2>Uninstalling a Package</h2>

            <p>
                Remove a package using <code>npm uninstall</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`npm uninstall express`}</code>
            </pre>

            <h2>Updating Packages</h2>

            <p>
                npm can update installed packages to newer compatible
                versions.
            </p>

            <pre style={codeStyle}>
                <code>{`npm update`}</code>
            </pre>

            <h2>npm Scripts</h2>

            <p>
                You can define commands inside the <code>scripts</code>
                section of <code>package.json</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`{
    "scripts": {
        "start": "node index.js",
        "dev": "node --watch index.js"
    }
}`}</code>
            </pre>

            <p>
                Run a script using <code>npm run</code>.
            </p>

            <pre style={codeStyle}>
                <code>{`npm run dev`}</code>
            </pre>

            <h2>npx</h2>

            <p>
                <code>npx</code> allows you to execute packages without
                permanently installing them as project dependencies.
            </p>

            <pre style={codeStyle}>
                <code>{`npx tsc --init`}</code>
            </pre>

            <h2>package-lock.json</h2>

            <p>
                npm creates a <code>package-lock.json</code> file to record
                the exact dependency versions used by the project.
            </p>

            <h2>node_modules</h2>

            <p>
                Installed packages are stored inside the
                <code>node_modules</code> directory.
            </p>

            <pre style={codeStyle}>
                <code>{`my-app/
├── node_modules/
├── package.json
├── package-lock.json
└── index.js`}</code>
            </pre>

            <h2>Summary</h2>

            <p>
                npm is Node.js's package manager. It is used to initialize
                projects, install dependencies, manage versions, run scripts,
                and work with the Node.js package ecosystem.
            </p>

        </div>
    );
}