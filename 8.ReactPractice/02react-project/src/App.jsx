import "./App.css";
import Welcome from "./components/Welcome";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const hahndelViewProfile = () => {
    console.log("handle clicked");
  };
  return (
    <>
      <Welcome />
      <div style={{ display: "inline-flex", gap: "5px" }}>
        <EmployeeCard
          name={"Shubham Patel"}
          email={"shubham.patel@zealousweb.com"}
          hireDate={"2026-01-01"}
          salary={50000}
          isActive={true}
        />
        <EmployeeCard
          name={"Yash"}
          email={"yash@gmailcom"}
          hireDate={"2026-06-01"}
          salary={80000}
        />
        <EmployeeCard
          name={"Meet "}
          email={"meet@gmail.com"}
          hireDate={"2026-09-09"}
          salary={30000}
          isActive={false}
        />
      </div>
      <button onClick={hahndelViewProfile}>view profile</button>
    </>
  );
}

export default App;
