import "./App.css";
import Welcome from "./components/Welcome";
import GenericEmployee from "./components/employee/GenericEmployee";
import Header from "./components/dashboard/navbar/Header";
import Footer from "./components/dashboard/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  // const hahndelViewProfile = () => {
  //   alert("Hello");
  // };
  return (
    <>
      {/* <Welcome />
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
      <button onClick={hahndelViewProfile}>view profile</button> */}

      {/* Navbar */}
      <Header />

      {/* Generic and Reusable Components */}

      {/* <GenericEmployee
        name="Sanket"
        email="shubham@gmail.com"
        status="Active"
        btnText="View Profile"
        viewDetails={hahndelViewProfile}
      /> */}


      {/* Full Dashboard */}
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
