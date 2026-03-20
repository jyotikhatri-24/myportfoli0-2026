"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = ["All", "Frontend", "Backend", "AI", "Data", "Fullstack"];

const projects = [
  {
    id: 1,
    title: "AI Interview Simulator",
    description:
      "AI-powered web application that simulates realistic interview scenarios based on user resumes and target roles, providing dynamic questions and personalized feedback.",
    tech: ["React", "Node.js", "Express", "Groq AI", "Llama AI"],
    category: ["AI", "Fullstack"],
    demo: "https://ai-interview-simulator-bgpy-hjr00owj5.vercel.app/",
    github: "https://github.com/jyotikhatri-24/ai-interview-simulator",
    featured: true,
    emoji: "🤖",
    accentColor: "#6366f1",
  },
  {
    id: 2,
    title: "RideSync",
    description:
      "Full-stack microservices-based ride-sharing simulation platform with real-time driver tracking, API gateway, and secure payment handling.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Microservices"],
    category: ["Backend", "Fullstack"],
    demo: null,
    github: "https://github.com/jyotikhatri-24/ridesync",
    featured: true,
    emoji: "🚗",
    accentColor: "#10b981",
  },
  {
    id: 3,
    title: "Credit Card Profitability Simulator",
    description:
      "Data-driven analytics project that simulates credit card unit economics by modeling revenue, rewards, and operational costs across customer cohorts.",
    tech: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Jupyter"],
    category: ["Data"],
    demo: null,
    github: "https://github.com/jyotikhatri-24/Credit-Card-product-profitability-simulator",
    featured: true,
    emoji: "📊",
    accentColor: "#f59e0b",
  },
  {
    id: 4,
    title: "NutriWise",
    description:
      "AI-powered platform that provides detailed nutritional insights and generates personalized meal plans based on user preferences and health goals.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Google AI", "Nutritionix API"],
    category: ["AI", "Fullstack"],
    demo: "https://nutriwise-web.vercel.app",
    github: "https://github.com/jyotikhatri-24/nutriwise-web",
    featured: true,
    emoji: "🥗",
    accentColor: "#22c55e",
  },
  {
    id: 5,
    title: "Game Hub",
    description:
      "Scalable real-time multiplayer gaming platform with matchmaking, WebSocket communication, and performance optimization using caching and rate limiting.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    category: ["Backend", "Fullstack"],
    demo: "https://game-hub-mauve-two.vercel.app/",
    github: "https://github.com/jyotikhatri-24/game-hub",
    featured: true,
    emoji: "🎮",
    accentColor: "#ec4899",
  },
  {
    id: 6,
    title: "InternHub",
    description:
      "Full-featured intern management platform with authentication, role-based dashboards, and task tracking with optional backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: ["Fullstack", "Frontend"],
    demo: null,
    github: "https://github.com/jyotikhatri-24/InternHub-Portal",
    featured: false,
    emoji: "💼",
    accentColor: "#8b5cf6",
  },
];

function ExternalLink({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="orb orb-purple" style={{ width: 500, height: 500, bottom: -100, left: -100, opacity: 0.3 }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48, textAlign: "center" }}
        >
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            All Projects
          </span>
          <h2
            style={{
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: 16,
            }}
          >
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto 24px", lineHeight: 1.7 }}>
            A curated collection of projects spanning AI, real-time systems, data analytics, and full-stack development.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 24px",
              fontSize: "0.85rem",
              fontWeight: 600,
              borderRadius: 100,
              textDecoration: "none",
            }}
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            View Resume
          </a>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                border: activeFilter === f ? "none" : "1.5px solid var(--border-hover)",
                background: activeFilter === f ? "var(--accent)" : "transparent",
                color: activeFilter === f ? "#fff" : "var(--text-secondary)",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
                transition: "all 0.2s ease",
                boxShadow: activeFilter === f ? "0 4px 16px var(--accent-glow)" : "none",
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="projects-grid"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                style={{ padding: 0, overflow: "hidden", cursor: "default" }}
              >
                {/* Card top color bar */}
                <div
                  style={{
                    height: 4,
                    background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}66)`,
                    transition: "height 0.3s ease",
                  }}
                />

                <div style={{ padding: "24px 24px 20px" }}>
                  {/* Emoji + title */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: `${project.accentColor}18`,
                        border: `1px solid ${project.accentColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                        transform: hoveredId === project.id ? "scale(1.1) rotate(-5deg)" : "scale(1)",
                      }}
                    >
                      {project.emoji}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-space), sans-serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                          marginBottom: 4,
                        }}
                      >
                        {project.title}
                      </h3>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {project.category.map((c) => (
                          <span
                            key={c}
                            style={{
                              fontSize: "0.68rem",
                              padding: "2px 8px",
                              borderRadius: 100,
                              background: `${project.accentColor}18`,
                              color: project.accentColor,
                              fontWeight: 600,
                              letterSpacing: "0.04em",
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      marginBottom: 16,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag" style={{ fontSize: "0.68rem", padding: "3px 10px" }}>
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-tag" style={{ fontSize: "0.68rem", padding: "3px 10px" }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: "flex", gap: 10, borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: "9px 16px", fontSize: "0.78rem", flex: 1, justifyContent: "center" }}
                      >
                        <ExternalLink />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        padding: "9px 16px",
                        fontSize: "0.78rem",
                        flex: project.demo ? 1 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-muted)" }}>
            No projects in this category yet.
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
