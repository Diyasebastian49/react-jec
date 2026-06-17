import React from 'react'

const SamForm = () => {
  return (
    <>
    <h1>Login Page</h1>
    <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br/>
        <label htmlFor="confirm password">Confirm Password:</label>
        <input type="password" id="confirm password" name="confirm password" />
        <br/>
        <button type="submit">Submit</button>
        </form>
        </>
  )
}

export default SamForm