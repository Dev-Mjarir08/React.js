import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({})
  const [list, setList] = useState([])
  const [error, setError] = useState({})
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validation()) return;

    if (editId) {
      const data = list.map((value) => {
        if (value.id === editId) {
          return { ...user, id: editId }
        }
        return value
      })

      setList(data)
      setEditId(null)
    }
    else {
      const newList = [...list, { ...user, id: Date.now() }]
      setList(newList)
    }

    setUser({})
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleDelete = (id) => {
    const newList = list.filter(
      (value) => value.id !== id
    )

    setList(newList)
  }

  const handleEdit = (id) => {
    const data = list.find(
      (value) => value.id === id
    )

    setUser(data)
    setEditId(id)
  }
  const validation = () => {
    let error = {}
    if (!user.username) error.username = "Username is Required"
    if (!user.email) error.email = "Email is Required"
    if (!user.phone) error.phone = "Phone is Required"
    if (!user.gender) error.gender = "Gender is Required"
    if (!user.password) error.password = "Password is Required"
    setError(error);
    return Object.keys(error).length == 0
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.username || ""}
          onChange={handleChange}
        />
        {error.username && <span>{error.username}</span>}

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
        />
     {error.email && <span>{error.email}</span>}
        <br /><br />
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={user.phone || ""}
          onChange={handleChange}
        />
   {error.phone && <span>{error.phone}</span>}
        <br /><br />
        <label>Gender:</label>{" "}
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={user.gender === "male"}
          onChange={handleChange}
        />
        
        <label>Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={user.gender === "female"}
          onChange={handleChange}
        />
        <label>Others</label>
        <input
          type="radio"
          name="gender"
          value="others"
          checked={user.gender === "others"}
          onChange={handleChange}
        />
   {error.gender && <span>{error.gender}</span>}
        <br /><br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password || ""}
          onChange={handleChange}
        />
   {error.password && <span>{error.password}</span>}
        <br /><br />

        <button type="submit">
          {editId ? "Update" : "Submit"}
        </button>
      </form>

      <table border={1} width={800}>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>

              <td>
                <button
                  type="button"
                  onClick={() =>
                    handleDelete(item.id)
                  }
                >
                  Delete
                </button>

                {" "}

                <button
                  type="button"
                  onClick={() =>
                    handleEdit(item.id)
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App