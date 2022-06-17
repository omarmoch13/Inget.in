import { TextField } from "@mui/material";
import React from "react";
import "./Login.css";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const history = useNavigate();
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
            <form action="/Login" method="POST">
              <br></br>
              <input
                placeholder="Username"
                class="input-box"
                type="text"
                name="identifier"
                className="input-login"
              />

              <br></br>
              <input
                placeholder="Password"
                class="input-box"
                type="text"
                name="identifier"
                className="input-password"
              />
            </form>
          </div>
          <div className="button-login">
            <button
              className="button-masuk"
              onClick={() => {
                history("/Kalender");
              }}
            >
              Masuk
            </button>
            <button
              className="button-buat"
              onClick={() => {
                history("/Register");
              }}
            >
              buat akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
