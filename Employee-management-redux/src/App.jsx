import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "./features/ems/employeeSlice.js";

const App = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employee);

  const [editId, setEditId] = useState(null);

  const [employee, setEmployee] = useState({});
  const [departments, setDepartments] = useState([
    "HR",
    "IT",
    "Finance",
    "Marketing",
  ]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      dispatch(
        updateEmployee({
          id: editId,
          ...employee,
        })
      );

      setEditId(null);
    } else {
      dispatch(
        addEmployee({
          id: Date.now(),
          ...employee,
        })
      );
    }

    setEmployee({});
  };

  const handleEdit = (id) => {
    const data = employees.find((emp) => emp.id === id);

    setEmployee(data);
    setEditId(id);
  };

  return (
    <div className="container mt-5">

      <div
        class="row justify-content-center"
      >
        <h2 className="text-center mt-5 mb-5">Register Employee</h2>
        <div class="col-6 border border-2 p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-2"
                value={employee.name || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-2"
                value={employee.email || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">

              <select
                className="form-select"
                name="department"
                value={employee.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>

                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">

              <input
                type="text"
                name="role"
                placeholder="Role"
                className="form-control mb-2"
                value={employee.role || ""}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary">
              {editId ? "Update Employee" : "Add Employee"}
            </button>
          </form></div>
      </div>


      <table className="table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (

            <tr key={emp.id}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.role}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(emp.id)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteEmployee(emp.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default App;