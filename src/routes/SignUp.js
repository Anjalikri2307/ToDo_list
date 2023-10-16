import React from 'react'

export default function SignUp() {
  return (
    <div>
        <h2>Registration</h2>
        <form >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
  )
}
