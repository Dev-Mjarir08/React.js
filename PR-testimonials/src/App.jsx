import React from 'react'
import './App.css'
import { FaStar } from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="container">

        <div className='content-Wraper'>

          <div className='header'>
            <h2>Testimonials</h2>

            <form className='testimonial-form'>

              {/* Email */}
              <div className='form-group'>
                <label htmlFor="email">
                  Email:
                </label>

                <input
                  className='form-input'
                  type="text"
                  id='email'
                  placeholder='Enter your email'
                />
              </div>

              {/* Rating */}
              <div className='form-group'>

                <label htmlFor="rating">
                  Rating:
                </label>

                <div className='rating'>

                  {
                    [...Array(5)].map((_, index) => {
                      return (
                        <FaStar
                          className='star'
                          color='gray'
                          key={index}
                        />
                      )
                    })
                  }

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

      </div>
    </>
  )
}

export default App