"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const lines = [
  "$ locate requested-page",
  "Scanning filesystem...",
  "ERROR 404: Page Not Found",
  "Requested resource does not exist.",
  "",
  "$ status",
  "[✓] Server Online",
  "[✓] Database Connected",
  "[✗] Resource Missing",
  "",
  "root@devvault:~$",
];

export default function NotFound() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];

    if (text.length < current.length) {
      const timer = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 35);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayed((prev) => [...prev, current]);
      setText("");
      setLineIndex((prev) => prev + 1);
    }, 250);

    return () => clearTimeout(timer);
  }, [text, lineIndex]);

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
          padding: 20px;
          font-family: Consolas, Monaco, monospace;
        }

        .terminal {
          width: 850px;
          max-width: 100%;
          background: #0d1117;
          border: 1px solid #00ff66;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 25px rgba(0, 255, 100, 0.3);
        }

        .header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px;
          background: #161b22;
          border-bottom: 1px solid #222;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .red {
          background: #ff5f56;
        }

        .yellow {
          background: #ffbd2e;
        }

        .green {
          background: #27c93f;
        }

        .title {
          margin-left: 12px;
          color: #888;
          font-size: 14px;
        }

        .body {
          padding: 24px;
          color: #00ff66;
          font-size: 18px;
          line-height: 1.8;
          text-shadow: 0 0 8px #00ff66;
          min-height: 340px;
        }

        .error {
          color: #ff4d4d;
        }

        .cursor {
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .button {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          border: 1px solid #00ff66;
          color: #00ff66;
          text-decoration: none;
          transition: 0.3s;
        }

        .button:hover {
          background: #00ff66;
          color: #000;
        }
      `}</style>

      <main className="page">
        <div className="terminal">
          <div className="header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="title">root@devvault:~/404</span>
          </div>

          <div className="body">
            {displayed.map((line, i) => (
              <div
                key={i}
                className={line.includes("ERROR") ? "error" : ""}
              >
                {line === "" ? <br /> : line}
              </div>
            ))}

            {lineIndex < lines.length && (
              <div className={lines[lineIndex].includes("ERROR") ? "error" : ""}>
                {text}
                <span className="cursor">█</span>
              </div>
            )}

            {lineIndex >= lines.length && (
              <Link href="/" className="button">
                Return Home
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}