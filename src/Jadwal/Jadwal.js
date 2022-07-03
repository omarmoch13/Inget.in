import "./Jadwal.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Jadwal = () => {
  const [text, setText] = useState("");
  const [matpel, setMatpel] = useState([]);
  const [data, setData] = useState({
    nama: " ",
    kelas: " ",
    matpel: [],
  });
  const params = useParams();

  const saveData = async () => {
    let body = {
      nama: data.nama,
      kelas: data.kelas,
      matpel: data.matpel,
    };
    console.log(body);
    try {
      const response = await axios.post(
        `http://localhost:4000/api/jadwal/${localStorage.getItem(
          "id"
        )}`,
        body
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/jadwal/${localStorage.getItem(
            "id"
          )}`
        );
        setData(response.data);
        setMatpel(response.data.matpel);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-Jadwal">
      <div className="container-wrapper">
        <div className="container-judul">
          <ajudul>Jadwal Sekolah</ajudul>
        </div>
        <div className="container-nama">
          <anama>
            Nama :
            <input
              className="fieldarea"
              value={data.nama}
              onChange={(e) =>
                setData({ ...data, nama: e.target.value })
              }
            />
          </anama>
          <akelas>
            Kelas :
            <input
              className="fieldarea"
              value={data.kelas}
              onChange={(e) =>
                setData({ ...data, kelas: e.target.value })
              }
            />
          </akelas>
        </div>

        <tr>
          <th>Waktu</th>
          <th>Senin</th>
          <th>Selasa</th>
          <th>Rabu</th>
          <th>Kamis</th>
          <th>Jumat</th>
          <th>Sabtu</th>
        </tr>
        {matpel == undefined ? null : (
          <>
            {matpel.map((datas, idx) => {
              return (
                <tr key={idx}>
                  <td
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      let obj = data.matpel;
                      obj[idx] = {
                        ...obj[idx],
                        [e.currentTarget.className]:
                          e.currentTarget.textContent,
                      };
                      setData({ ...data, matpel: obj });
                    }}
                    className="waktu"
                  >
                    {datas.waktu}
                  </td>
                  <td
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      let obj = data.matpel;
                      obj[idx] = {
                        ...obj[idx],
                        [e.currentTarget.className]:
                          e.currentTarget.textContent,
                      };
                      setData({ ...data, matpel: obj });
                    }}
                    className="senin"
                  >
                    {datas.senin}
                  </td>
                  <td
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      let obj = data.matpel;
                      obj[idx] = {
                        ...obj[idx],
                        [e.currentTarget.className]:
                          e.currentTarget.textContent,
                      };
                      setData({ ...data, matpel: obj });
                    }}
                    className="selasa"
                  >
                    {datas.selasa}
                  </td>
                  <td
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      let obj = data.matpel;
                      obj[idx] = {
                        ...obj[idx],
                        [e.currentTarget.className]:
                          e.currentTarget.textContent,
                      };
                      setData({ ...data, matpel: obj });
                    }}
                    className="rabu"
                  >
                    {datas.rabu}
                  </td>
                  <td
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      let obj = data.matpel;
                      obj[idx] = {
                        ...obj[idx],
                        [e.currentTarget.className]:
                          e.currentTarget.textContent,
                      };
                      setData({ ...data, matpel: obj });
                    }}
                    className="kamis"
                  >
                    {datas.kamis}
                  </td>
                  <td
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      let obj = data.matpel;
                      obj[idx] = {
                        ...obj[idx],
                        [e.currentTarget.className]:
                          e.currentTarget.textContent,
                      };
                      setData({ ...data, matpel: obj });
                    }}
                    className="jumat"
                  >
                    {datas.jumat}
                  </td>
                  <td
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      let obj = data.matpel;
                      obj[idx] = {
                        ...obj[idx],
                        [e.currentTarget.className]:
                          e.currentTarget.textContent,
                      };
                      setData({ ...data, matpel: obj });
                    }}
                    className="sabtu"
                  >
                    {datas.sabtu}
                  </td>
                </tr>
              );
            })}
          </>
        )}
        <button
          onClick={() => {
            setMatpel([
              ...matpel,
              {
                waktu: "",
                senin: "",
                selasa: "",
                rabu: "",
                kamis: "",
                jumat: "",
                sabtu: "",
              },
            ]);
            setData({ ...data, matpel: matpel });
          }}
          className="buttonjad"
          type="submit"
        >
          Tambahkan
        </button>
        <button
          onClick={saveData}
          className="buttonjad"
          type="submit"
        >
          Simpan
        </button>
      </div>
    </div>
  );
};
export default Jadwal;
