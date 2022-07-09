import React, { useState, useEffect } from "react";

import "./Profile.css";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import user from "../assets/user.png";
import Avatar from "react-avatar-edit";
import ViewTypes from "scheduler-react/lib/ViewTypes";

const Profil = ({ setLoading }) => {
  const [text, setText] = useState("");
  const [data, setData] = useState({});
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [types, setTypes] = useState("");
  const [preview, setPreview] = useState(null);
  const params = useParams();

  const saveData = async () => {
    let body = {
      name: data.name,
      umur: data.umur,
      nomor: data.nomor,
      cerita: data.cerita,
      foto: preview == null ? imgPreview : preview,
      type: types,
    };
    const response = await axios.patch(
      `https://inget.herokuapp.com/api/profil/${params.id}`,
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
          `https://inget.herokuapp.com/api/profil/${params.id}`
        );
        await setData(response.data.data);
        setImgPreview(response.data.data.foto);
        if (response.data.data.cerita !== undefined)
          setText(response.data.data.cerita);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      setTypes(selected.type);
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
        console.log(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };
  const [src, setSrc] = useState(null);

  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 716800) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onFileLoad = (view) => {
    console.log(view);
  };

  return (
    <div className="wrapper-profil">
      <div className="container-profil">
        <div className="container-inside-judul">
          <div className="judul">
            <ajudul>PROFILE</ajudul>
          </div>
          <div className="button-logout">
            <Link to={"/"}>
              <akeluar>Keluar</akeluar>
            </Link>
          </div>

          {error && <p className="errorMsg">file tidak disuport</p>}
          <div
            className="imgPreview"
            style={{
              background: imgPreview
                ? `url("${imgPreview}") no-repeat center/cover`
                : "#5463ff",
            }}
          >
            {!imgPreview && (
              <>
                {/* <p>masukan gambar</p> */}
                {/* <label
                  htmlFor="fileUpload"
                  className="customFileUpload"
                >
                  <img
                    src={user}
                    className="imageuser"
                    onChange={(e) =>
                      setData({ ...data, foto: e.target.value })
                    }
                  />
                </label> */}
                <Avatar
                  width={200}
                  height={150}
                  src={src}
                  onCrop={onCrop}
                  onClose={onClose}
                  onBeforeFileLoad={onBeforeFileLoad}
                  label="Masukan Gambar"
                  onFileLoad={onFileLoad}
                  className="imageuser"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setData({ ...data, foto: e.target.value });
                  }}
                />
                <input
                  type="file"
                  id="fileUpload"
                  onChange={handleImageChange}
                />
                {/* <span>(jpg, jpeg, png)</span> */}
              </>
            )}
          </div>
          <button className="profile-logo-button" onClick={saveData}>
            Save
          </button>
          {imgPreview && (
            <button
              className="buttonhapus"
              onClick={() => setImgPreview(null)}
            >
              remove image
            </button>
          )}
          <div className="column-judul">
            <div className="column1">
              <a1>
                Nama :
                <input
                  className="margin"
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }
                />
              </a1>
              <a2>
                Umur :
                <input
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
                <input
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
                <input
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
              placeholder={`ceritakan tentang diri kamu ${text.length}/256`}
              onChange={(e) => {
                setData({ ...data, cerita: e.target.value });
                setText(e.target.value);
              }}
              inputProps={{ maxLength: 256 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profil;
