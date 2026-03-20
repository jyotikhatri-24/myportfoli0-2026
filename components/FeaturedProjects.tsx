"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featured = [
  {
    id: 1,
    emoji: "🤖",
    title: "AI Interview Simulator",
    tagline: "AI-Powered Career Prep",
    description:
      "AI-powered web application that simulates realistic interview scenarios based on user resumes and target roles, providing dynamic questions and personalized feedback.",
    tech: ["React", "Node.js", "Express", "Groq AI", "Llama AI"],
    problem:
      "Job seekers lack personalized and realistic interview preparation tools — generic platforms don't adapt to individual roles or resumes.",
    solution:
      "Built an AI-driven simulator that generates role-specific interview questions using LLMs, evaluates responses dynamically, and provides structured feedback.",
    impact:
      "Enhances interview readiness through personalized feedback and real-time AI interaction, bridging the gap between preparation and actual interviews.",
    demo: "https://ai-interview-simulator-bgpy-hjr00owj5.vercel.app/",
    github: "https://github.com/jyotikhatri-24/ai-interview-simulator",
    accentColor: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    stats: [
      { label: "Tech Stack", value: "5+" },
      { label: "AI-Powered", value: "✓" },
    ],
  },
  {
    id: 2,
    emoji: "🎮",
    title: "Game Hub",
    tagline: "Real-Time Multiplayer Platform",
    description:
      "Scalable real-time multiplayer gaming platform with matchmaking, WebSocket communication, and performance optimization using caching and rate limiting.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    problem:
      "Building low-latency, real-time multiplayer systems with high concurrency is architecturally challenging and expensive to scale.",
    solution:
      "Implemented WebSocket-based communication via Socket.io, added Redis caching for session management, and rate limiting to handle thousands of concurrent requests.",
    impact:
      "Achieved ~6ms latency in real-time game events and the architecture efficiently handles thousands of concurrent requests with minimal resource usage.",
    demo: "https://game-hub-mauve-two.vercel.app/",
    github: "https://github.com/jyotikhatri-24/game-hub",
    accentColor: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
    stats: [
      { label: "Latency", value: "~6ms" },
      { label: "Concurrent", value: "1K+" },
    ],
  },
  {
    id: 3,
    emoji: "🥗",
    title: "NutriWise",
    tagline: "AI Nutrition Platform",
    description:
      "AI-powered application providing detailed nutritional insights and generating personalized meal plans based on user preferences and health goals.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Google AI", "Nutritionix API"],
    problem:
      "Users lack access to personalized, intelligent nutritional planning — existing tools are generic and don't adapt to individual health profiles.",
    solution:
      "Integrated Google Generative AI to create customized meal plans and real-time nutritional breakdowns tailored to each user's goals and dietary preferences.",
    impact:
      "Empowers users to make informed dietary decisions with AI-powered insights, dramatically reducing the effort required for personalized nutrition planning.",
    demo: "https://nutriwise-web.vercel.app",
    github: "https://github.com/jyotikhatri-24/nutriwise-web",
    accentColor: "#22c55e",
    gradient: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
    stats: [
      { label: "AI APIs", value: "2+" },
      { label: "Personalized", value: "✓" },
    ],
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

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const project = featured[active];

  return (
    <section
      id="featured"
      style={{
        padding: "120px 0",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="orb orb-indigo" style={{ width: 600, height: 600, top: "10%", right: -200, opacity: 0.25 }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            Case Studies
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Deep dives into the projects I&apos;m most proud of — the problems, the solutions, and the outcomes.
          </p>
        </motion.div>

        {/* Project selector tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          {featured.map((p, i) => (
            <motion.button
              key={p.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 20px",
                borderRadius: 14,
                border: active === i ? `2px solid ${p.accentColor}66` : "1.5px solid var(--border)",
                background: active === i ? `${p.accentColor}12` : "var(--bg-card)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                color: active === i ? p.accentColor : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.88rem",
                boxShadow: active === i ? `0 4px 20px ${p.accentColor}30` : "none",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{p.emoji}</span>
              <span style={{ display: "block" }} className="tab-label">{p.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active project card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-card"
            style={{
              padding: 0,
              overflow: "hidden",
              borderColor: `${project.accentColor}30`,
            }}
          >
            {/* Colored top banner */}
            <div
              style={{
                background: project.gradient,
                padding: "32px 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {project.emoji}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.75)",
                      marginBottom: 4,
                    }}
                  >
                    {project.tagline}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space), sans-serif",
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: 24 }}>
                {project.stats.map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-space), sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "#fff",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 500,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "40px" }}>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 36 }}>
                {project.description}
              </p>

              {/* PSI Grid */}
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 36 }}
                className="psi-grid"
              >
                {[
                  { label: "🎯 Problem", text: project.problem, color: "#ef4444" },
                  { label: "💡 Solution", text: project.solution, color: "#3b82f6" },
                  { label: "📈 Impact", text: project.impact, color: "#22c55e" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: 20,
                      borderRadius: 14,
                      border: "1px solid var(--border)",
                      background: "var(--bg-primary)",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        marginBottom: 10,
                        color: item.color,
                      }}
                    >
                      {item.label}
                    </div>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.84rem", lineHeight: 1.7, margin: 0 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech stack + Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
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
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .psi-grid { grid-template-columns: 1fr !important; }
          .tab-label { display: none !important; }
        }
      `}</style>
    </section>
  );
}
