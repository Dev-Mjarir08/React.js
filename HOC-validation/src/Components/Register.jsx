import React from 'react'
import Error from '../HOC/Error'

const Register = ({
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
                    name="username"
                    placeholder='Enter Your Username'
                    value={form.username || ""}
                    onChange={handleChange}
                />

                {error.username && <span>{error.username}</span>}

                <br />
                <br />

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
                    type="tel"
                    name="phone"
                    placeholder='Enter Your Phone Number'
                    value={form.phone || ""}
                    onChange={handleChange}
                />

                {error.phone && <span>{error.phone}</span>}

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

export default Error(Register)