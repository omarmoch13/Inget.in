import React from "react";

import "./Headbar.css";
import "./Todo";

const Headbar = () => {
  return (
    <div className="headbar">
      <div className="Text-headbar">
        <a1>Aktifitas</a1>
        <a2>Proses</a2>
        <a3>Selesai</a3>
      </div>
      {/* <div className="Todo">
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="button-style">
            <button onClick={addItem}>Tambahkan</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Headbar;
