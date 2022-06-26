import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Login.css";

export default function Login({ setUserId }) {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="container-login">
      <div className="container-wrap-login">
        <div className="text-login">
          <alogin>Inget.in</alogin>
        </div>
        <div className="container-wrapper-login">
          <div className="text-login2">
            <alogin>LOGIN</alogin>
          </div>
          <div className="textfield-login">
            <form onSubmit={handleSubmit}>
              <br></br>
              <input
                placeholder="Username"
                type="username"
                onChange={handleChange}
                value={data.username}
                name="username"
                required
                className="input-login"
              />

              <br></br>
              <input
                placeholder="Password"
                type="password"
                required
                onChange={handleChange}
                value={data.password}
                name="password"
                className="input-password"
              />
              {error && <div className="error_msg">{error}</div>}
              <button className="button-masuk" type="submit">
                Masuk
              </button>
            </form>
          </div>
          <a href="/Register">Buat Akun</a>
        </div>
      </div>
    </div>
  );
}
