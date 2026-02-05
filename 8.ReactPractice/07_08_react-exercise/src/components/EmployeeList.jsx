import useFetch from "../hooks/useFetch";

export default function EmployeeList() {
  const {
    data: employees,
    loading,
    error,
    refetch,
  } = useFetch("http://localhost:3000/api/employees");

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  console.log(employees)

  return (
    <>
      <h2>Employees</h2>
      <button onClick={refetch}>Refetch</button>

      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>{emp.first_name}</li>
        ))}
      </ul>
    </>
  );
}
