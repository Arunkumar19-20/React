import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  // Keep track of scheduled reminders
  const scheduledAlarms = new Set();

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    scheduleReminders();
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8089/api/todos/all");
      setTasks(res.data);
    } catch (err) {
      console.error("❌ Fetch failed:", err);
    }
  };

  const addTask = async () => {
    if (!taskText.trim()) {
      alert("⚠️ Enter a task!");
      return;
    }
    try {
      await axios.post("http://localhost:8089/api/todos/add", {
        title: taskText.trim(),
        time: reminderTime,
        completed: false,
      });
      fetchTasks();
    } catch (err) {
      console.error("❌ Add failed:", err);
    }
    setTaskText("");
    setReminderTime("");
  };

  const toggleDone = async (task) => {
    try {
      await axios.put(`http://localhost:8089/api/todos/update/${task.id}`, {
        ...task,
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      console.error("❌ Update failed:", err);
    }
  };

  const removeTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/api/todos/delete/${id}`);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      console.error("❌ Delete failed:", err);
    }
  };

  const clearAll = async () => {
    if (window.confirm("Delete ALL tasks?")) {
      try {
        for (let t of tasks) {
          await axios.delete(`http://localhost:8089/api/todos/delete/${t.id}`);
        }
        setTasks([]);
      } catch (err) {
        console.error("❌ Clear all failed:", err);
      }
    }
  };

  const downloadTasks = () => {
    if (tasks.length === 0) {
      alert("⚠️ No tasks to download!");
      return;
    }
    const blob = new Blob([JSON.stringify(tasks, null, 2)], {
      type: "application/txt",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "tasks.txt";
    link.click();
  };

  // 🔔 Reminder scheduler
  const scheduleReminders = () => {
    tasks.forEach((task) => {
      if (task.time && !task.completed && !scheduledAlarms.has(task.id)) {
        const taskTime = new Date(task.time).getTime();
        const now = Date.now();
        const delay = taskTime - now;

        if (delay > 0) {
          setTimeout(() => {
            // Show alert
            alert(`⏰ Reminder: ${task.title}`);

            // Play sound (place alarm.mp3 in /public)
            const audio = new Audio("/alarm.mp3");
            audio.play().catch((err) => console.warn("🔇 Sound blocked", err));

            scheduledAlarms.delete(task.id);
          }, delay);

          scheduledAlarms.add(task.id);
        }
      }
    });
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "gray",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 50px",
      backgroundColor: "#0d1b2a",
      color: "white",
    },
    navItem: (isHovered) => ({
      color: isHovered ? "#00c6ff" : "white",
      textDecoration: "none",
      fontSize: "16px",
      transition: "color 0.3s",
    }),
    logo: { fontSize: "24px", fontWeight: "bold", color: "#fff" },
    logoSpan: { color: "#00c6ff" },
    ul: {
      listStyle: "none",
      display: "flex",
      gap: "25px",
      margin: 0,
      padding: 0,
    },
    btn: {
      background: "#00c6ff",
      padding: "8px 16px",
      borderRadius: "6px",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
    taskSection: {
      flex: 1,
      padding: "40px 20px",
      maxWidth: "700px",
      margin: "40px auto",
      background: "#5b5656ff",
      borderRadius: "12px",
      color: "white",
    },
    inputRow: { display: "flex", gap: "10px", marginBottom: "15px" },
    input: {
      flex: 1,
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    taskList: { listStyle: "none", padding: 0, marginTop: "15px" },
    task: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    done: { textDecoration: "line-through", color: "gray" },
    footer: {
      background: "#0d1b2a",
      color: "#fff",
      textAlign: "center",
      padding: "15px",
      marginTop: "auto",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.navbar}>
        <div style={styles.logo}>
          Task <span style={styles.logoSpan}>Manager</span>
        </div>
        <ul style={styles.ul}>
          {["Home", "Feature", "Contact", "Login"].map((item, index) => (
            <li key={index}>
              <Link
                to={item === "Home" ? "/Home" : `/${item.toLowerCase()}`}
                style={styles.navItem(hoveredLink === index)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <section style={styles.taskSection}>
        <h2>
          📋 Your <span style={styles.logoSpan}>Tasks</span>
        </h2>
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="Enter your task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <input
            type="datetime-local"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button style={styles.btn} onClick={addTask}>
            ➕ Add
          </button>
        </div>

        <div style={styles.inputRow}>
          <button
            style={{ ...styles.btn, background: "#6c757d" }}
            onClick={clearAll}
          >
            🧹 Clear All
          </button>
          <button
            style={{ ...styles.btn, background: "#28a745" }}
            onClick={downloadTasks}
          >
            ⬇ Download
          </button>
        </div>

        <ul style={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id} style={styles.task}>
              <span
                style={task.completed ? styles.done : {}}
                onClick={() => toggleDone(task)}
              >
                {task.title}{" "}
                {task.time && <small>⏰ {task.time.replace("T", " ")}</small>}
              </span>
              <button
                style={{ ...styles.btn, background: "red" }}
                onClick={() => removeTask(task.id)}
              >
                🗑
              </button>
            </li>
          ))}
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 Task Manager. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
