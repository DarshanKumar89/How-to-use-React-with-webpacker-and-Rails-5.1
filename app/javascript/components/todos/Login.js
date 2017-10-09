import React from 'react';

export default class LoginPage extends React.Component{
  render(){
    return(
    <div>
      <h1>Login Page</h1>
      <div class="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <button type="submit">Login</button>
      </div>
    </div>
    );
  }
}