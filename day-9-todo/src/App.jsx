import React, { useEffect, useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])
  const [editID, setEditId] = useState(null)


  const handelSubmit = (e) => {

    e.preventDefault()
    if (editID) {

      const data = list.map((value) => {

        if (value.id === editID) {
          return { ...value, text: todo }
        }
        return value
      })

      localStorage.setItem('todolist', JSON.stringify(data))
      setList(data)
      setEditId(null)
      setTodo("")

    } else {
      const newList = [...list, { id: Date.now(), text: todo }]

      setList(newList)

      localStorage.setItem('todolist', JSON.stringify(newList))
      setTodo("")
    }

  }
  const handelDelete = (id) => {

    let newList = list.filter((value) => {
      return value.id !== id
    })
    localStorage.setItem('todolist', JSON.stringify(newList))

    setList(newList)
  }
  const handelEdit = (id) => {

    let data = list.find((value) => {
      return value.id === id
    })

    setTodo(data.text)
    setEditId(id)
  }
  useEffect(() => {

    const oldData = JSON.parse(localStorage.getItem('todolist'))

    if (oldData) {
      setList(oldData)
    }

  }, [])
  return (
    <>
      <form onSubmit={handelSubmit}>

        <div>
          <label htmlFor="text">Task</label>

          <input
            type="text"
            id='text'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>

        <br />

        <div>
          <button type='submit'>
            {
              editID ? "Update" : "Submit"
            }
          </button>
        </div>

        <br />

      </form>

      <table border={1} width={500}>

        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {
            list.map((value, index) => {

              const { id, text } = value

              return (
                <tr key={id}>

                  <td>{index + 1}</td>

                  <td>{text}</td>

                  <td>

                    <button
                      type='button'
                      onClick={() => handelDelete(id)}
                    >
                      Delete
                    </button>

                    {" "}

                    <button
                      type='button'
                      onClick={() => handelEdit(id)}
                    >
                      Edit
                    </button>

                  </td>

                </tr>
              )
            })
          }

        </tbody>

      </table>
    </>
  )
}

export default App