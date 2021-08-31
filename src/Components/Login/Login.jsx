import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../redux/authSlice";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    history.push("/page1");
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  // const userNameRef = useRef();
  // const passwordRef = useRef();
  // const [error, setError] = useState("");

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={handleUser}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={handlePass}
          required
        />
        <button type="submit">Login</button>
      </form>
      {/* {currentUser.userName, currentUser.password} */}
      {/* {error && <h1>{error}</h1>} */}
    </div>
  );
}

export default Login;
