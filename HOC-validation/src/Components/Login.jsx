import React from 'react'
import Error from '../HOC/Error'

const Login = ({
    form,
    handleSubmit,
    handleChange,
    error
}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="email"
                    placeholder='Enter Your Email'
                    value={form.email || ""}
                    onChange={handleChange}
                />

                {error.email && <span>{error.email}</span>}

                <br />
                <br />

                <input
                    type="password"
                    name="password"
                    placeholder='Enter Your Password'
                    value={form.password || ""}
                    onChange={handleChange}
                />

                {error.password && <span>{error.password}</span>}

                <br />
                <br />

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default Error(Login)