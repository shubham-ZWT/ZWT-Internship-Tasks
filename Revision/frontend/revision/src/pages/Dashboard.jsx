import useAuth from "../store/authStore";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to the Dashboard</h2>
      <p>This is a protected area. If you can see this, you are logged in!</p>

      <button
        onClick={logout}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Logout
      </button>
    </div>
  );
}
