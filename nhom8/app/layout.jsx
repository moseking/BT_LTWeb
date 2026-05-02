export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={styles.body}>
        <div style={styles.bgGlow1}></div>
        <div style={styles.bgGlow2}></div>
        {children}
      </body>
    </html>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "system-ui, sans-serif",
    background:
      "radial-gradient(circle at 20% 20%, #1e3a8a, transparent 40%), radial-gradient(circle at 80% 80%, #9333ea, transparent 40%), #020617",
    minHeight: "100vh",
    color: "white",
  },
  bgGlow1: {
    position: "fixed",
    top: "-100px",
    left: "-100px",
    width: "300px",
    height: "300px",
    background: "#3b82f6",
    filter: "blur(120px)",
    opacity: 0.3,
  },
  bgGlow2: {
    position: "fixed",
    bottom: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    background: "#9333ea",
    filter: "blur(120px)",
    opacity: 0.3,
  },
};
