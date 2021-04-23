import React, { useEffect, useState } from "react";
import axios from 'axios';
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const initialState = {
  username:'',
  password:'',
  error: '',
}
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
      console.log(e.target.name, e.target.value)
      setState({
          ...state,
          [e.target.name]: e.target.value,
      });
    };
    
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/colors", state)
      .then((res) => {
        window.localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/BubblePage");
      });
    }

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  }, []);
  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>

      <form>
          <label htmlFor="username">Username</label>
          <input data-testid='username' name='username' type='text' value={state.username} onChange={handleChange}/>
          <label htmlFor="password">Password</label>
          <input data-testid='password' name='password' type ='password' value={state.password} onChange={handleChange}/>
          <button onClick={login}>submit</button>
      </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.