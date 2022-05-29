import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import "./Splash.css";

function Splash({ setLoading, loading }) {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className="container">
        <div className="container-text"></div>
        <h1 className="Text-splash">Inget.in</h1>

        <div className="splash">
          {!done ? (
            <ReactLoading
              type={"spin"}
              color={"#ECECEC"}
              height={50}
              width={50}
            />
          ) : (
            []
          )}
        </div>
      </div>

      {/* <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </>
  );
}

export default Splash;
