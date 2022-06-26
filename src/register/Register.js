import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",

    nomor: "-",
    umur: "-",
    cerita: "-",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const url = "http://localhost:4000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/Login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error.response);
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
            <alogin>REGISTER</alogin>
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
                className="input-Email"
              />
              <br></br>
              <input
                onChange={handleChange}
                value={data.name}
                required
                placeholder="name"
                type="text"
                name="name"
                className="input-Email"
              />
              <br></br>
              <input
                onChange={handleChange}
                value={data.email}
                required
                placeholder="Email"
                type="text"
                name="email"
                className="input-username"
              />

              <br></br>
              <input
                onChange={handleChange}
                value={data.password}
                required
                placeholder="Password"
                type="text"
                name="password"
                className="input-password"
              />
              {error && <div className="error_msg">{error}</div>}
              <div className="button-login">
                <button className="button-regis">Buat Akun</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
