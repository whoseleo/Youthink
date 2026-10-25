export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2.5rem", color: "#0033A0", margin: 0 }}>Youthink</h1>
        <p style={{ color: "#475569" }}>
          Discover volunteering, MUN, youth councils and civic opportunities worldwide.
        </p>
        <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>Coming soon.</p>
      </div>
    </main>
  );
}
