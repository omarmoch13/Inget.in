import React from "react";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import { TextField } from "@material-ui/core";

const Profil = () => {
  return (
    <div className="wrapper-profil">
      <div className="container-profil">
        <div className="container-inside-judul">
          <div className="judul">
            <ajudul>PROFILE</ajudul>
          </div>
          <div className="profile-logo">
            <CgProfile color="lightgrey" size="10em" />
          </div>
          <div className="column-judul">
            <div className="column1">
              <a1>
                Nama :<TextField className="margin" />
              </a1>
              <a2>
                Umur :<TextField className="margin" />
              </a2>
            </div>
            <div className="column2">
              <a3>
                Email :<TextField className="margin" color="white" />
              </a3>
              <a4>
                Nomor Telfon :
                <TextField className="margin" />
              </a4>
            </div>
          </div>
          <div className="textfield">
            <TextField
              variant="filled"
              multiline
              className="field"
              label="ceritakan tentang diri kamu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profil;
