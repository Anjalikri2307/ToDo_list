import React, { Component } from 'react';
// import React from 'react';
// class LoginPage extends Component {
//   constructor(props) {
//     super(props);

  //   this.state = {
  //     username: '',
  //     password: '',
  //   };
  // }

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // }

  // handleLogin = (event) => {
  //   event.preventDefault();
  //   const { username, password } = this.state;

  //   // Here, you can add logic to send the login data to your server for authentication.
  //   // Typically, this involves making an HTTP request (e.g., using Axios or Fetch).

  //   // For this example, we'll just log the data to the console.
  //   console.log('Username: ' + username);
  //   console.log('Password: ' + password);

  //   // You can also redirect the user to a different page after successful login.
  // }

  

export default function SignIn() {
  return (
    <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
  )
}
