import React, { useState } from 'react'

const Error = (WrapperComponent) => {

    return (props) => {

        const [form, setForm] = useState({})
        const [list, setList] = useState([])
        const [error, setError] = useState({})

        const handleSubmit = (e) => {
            e.preventDefault()

            if (!validation()) return;

            let newList = [...list, { ...form, id: Date.now() }]

            setList(newList)

            console.log(newList)
        }

        const handleChange = (e) => {
            const { name, value } = e.target

            setForm({ ...form, [name]: value })
        }

        const validation = () => {

            let error = {}

            if (!form.username) error.username = "Username Required"
            if (!form.email) error.email = "Email Required"
            if (!form.password) error.password = "Password Required"
            if (!form.phone) error.phone = "Phone Number Required"

            setError(error)

            return Object.keys(error).length === 0
        }

        return (
            <WrapperComponent
                {...props}
                form={form}
                setForm={setForm}
                list={list}
                setList={setList}
                error={error}
                setError={setError}
                validation={validation}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        )
    }
}

export default Error