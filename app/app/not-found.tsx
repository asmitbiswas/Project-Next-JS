"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
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
          box-shadow: 0 0 30px rgba(0, 255, 102, 0.3);
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
          color: #00ff66;
          border: 1px solid #00ff66;
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
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="title">root@devvault:~/404</span>
          </div>

          <div className="body">
            <div>$ locate requested-page</div>
            <div>Scanning filesystem...</div>
            <div className="error">ERROR 404: Page Not Found</div>
            <div>Requested resource does not exist.</div>

            <br />

            <div>$ status</div>
            <div>[✓] Server Online</div>
            <div>[✓] Database Connected</div>
            <div>[✗] Resource Missing</div>

            <br />

            <div>
              root@devvault:~$ <span className="cursor">█</span>
            </div>

            <Link href="/" className="button">
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}