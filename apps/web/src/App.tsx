import { useEffect, useState } from "react";

// Defining a quick interface for what we expect from our API
interface HealthStatus {
  status: string;
  timestamp?: number;
}

function App() {
  const [data, setData] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Notice the relative path. The Vite proxy handles the routing.
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((payload) => setData(payload))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Interview Platform Dashboard</h1>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          backgroundColor: "#f8fafc",
        }}
      >
        <h2>System Status</h2>

        {error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : !data ? (
          <p>Connecting to backend API...</p>
        ) : (
          <pre
            style={{
              backgroundColor: "#1e293b",
              color: "#f8fafc",
              padding: "1rem",
              borderRadius: "4px",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default App;
