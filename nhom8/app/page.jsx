export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔥 Welcome to your App</h1>
      <p style={styles.desc}>
        Demo form đăng ký với React Hook Form + Zod + Server Actions
      </p>

      <a href="/register" style={styles.button}>
        👉 Đi tới đăng ký
      </a>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  desc: {
    opacity: 0.7,
    marginBottom: "20px",
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    background: "linear-gradient(to right, #3b82f6, #9333ea)",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
