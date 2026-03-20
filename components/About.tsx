"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    icon: "⚡",
    title: "Performance-First",
    desc: "I optimize every layer of the stack — from database queries to React rendering.",
  },
  {
    icon: "🧠",
    title: "AI Integration",
    desc: "Building AI-driven products with LLMs, APIs, and intelligent data pipelines.",
  },
  {
    icon: "🏗️",
    title: "System Design",
    desc: "Comfortable with microservices, event-driven architecture, and real-time systems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orb */}
      <div
        className="orb orb-indigo"
        style={{ width: 500, height: 500, top: -100, left: -200, opacity: 0.3 }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Avatar + badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            {/* Avatar container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 400,
                margin: "0 auto",
              }}
            >
              {/* Decorative ring */}
              <div
                className="animate-spin-slow"
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: "50%",
                  border: "2px dashed var(--border-hover)",
                  opacity: 0.5,
                }}
              />

              {/* Main avatar box */}
              <div
                style={{
                  aspectRatio: "1",
                  borderRadius: 24,
                  background: "linear-gradient(135deg, var(--accent) 0%, #7c3aed 50%, var(--accent-2) 100%)",
                  padding: 3,
                  boxShadow: "0 24px 80px var(--accent-glow)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 22,
                    background: "var(--bg-card)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/photo.jpg"
                    alt="Jyoti Khatri"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    priority
                  />
                </div>
              </div>

              {/* Floating badge: Experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-hover)",
                  borderRadius: 12,
                  padding: "10px 16px",
                  boxShadow: "var(--card-shadow)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>🚀</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text-primary)" }}>Full Stack</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Developer</div>
                </div>
              </motion.div>

              {/* Floating badge: Open Source */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: -16,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-hover)",
                  borderRadius: 12,
                  padding: "10px 16px",
                  boxShadow: "var(--card-shadow)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>⭐</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text-primary)" }}>Open Source</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Contributor</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
              About Me
            </span>

            <h2
              style={{
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 24,
              }}
            >
              Passionate about building things that{" "}
              <span className="gradient-text">matter</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
                I am a passionate Full Stack Developer with a strong interest in building scalable and user-centric applications. I enjoy working across both frontend and backend, creating seamless and efficient digital experiences.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
                My work focuses on combining clean architecture with modern technologies to solve real-world problems. I am particularly interested in building impactful projects, including AI-driven systems and data-focused applications.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
                I am always eager to learn, experiment, and push my technical boundaries.
              </p>
            </div>

            {/* Highlight cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "16px",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--bg-card)",
                    transition: "all 0.2s ease",
                  }}
                  className="about-highlight-card"
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: 4, fontSize: "0.9rem" }}>{h.title}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.6 }}>{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .about-highlight-card:hover {
          border-color: var(--border-hover) !important;
          background: var(--bg-card-hover) !important;
        }
      `}</style>
    </section>
  );
}
