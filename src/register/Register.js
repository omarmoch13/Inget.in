import React from "react";

import "./Register.css";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const history = useNavigate();
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
            <form action="/Login" method="POST">
              <input
                placeholder="Nama"
                class="input-box"
                type="text"
                name="identifier"
                className="input-nama"
              />
              <br></br>
              <input
                placeholder="Email"
                class="input-box"
                type="text"
                name="identifier"
                className="input-Email"
              />
              <br></br>
              <input
                placeholder="Username"
                class="input-box"
                type="text"
                name="identifier"
                className="input-username"
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
              className="button-regis"
              onClick={() => {
                history("/");
              }}
            >
              Buat Akun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
