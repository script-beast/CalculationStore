import React from "react";
import { useNavigate } from "react-router-dom";

import LoginSignup from "../Components/LoginSignup";

import BaseURL from "../BaseURL";

const Login = () => {
  const navigate = useNavigate();
  const [username, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (username === "") return;
    if (password === "") return;

    const response = await fetch(BaseURL + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.message) {
      alert(data.message);
      return;
    }
    localStorage.setItem("name", data.username);
    localStorage.setItem("id", data.id);
    navigate("/");
  };

  const handleSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (username === "") return;
    if (password === "") return;

    const response = await fetch(BaseURL + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    // console.log(data);
    if (data.message) {
      alert(data.message);
      return;
    }
    localStorage.setItem("name", data.username);
    localStorage.setItem("id", data.id);
    navigate("/");
  };

  return (
    <LoginSignup
      username={username}
      password={password}
      handleName={handleName}
      handlePassword={handlePassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
    />
  );
};

export default Login;
