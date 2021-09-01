import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/authSlice";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const fakeUser = useSelector((state) => state.auth.fakeUser);
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userNameRef.current.value === fakeUser.name &&
      passwordRef.current.value === fakeUser.password
    ) {
      history.push("/page1");
      setError(false);
      dispatch(login());
    } else {
      setError(true);
    }
    setUser("");
    setPass("");
  };

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          ref={userNameRef}
          value={user}
          onChange={handleUser}
          required
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          value={pass}
          onChange={handlePass}
          required
        />
        <button type="submit">Login</button>
      </form>
      <h3>
        To Login use (username : <span style={{ color: "red" }}>user</span> )
        (password: <span style={{ color: "red" }}>1234</span>)
      </h3>
      {error && <h1 style={{ color: "red" }}>Unsuccessful Loging</h1>}
    </div>
  );
};

export default Login;
