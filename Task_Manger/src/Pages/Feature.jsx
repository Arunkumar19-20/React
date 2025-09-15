import React, { useState } from "react";

function Feature() {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const styles = {
  container: {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: 1.6,
  color: "#333",
  backgroundColor: "gray",
  minHeight: "100vh",
  height: "100%",
  width: "100vw",
  margin: 0,
  padding: 0
},

navbar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 30px",
  backgroundColor: "#0d1b2a",
  color: "white",
  fontFamily: "'Segoe UI', sans-serif",
  fontSize: "14px", 
},
logo: {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#fff",
},
navList: {
  listStyle: "none",
  display: "flex",
  gap: "15px", 
},
    logoSpan: {
      color: "#00c6ff",
    },
    
    navItem: (isHovered) => ({
      color: isHovered ? "#00c6ff" : "white", 
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s",
      cursor: "pointer",
    }),
    hero: {
      textAlign: "center",
      padding: "60px 20px",
      background: "#333",
        color: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      borderRadius: "12px",
      margin: "20px auto",
      width: "90%",
    },
    heroTitle: {
      fontSize: "2.5em",
      margin: "0 0 20px 0",
    },
    heroText: {
      fontSize: "1.2em",
      color: "white",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "24px",
      marginBottom: "60px",
      width: "90%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    featureCard: (isHovered) => ({
      background: isHovered
        ? "rgba(255,255,255,0.25)"
        : "rgba(255,255,255,0.15)",
      backdropFilter: "blur(12px)",
      padding: "24px",
      borderRadius: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
      transition: "transform 0.3s, background 0.3s",
      transform: isHovered ? "translateY(-6px)" : "translateY(0)",
      cursor: "pointer",
    }),
    footer: {
      background: "#0d1b2a",
      color: "#fff",
      textAlign: "center",
      padding: "15px",
      marginTop: "40px",
    },
  };

  return (
    <div style={styles.container}>
      
      <header style={styles.navbar}>
        <div style={styles.logo}>
          Task <span style={styles.logoSpan}>Manager</span>
        </div>
        <ul style={styles.navList}>
          {["Home", "Feature",  "Contact", "Login"].map(
            (item, index) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  style={styles.navItem(hoveredNav === index)}
                  onMouseEnter={() => setHoveredNav(index)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Task <span style={styles.logoSpan}>Manager</span> Features
        </h1>
        <p style={styles.heroText}>
          Discover how Task Manager can help you stay organized, productive,
          and on top of your daily tasks.
        </p>
      </section>
      <section style={styles.featuresGrid}>
        {[
          {
            title: "📋 Task Management",
            desc: "Create, edit, and delete tasks with ease. Keep track of everything you need to do in one place.",
          },
          {
            title: "⏰ Reminders & Notifications",
            desc: "Set reminders with sound and notifications to never miss an important task.",
          },
          {
            title: "✅ Mark as Done",
            desc: "Mark tasks as complete to track your productivity and focus on pending tasks.",
          },
          {
            title: "⬇ Download Tasks",
            desc: "Download all your tasks as a text file for offline use or backup.",
          },
          {
            title: "🧹 Clear All",
            desc: "Remove all tasks in one click when you want a fresh start.",
          },
          {
            title: "📊 Responsive & Easy-to-Use",
            desc: "Works on desktop and mobile devices, designed for simplicity and efficiency.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            style={styles.featureCard(hoveredCard === index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      <footer style={styles.footer}>
        &copy; 2025 Task Manager. All rights reserved.
      </footer>
    </div>
  );
}

export default Feature;
