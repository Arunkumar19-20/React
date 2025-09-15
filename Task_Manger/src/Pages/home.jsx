import React, { useState } from "react";

function Home() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    
   container: {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  lineHeight: 1.6,
  color: "#333",
  backgroundColor: "gray",
  minHeight: "100vh",
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
   
    navLink: (isHovered) => ({
      textDecoration: "none",
      color: isHovered ? "#00c6ff" : "#fff",
      fontWeight: 500,
      transition: "color 0.3s",
    }),
    hero: {
      background: "url('background.jpg') no-repeat center center/cover",
      height: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "relative",
      color: "#fff",
    },
    heroContent: {
      position: "relative",
      maxWidth: "700px",
      padding: "20px",
    },
    heroHeading: {
      fontSize: "48px",
      marginBottom: "20px",
    },
    heroSpan: {
      color: "#00c6ff",
    },
    heroText: {
      fontSize: "18px",
      marginBottom: "30px",
    },
    btnPrimary: {
      display: "inline-block",
      padding: "12px 24px",
      background: "#00c6ff",
      color: "#fff",
      fontWeight: "bold",
      textDecoration: "none",
      borderRadius: "6px",
      transition: "background 0.3s",
    },
    features: {
      padding: "60px 20px",
      textAlign: "center",
    },
    featureCards: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    card: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "20px",
      width: "280px",
      transition: "transform 0.3s",
    },
    cardTitle: {
      marginBottom: "10px",
      color: "#00c6ff",
    },
    footer: {
      background: "#0d1b2a",
      color: "#fff",
      textAlign: "center",
      padding: "15px",
      marginTop: "40px",
    },
  };

  // Navbar links list
  const navItems = [
    { text: "Home", href: "home" },
    { text: "Feature", href: "Feature" },
    { text: "Contact", href: "Contact" },
    { text: "Login", href: "login" },
  ];

  return (
    <div style={styles.container}>
    
      <header style={styles.navbar}>
        <div style={styles.logo}>
          Task<span style={styles.logoSpan}> Manager</span>
        </div>
        <ul style={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                style={styles.navLink(hoveredLink === index)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </header>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>
            Organize Your <span style={styles.heroSpan}>Tasks</span> Effortlessly
          </h1>
          <p style={styles.heroText}>
            Boost your productivity with our smart task management system. Plan, track, and achieve your goals with ease.
          </p>
          <a href="start" style={styles.btnPrimary}>Get Started</a>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.featureCards}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>✅ Easy to Use</h3>
            <p>Simple and intuitive interface for managing tasks.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📅 Smart Scheduling</h3>
            <p>Set deadlines, reminders, and stay on track effortlessly.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📊 Progress Tracking</h3>
            <p>Visualize your task progress with charts and insights.</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 TaskManager. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
