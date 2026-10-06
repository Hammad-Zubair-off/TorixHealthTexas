"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/** Root-layout failure boundary — must render its own html/body. */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          background: "#f3f6fc",
          color: "#16182a",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <main
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 24px",
          }}
        >
          <div style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
            <span
              style={{
                display: "inline-flex",
                marginBottom: 20,
                borderRadius: 999,
                border: "1px solid #e4959b",
                background: "#ffffff",
                padding: "6px 14px",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7a1f2b",
              }}
            >
              Something went wrong
            </span>
            <h1
              style={{
                margin: "0 0 16px",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                fontWeight: 600,
              }}
            >
              We hit an unexpected error.
            </h1>
            <p
              style={{
                margin: "0 0 32px",
                fontSize: 16,
                lineHeight: 1.6,
                color: "#564f46",
              }}
            >
              Try again in a moment. If it keeps happening, head home or get in
              touch and we&apos;ll help from there.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={reset}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  border: "none",
                  background: "#a52834",
                  color: "#ffffff",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(165, 40, 52, 0.28)",
                }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  border: "1px solid #a52834",
                  background: "#ffffff",
                  color: "#7a1f2b",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Back to Home
              </a>
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                  border: "1px solid #dce3ef",
                  background: "#ffffff",
                  color: "#16182a",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
