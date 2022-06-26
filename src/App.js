import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./calendar/CalendarHeader";
import Sidebar from "./calendar/Sidebar";
import Month from "./calendar/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./calendar/EventModal";
import Jadwal from "./Jadwal/Jadwal";
import Todo from "./todo/Todo";
import Splash from "./splash/Splash";
import { store, persistor } from "./catatan/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./catatan/Main";
import Profil from "./Profil/Profil";
import Login from "./login/Login";
import Register from "./register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const [userId, setUserId] = useState("");
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("token");

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    setUserId(localStorage.getItem("id"));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      {loading === true ? (
        <div className="HeaderSplash">
          <Splash setLoading={setLoading} loading={loading} />
        </div>
      ) : (
        <div style={{ display: "flex", height: "100%" }}>
          <Sidebar userId={userId} />
          <Router>
            <Routes>
              {user && (
                <Route
                  exact
                  path="/"
                  element={
                    <>
                      {" "}
                      <div className=" h-screen flex flex-col flex-1">
                        <CalendarHeader />
                        <Month month={currenMonth} />
                      </div>
                    </>
                  }
                />
              )}

              <Route
                exact
                path="/Login"
                element={<Login setUserId={setUserId} />}
              />

              <Route exact path="/Register" element={<Register />} />
              <Route
                exact
                path="/"
                element={<Navigate replace to="/Login" />}
              />
              <Route
                exact
                path="/Todo"
                element={
                  <>
                    {" "}
                    <div className=" h-screen flex flex-col flex-1 bg-yellow-300 ">
                      <Todo />
                    </div>
                  </>
                }
              />
              <Route
                exact
                path="/Catatan"
                element={
                  <>
                    {" "}
                    <Provider store={store}>
                      <PersistGate
                        loading={null}
                        persistor={persistor}
                      >
                        <Main />
                      </PersistGate>
                    </Provider>
                  </>
                }
              />
              <Route exact path="/Jadwal" element={<Jadwal />} />
              <Route exact path="/Profil/:id" element={<Profil />} />
            </Routes>
          </Router>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
