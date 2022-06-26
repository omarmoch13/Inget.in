import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import "./Profile.css";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profil = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState({});
  const params = useParams();

  const saveData = async () => {
    let body = {
      name: data.name,
      umur: data.umur,
      nomor: data.nomor,
      cerita: data.cerita,
    };
    const response = await axios.patch(
      `http://localhost:4000/api/profil/${params.id}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.reload();
    return response;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/profil/${params.id}`
        );
        await setData(response.data.data);
        if (response.data.data.cerita !== undefined)
          setText(response.data.data.cerita);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper-profil">
      <div className="container-profil">
        <div className="container-inside-judul">
          <div className="judul">
            <ajudul>PROFILE</ajudul>
          </div>
          <div className="button-logout">
            <Link to={"/Login"}>Keluar</Link>
          </div>

          <div className="profile-logo">
            <Avatar size={150} icon="user" />
            <button onClick={saveData}>Save</button>
          </div>
          <div className="column-judul">
            <div className="column1">
              <a1>
                Nama :
                <TextField
                  className="margin"
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }
                />
              </a1>
              <a2>
                Umur :
                <TextField
                  className="margin"
                  value={data.umur}
                  onChange={(e) =>
                    setData({ ...data, umur: e.target.value })
                  }
                />
              </a2>
            </div>
            <div className="column2">
              <a3>
                Email :
                <TextField
                  className="margin"
                  color="white"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                  disabled={true}
                />
              </a3>
              <a4>
                Nomor Telfon :
                <TextField
                  className="margin"
                  value={data.nomor}
                  onChange={(e) =>
                    setData({ ...data, nomor: e.target.value })
                  }
                />
              </a4>
            </div>
          </div>
          <div className="textfield">
            <TextField
              variant="filled"
              multiline
              className="field"
              value={data.cerita}
              label={`ceritakan tentang diri kamu ${text.length}/256`}
              onChange={(e) => {
                setData({ ...data, cerita: e.target.value });
                setText(e.target.value);
              }}
              inputProps={{ maxLength: 256 }}
            />
          </div>
          <div className="save-button"></div>
        </div>
      </div>
    </div>
  );
};
export default Profil;
