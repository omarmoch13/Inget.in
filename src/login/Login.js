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
      const url = "https://inget.herokuapp.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      window.location = "/Kalender";
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
          <alogin2>Inget.in</alogin2>
        </div>
        <div className="container-wrapper-login">
          <div className="text-login2">
            <alogin>LOGIN</alogin>
          </div>
          <div className="textfield-login">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={data.username}
                required
                placeholder="username"
                type="text"
                name="username"
                className="input-password"
              />

              <br></br>
              <input
                placeholder="Password"
                type="password"
                required
                onChange={handleChange}
                value={data.password}
                name="password"
                className="input-password
              "
              />
              {error && <div className="error_msg">{error}</div>}
              <button className="button-masuk" type="submit">
                Masuk
              </button>
              <a href="/Register" className="button-buat">
                Buat Akun
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
