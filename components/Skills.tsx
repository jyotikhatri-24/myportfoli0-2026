"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Frontend",
    icon: "🎨",
    color: "var(--accent)",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    label: "Backend",
    icon: "⚙️",
    color: "var(--accent-2)",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "REST APIs", level: 90 },
      { name: "Django", level: 70 },
    ],
  },
  {
    label: "Tools & Other",
    icon: "🛠️",
    color: "#a855f7",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const allTechPills = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "REST API", category: "backend" },
  { name: "Socket.io", category: "backend" },
  { name: "Redis", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Python", category: "tools" },
  { name: "SQL", category: "tools" },
  { name: "Groq AI", category: "tools" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "120px 0",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="orb orb-emerald" style={{ width: 500, height: 500, top: "20%", right: -200, opacity: 0.3 }} />

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            Skills & Technologies
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
            My <span className="gradient-text">Technical</span> Toolkit
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            From pixel-perfect frontends to robust backend APIs — here&apos;s what I use to build production-grade apps.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 64,
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: ci * 0.12 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: 28 }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {cat.label}
                </h3>
              </div>

              {/* Skills with bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text-secondary)" }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: cat.color, fontWeight: 600 }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: ci * 0.1 + si * 0.07,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}aa)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20 }}>
            Also working with
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {allTechPills.map((tech, i) => (
              <motion.span
                key={tech.name}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
