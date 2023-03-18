import { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "Javascript Developer",
      gender: "Male",
      teamName: "Team A",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Nodejs Developer",
      gender: "Female",
      teamName: "Team B",
    },
  ]);
  return (
    <main>
      {employees.map((employee) => (
        <p>{employee.fullName}</p>
      ))}
    </main>
  );
};

export default Employees;
