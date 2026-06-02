import React, { useState, useEffect } from 'react';

const App = () => {
  const [formData, setFormData] = useState({});
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState({});
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const skills = [
    "JavaScript Developer",
    "Node Developer",
    "React Developer",
    "Next Developer",
    "MERN Developer"
  ];

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("users")) || [];
    setList(savedData);
  }, []);

  const handleChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === 'language') {
      let newLanguages = [...languages];

      if (checked) {
        newLanguages.push(value);
      } else {
        newLanguages = newLanguages.filter(
          (lang) => lang !== value
        );
      }

      setLanguages(newLanguages);

      setFormData({
        ...formData,
        language: newLanguages
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validation = () => {
    let error = {};

    if (!formData.username) {
      error.username = "Username is required";
    }

    if (!formData.email) {
      error.email = "Email is required";
    }

    if (!formData.password) {
      error.password = "Password is required";
    }
    if (!formData.gender) {
      error.gender = "Gender is required";
    }
    setError(error);

    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    let updatedList = [];

    if (editIndex !== null) {
      updatedList = [...list];
      updatedList[editIndex] = formData;
      setEditIndex(null);
    } else {
      updatedList = [...list, { ...formData, id: Date.now() }];
    }

    setList(updatedList);
    localStorage.setItem(
      "users",
      JSON.stringify(updatedList)
    );

    setFormData({});
    setLanguages([]);
    setError({});
  };

  const handleDelete = (id) => {
    const updatedList = list.filter(
      (item) => item.id !== id
    );

    setList(updatedList);
    localStorage.setItem(
      "users",
      JSON.stringify(updatedList)
    );
  };

  const handleEdit = (id) => {
    const index = list.findIndex(
      (item) => item.id === id
    );

    const user = list[index];

    setFormData(user);
    setLanguages(user.language || []);
    setEditIndex(index);
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-5">

                <h2 className="text-center fw-bold mb-4 text-primary">
                  Registration Form
                </h2>

                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-semibold">
                      Username
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="username"
                      id="username"
                      value={formData.username || ""}
                      onChange={handleChange}
                    />

                    {error.username && (
                      <small className="text-danger">
                        {error.username}
                      </small>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label fw-semibold"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      name="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                    />

                    {error.email && (
                      <small className="text-danger">
                        {error.email}
                      </small>
                    )}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label fw-semibold"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      name="password"
                      value={formData.password || ""}
                      onChange={handleChange}
                    />

                    {error.password && (
                      <small className="text-danger">
                        {error.password}
                      </small>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold d-block">
                      Gender
                    </label>

                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Male"
                          checked={formData.gender === "Male"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">
                          Male
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={formData.gender === "Female"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          value="others"
                          checked={formData.gender === "others"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label">
                          Others
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Programming Languages
                    </label>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="c language"
                            name="language"
                            checked={languages.includes("c language")}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">
                            C
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="C+ language"
                            name="language"
                            checked={languages.includes("C+ language")}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">
                            C++
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="C language"
                            name="language"
                            checked={languages.includes("C language")}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">
                            C#
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="JavaScript language"
                            name="language"
                            checked={languages.includes("JavaScript language")}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">
                            JavaScript
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="JavaScript language"
                            name="language"
                            checked={languages.includes(" language")}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">
                            Python
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      Skills
                    </label>

                    <select
                      className="form-select form-select-lg"
                      name="skills"
                      value={formData.skills || ""}
                      onChange={handleChange}
                    >
                      <option value="">
                        Choose Your Skill
                      </option>

                      {skills.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-3"
                    >
                      {editIndex !== null
                        ? "Update Record"
                        : "Submit Record"}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}

      <div className="container pb-5">
        <div className="card border-0 shadow-lg rounded-4">
          <div className="card-body">

            <h3 className="text-center mb-4 text-primary fw-bold">
              Registered Users
            </h3>

            <div className="table-responsive">
              <table className="table table-hover table-bordered align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Languages</th>
                    <th>Skill</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((item) => (
                    <tr key={item.id}>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.language?.join(", ")}</td>
                      <td>{item.skills}</td>

                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {list.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;