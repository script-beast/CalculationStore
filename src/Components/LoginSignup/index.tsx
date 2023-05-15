// import React from "react";
import "./Styles.css";
import { LoginSignupProps } from "../../Interface";

const Index = (props: LoginSignupProps) => {
  return (
    <div className="loginpage">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              value={props.username}
              onChange={props.handleName}
              required
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              value={props.password}
              onChange={props.handlePassword}
              required
            />
            <button onClick={props.handleSignup}>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              name="username"
              placeholder="User name"
              value={props.username}
              required
              onChange={props.handleName}
            />
            <input
              type="password"
              name="pswd"
              value={props.password}
              onChange={props.handlePassword}
              placeholder="Password"
              required
            />
            <button onClick={props.handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
