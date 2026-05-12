import React, { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])

  const handelSubmit = (e) => {
    e.preventDefault()
    const newList = { ...list, id: Date.now(), text: todo }
    setList([...list, newList])
  }
  return (
    <>
      <form action="" method='post' onSubmit={handelSubmit}>
        <div>
          <label htmlFor="text">Task</label>
          <input type="text" name='text' id='text' value={todo} onChange={(e) => { setTodo(e.target.value) }} />
        </div>
        <br />

        <div>
          <button type='submit'>Submit</button>
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
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{text}</td>
                    <td>
                      <button>Delete</button>{" "}
                      <button>Edit</button>
                    </td>
                  </tr>
                </>
              )
            })

          }

        </tbody>
      </table>
    </>
  )
}

export default App
