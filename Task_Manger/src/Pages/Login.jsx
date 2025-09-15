import React, { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    let defaultUsers = {
      Arun: "1977",
      Sibi: "si787",
      Silviya: "silvi584",
      Sanjay: "sanj"
    };

    for (let user in defaultUsers) {
      if (!localStorage.getItem(user)) {
        localStorage.setItem(user, defaultUsers[user]);
      }
    }
  }, []);

  const validateLogin = (e) => {
    e.preventDefault();
    let storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
      window.location.href = "home"; 
    } else {
      setError("❌ Invalid username or password!");
    }
  };


  const styles = {
    
 body: {
  fontFamily: "'Segoe UI', sans-serif",
  minHeight: "100vh",    
  width: "100vw",
  margin: 0,            
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1e1e2f",
},


    box: {
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
    label: {
      color: "#e0e0e0",
      fontSize: "14px",
      fontWeight: 500,
    },
    input: {
      width: "100%",
      padding: "12px 14px",
      marginTop: "5px",
      marginBottom: "18px",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "8px",
      outline: "none",
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
      fontSize: "15px",
      transition: "0.3s",
    },
    btn: {
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
    },
    btnHover: {
      background: "#29b6f6",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(79,195,247,0.4)",
    },
    extraLinks: {
      marginTop: "18px",
      fontSize: "14px",
      textAlign: "center",
      color: "#ccc",
    },
    link: {
      color: "#4fc3f7",
      textDecoration: "none",
    },
    error: {
      color: "red",
      fontSize: "14px",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={validateLogin}>
          <div>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.btn}>
            Login
          </button>

          {error && <p style={styles.error}>{error}</p>}
        </form>

        <div style={styles.extraLinks}>
          <p>
            <a href="#" style={styles.link}>
              Forgot Password?
            </a>
          </p>
          <p>
            Don’t have an account?{" "}
            <a href="signup" style={styles.link}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
