import React, { useState } from "react";

function Signup() {
  const [msg, setMsg] = useState("");

  // Your registerUser logic in React style
  const registerUser = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (localStorage.getItem(username)) {
      setMsg("❌ Username already exists!");
    } else {
      localStorage.setItem(username, password);
      setMsg("✅ Sign Up successful! You can login now.");
    }
  };

  const styles = {
    
    
    body: {
  fontFamily: "'Segoe UI', sans-serif",
  minHeight: "100vh",
  width: "100vw",
  margin: "0%",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1e1e2f",
},

    signupBox: {
      background: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      padding: "40px 30px",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
      width: "380px",
      textAlign: "left",
      color: "#fff",
    },
    heading: {
      marginBottom: "25px",
      fontSize: "26px",
      fontWeight: 600,
      textAlign: "center",
      color: "#ffffff",
    },
    inputGroup: {
      marginBottom: "18px",
    },
    label: {
      color: "#e0e0e0",
      fontSize: "14px",
      fontWeight: 500,
      display: "block",
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      marginTop: "5px",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "8px",
      outline: "none",
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
      fontSize: "15px",
      transition: "0.3s",
    },
    button: {
      width: "100%",
      padding: "14px",
      background: "#4fc3f7",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 600,
      color: "#fff",
      cursor: "pointer",
      transition: "0.3s",
      marginTop: "5px",
    },
    loginLink: {
      marginTop: "18px",
      fontSize: "14px",
      textAlign: "center",
      color: "#ccc",
    },
    loginAnchor: {
      color: "#4fc3f7",
      textDecoration: "none",
    },
    msg: {
      marginTop: "15px",
      fontSize: "14px",
      fontWeight: "600",
      textAlign: "center",
      color: msg.startsWith("✅") ? "lightgreen" : "red",
    },
  };

  return (
    <div style={styles.ut} >
    <div style={styles.body}>
      <div style={styles.signupBox}>
        <h2 style={styles.heading}>Create Account</h2>
        <form onSubmit={registerUser}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        {msg && <p style={styles.msg}>{msg}</p>}

        <p style={styles.loginLink}>
          Already have an account?{" "}
          <a href="/Login" style={styles.loginAnchor}>
            Login
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Signup;
