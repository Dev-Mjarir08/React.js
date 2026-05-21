import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({})
  const [list, setList] = useState([])
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

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
      const newList = [...list,{ ...user, id: Date.now() }]
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username || ""}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email || ""}
          onChange={handleChange}
        />

        <br /><br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password || ""}
          onChange={handleChange}
        />

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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>

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