import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./calendar/CalendarHeader";
import Sidebar from "./calendar/Sidebar";
import Month from "./calendar/Month";
import GlobalContext from "./context/GlobalContext";
import { BrowserRouter, Link } from "react-router-dom";
import EventModal from "./calendar/EventModal";
import Todo from "./todo/Todo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Switch } from "@material-ui/core";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="flex flex-1  ">
        <Sidebar />
        <div className=" h-screen flex flex-col flex-1">
          <CalendarHeader />
          <Month month={currenMonth} />
        </div>

        <Router>
          <Routes>
            <Route exact path="/Todo" element={Todo} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
