"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "var(--font-space), sans-serif",
            }}
          >
            JK
          </div>
          <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
            © {year} Jyoti Khatri. All rights reserved.
          </span>
        </div>

        {/* Built with */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.82rem", color: "var(--text-muted)" }}>
          Built with{" "}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{ color: "#ef4444" }}
          >
            ♥
          </motion.span>{" "}
          using Next.js & Framer Motion
        </div>

        {/* Quick links */}
        <div style={{ display: "flex", gap: 20 }}>
          {["#about", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
