import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { ImBook } from "react-icons/im";
import "./Sidebar.css";

export default function Sidebar({ userId }) {
  return (
    <>
      <aside
        className="bg-blue-500 w-[35vw] h-auto p-2"
        style={{
          minheight: "100%",
          display: "block",
          zIndex: "1",
        }}
      >
        <div className="profil-logo">
          <a href={`/Profil/${userId}`}>
            <CgProfile color="white" size="2.1em" />
          </a>
        </div>
        <div className="logos">
          <div className="todo-logo">
            <a href="/Todo">
              <BsCheckLg color="white" style={{ fontSize: "2em" }} />
            </a>
          </div>
          <div className="calendar-logo">
            <a href="/">
              <BsCalendarDate
                color="white"
                style={{ fontSize: "2em" }}
              />
            </a>
          </div>
          <div className="catatan-logo">
            <a href="/Catatan">
              <ImBook color="white" style={{ fontSize: "2em" }} />
            </a>
          </div>
          <div className="jadwal-logo">
            <a href="/Jadwal">
              <AiOutlineSchedule color="white" size="2.2em" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

// function Sidebar(){
//   return (
//     <>
//     <div className="sidebar">
//       <Link to='#' className="bars">

//       </Link>
//     </div>
//     </>
//   )
// }
