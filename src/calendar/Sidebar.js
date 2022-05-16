import React, { useState } from "react";
import { Link, useHref } from "react-router-dom";
import Todo from "../todo/Todo";

export default function Sidebar() {
  return (
    <>
      <aside className="top-0 left-0 bg-blue-500 w-[35vw] h-screen p-6">
        <div>
          <a href="/Todo">Todo</a>
        </div>
        <div>
          <a>Calendar</a>
        </div>
        <div>
          <a>Cattaan</a>
        </div>
        <div>
          <a>Jadwal</a>
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
