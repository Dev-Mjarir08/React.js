import React, { useRef, useState } from 'react'

const App = () => {

  const fname = useRef()
  const lname = useRef()
  const email = useRef()
  const password = useRef()

  const [list, setList] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      id: Date.now(),
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      password: password.current.value
    }
    const newList = ([...list, obj])
    setList(newList)
    fname.current.value = ''

    lname.current.value = ''

    email.current.value = ''

    password.current.value = ''
    console.log(newList);
  }

  const handleDelete = (id) => {
    let newlist = list.filter((item) => item.id != id)
    setList(newlist)
  }
  return (
    <>
      <h2>Register</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          First Name
        </label>

        <input type="text" ref={fname} name='fname' id='fname' />
        <br />
        <br />
        <label htmlFor="lastname">
          Last Name
        </label>

        <input type="text" ref={lname} name='lname' id='lname' />
        <br />
        <br />

        <label htmlFor="email">
          Email
        </label>
        <input type="email" ref={email} name='email' id='email' />
        <br />
        <br />

        <label htmlFor="password">
          Password
        </label>
        <input type="password" ref={password} name='password' id='password' />
        <br />
        <br />

        <button type='submit'> Submit</button>
      </form>

      <table border={1} cellPadding={10} width={800}>
        <thead>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            list.map((item, index) => {
              const { id, fname, lname, email, password } = item
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>
                      <button type='button' onClick={() => handleDelete(item.id)}>Delete</button>{' '}
                      <button type='button' onClick={() => handleEdit(item.id)}>Edit</button>
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
