import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msg, setMsg] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form to Spring Boot
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setMsg("⚠️ Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8089/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMsg("✅ Your message has been sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setMsg("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setMsg("⚠️ Server not reachable. Check if Spring Boot is running.");
    }
  };

  // Styles
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "gray",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 30px",
      backgroundColor: "#0d1b2a",
      color: "white",
      fontSize: "14px",
    },
    logo: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#fff",
    },
    logoSpan: { color: "#00c6ff" },
    navList: {
      listStyle: "none",
      display: "flex",
      gap: "15px",
    },
    navItem: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s",
    },
    navItemHover: {
      color: "#00c6ff",
    },
    contactSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#5b5656",
      padding: "40px",
    },
    contactTitle: { fontSize: "2em", marginBottom: "20px", color: "#00c6ff" },
    contactBox: {
      background: "rgba(0,0,0,0.3)",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
      width: "100%",
      maxWidth: "500px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "6px",
      border: "none",
    },
    button: {
      padding: "10px 20px",
      background: "#00c6ff",
      border: "none",
      borderRadius: "6px",
      color: "white",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "10px",
    },
    footer: {
      textAlign: "center",
      padding: "15px",
      background: "#0d1b2a",
      color: "white",
      marginTop: "auto",
    },
    message: {
      textAlign: "center",
      marginTop: "10px",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <div style={styles.logo}>
          Task <span style={styles.logoSpan}>Manager</span>
        </div>
        <ul style={styles.navList}>
          {["/Home", "/Feature", "/contact", "/login"].map((path, i) => {
            const names = ["Home", "Features", "Contact", "Login"];
            return (
              <li key={i}>
                <Link
                  to={path}
                  style={styles.navItem}
                  onMouseEnter={(e) =>
                    (e.target.style.color = styles.navItemHover.color)
                  }
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  {names[i]}
                </Link>
              </li>
            );
          })}
        </ul>
      </header>

      {/* Contact Form */}
      <section style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Contact Us</h2>
        <form style={styles.contactBox} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            style={styles.input}
          ></textarea>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
          {msg && <p style={styles.message}>{msg}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; 2025 Task Manager. All rights reserved.
      </footer>
    </div>
  );
}

export default Contact;
