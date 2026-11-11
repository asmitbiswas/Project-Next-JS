
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const logs = [
  "Initializing DevVault recovery protocol...",
  "Scanning requested route... DONE",
  "Searching page database... DONE",
  "Checking route integrity... FAILED",
  "Attempting resource recovery...",
  "Rebuilding navigation structure...",
  "Recovery protocol interrupted.",
];

export default function NotFound() {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) return 0;
        return prev + 1;
      });
    }, 180);

    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 2500);

    return () => {
      clearInterval(progressTimer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <main style={styles.container}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
      >
        <source src="/anime-fight.mp4" type="video/mp4" />
      </video>

      <div style={styles.overlay} />

      <div style={styles.topBar}>
        <Link href="/" style={styles.logo}>
          DEV<span style={{ color: "#18dc54" }}>VAULT</span>
        </Link>

        <div style={styles.status}>
          <span style={styles.dot} />
          SYSTEM FAILURE DETECTED
        </div>
      </div>

      <section style={styles.content}>
        <div style={styles.terminal}>
          <div style={styles.terminalHeader}>
            <div style={styles.terminalTitle}>
              <span style={styles.terminalDot} />
              DEVVAULT // RECOVERY TERMINAL
            </div>
            <span style={styles.live}>LIVE</span>
          </div>

          <div style={styles.terminalBody}>
            <p style={styles.command}>
              root@devvault:~$ ./recover_route.sh
            </p>

            {logs.slice(0, logIndex + 1).map((log, index) => (
              <p key={index} style={styles.log}>
                <span style={styles.prefix}>[{index + 1}]</span>{" "}
                {log}
              </p>
            ))}

            <p style={styles.current}>
              {">"} {logs[logIndex]}
              <span style={styles.cursor}>_</span>
            </p>

            <div style={styles.progressInfo}>
              <span>RECOVERY PROGRESS</span>
              <span>{progress}%</span>
            </div>

            <div style={styles.progressTrack}>
              <div
                style={{
                  ...styles.progressBar,
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          <div style={styles.error}>
            <h1>404</h1>
            <h2>ROUTE NOT FOUND</h2>
            <p>
              The requested resource has disappeared
              into the void.
            </p>
          </div>

          <Link href="/" style={styles.button}>
            <span>←</span> RETURN TO DEVVAULT
          </Link>
        </div>
      </section>

      <footer style={styles.footer}>
        DEVVAULT SYSTEMS © 2026
        <span>404 // LOST IN THE DIGITAL VOID</span>
      </footer>

      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 1px); }
          40% { transform: translate(2px, -1px); }
          60% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 2px); }
        }

        @keyframes pulse {
          50% { opacity: 0.4; }
        }

        h1 {
          animation: glitch 3s infinite;
        }

        a:hover {
          background: #18dc54 !important;
          color: black !important;
          box-shadow: 0 0 25px #18dc5470;
        }
      `}</style>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "#030403",
    color: "white",
    position: "relative",
    overflow: "hidden",
    fontFamily: "monospace",
    display: "flex",
    flexDirection: "column",
  },

  video: {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.76)",
    backdropFilter: "blur(2px)",
    zIndex: 1,
  },

  topBar: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 6%",
    borderBottom: "1px solid #ffffff18",
  },

  logo: {
    fontSize: "22px",
    fontWeight: 900,
    color: "white",
    textDecoration: "none",
    letterSpacing: "2px",
  },

  status: {
    fontSize: "10px",
    color: "#ff5555",
    letterSpacing: "1px",
  },

  dot: {
    display: "inline-block",
    width: "7px",
    height: "7px",
    background: "#ff3333",
    borderRadius: "50%",
    marginRight: "8px",
    animation: "pulse 1s infinite",
  },

  content: {
    position: "relative",
    zIndex: 2,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "35px 20px",
  },

  terminal: {
    width: "100%",
    maxWidth: "600px",
    background: "rgba(5, 9, 6, 0.94)",
    border: "1px solid #18dc5450",
    borderRadius: "14px",
    boxShadow: "0 0 70px #000, 0 0 30px #18dc5415",
    overflow: "hidden",
  },

  terminalHeader: {
    padding: "16px 20px",
    background: "#101710",
    borderBottom: "1px solid #18dc5430",
    display: "flex",
    justifyContent: "space-between",
  },

  terminalTitle: {
    color: "#18dc54",
    fontSize: "11px",
    letterSpacing: "1px",
  },

  terminalDot: {
    display: "inline-block",
    width: "8px",
    height: "8px",
    background: "#18dc54",
    borderRadius: "50%",
    marginRight: "9px",
  },

  live: {
    color: "#18dc54",
    fontSize: "10px",
  },

  terminalBody: {
    padding: "22px 25px 10px",
    fontSize: "12px",
    lineHeight: 1.9,
  },

  command: {
    color: "#18dc54",
    marginBottom: "18px",
  },

  log: {
    color: "#999",
    margin: "5px 0",
  },

  prefix: {
    color: "#18dc54",
  },

  current: {
    color: "#18dc54",
    marginTop: "15px",
  },

  cursor: {
    animation: "blink 1s infinite",
  },

  progressInfo: {
    display: "flex",
    justifyContent: "space-between",
    color: "#18dc54",
    marginTop: "25px",
    fontSize: "10px",
  },

  progressTrack: {
    width: "100%",
    height: "5px",
    background: "#202820",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "10px",
  },

  progressBar: {
    height: "100%",
    background: "#18dc54",
    boxShadow: "0 0 12px #18dc54",
    transition: "width 0.2s linear",
  },

  error: {
    textAlign: "center",
    padding: "10px 20px 20px",
  },

  button: {
    display: "block",
    width: "fit-content",
    margin: "0 auto 30px",
    padding: "13px 25px",
    border: "1px solid #18dc54",
    borderRadius: "7px",
    color: "#18dc54",
    textDecoration: "none",
    fontSize: "11px",
    letterSpacing: "1px",
    transition: "0.3s",
  },

  footer: {
    position: "relative",
    zIndex: 2,
    padding: "20px 6%",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    color: "#777",
    fontSize: "9px",
    borderTop: "1px solid #ffffff18",
  },
};
