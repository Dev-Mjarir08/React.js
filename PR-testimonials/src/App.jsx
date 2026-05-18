import React, { useState } from 'react'
import './App.css'
import { FaStar } from "react-icons/fa";

const App = () => {
  const [feedback, setFeedback] = useState({})
  const [star, setStar] = useState(0)
  const [temp, setTemp] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFeedback({ ...feedback, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);

  }
  const handleMouseEnter = (star) => {
    handleStar(0)
    setTemp(star)
  }

  const handleStar = (star) => {
    setStar(star)
    setFeedback({ ...feedback, star })
  }

  const handleMouseLeave = () => {
    setTemp(0)
  }
  return (
    <>
      <div className="container">

        <div className='content-Wraper'>

          <div className='header'>
            <h2>Testimonials</h2>

            <form className='testimonial-form' onSubmit={handleSubmit}>

              {/* Email */}
              <div className='form-group'>
                <label htmlFor="email">
                  Email:
                </label>

                <input
                  className='form-input'
                  type="text"
                  id='email'
                  name='email'
                  placeholder='Enter your email'
                  onChange={handleChange}
                />
              </div>

              {/* Rating */}
              <div className='form-group'>

                <label htmlFor="rating">
                  Rating:
                </label>

                <div className='rating'>

                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="star"
                      color={temp > index || star > index ? "gold" : "gray"}
                      onClick={() => handleStar(index + 1)}
                      onMouseEnter={() => setTemp(index + 1)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}

                </div>

              </div>

              {/* Feedback */}
              <div className='form-group'>

                <label htmlFor="feedback">
                  Feedback:
                </label>

                <textarea
                  className='form-textarea'
                  id='feedback'
                  name='text'
                  onChange={handleChange}
                  placeholder='Write your feedback...'
                ></textarea>

              </div>

              {/* Button */}
              <div className='form-group'>
                <button
                  className='submit-btn'
                  type='submit'
                >
                  Submit
                </button>
              </div>

            </form>

          </div>

        </div>
        <table>
          <thead>
            <th>#</th>
            <th>email</th>
            <th>star</th>
            <th>Review</th>
          </thead>
          <tbody>
            {
              feedback.map((value, index) => {

                const { email, star } = feedback

                return (
                  <tr key={id}>

                    <td>{index + 1}</td>
                    <td>{email}</td>

                    <td>{text}</td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App