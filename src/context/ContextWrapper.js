import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import axios from "axios";

let types;
function savedEventsReducer(state, { type, payload }) {
  types = type;
  switch (type) {
    case "api":
      state = state.concat(payload);
      return state;
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

async function initEvents() {
  // const storageEvents = localStorage.getItem("savedEvents");
  // const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  let parsedEvents = [];
  // const fetchData = async () => {
  //   const url = `https://inget.herokuapp.com/api/kalender/${localStorage.getItem(
  //     "id"
  //   )}`;
  //   const response = await axios.get(url);
  //   parsedEvents = response.data.dataKalender;
  // };
  // fetchData();
  const url = `https://inget.herokuapp.com/api/kalender/${localStorage.getItem(
    "id"
  )}`;
  const response = await axios.get(url);
  parsedEvents = response.data.dataKalender;
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://inget.herokuapp.com/api/kalender/${localStorage.getItem(
        "id"
      )}`;
      const response = await axios.get(url);
      if (response.data.dataKalender !== undefined) {
        dispatchCalEvent({
          type: "api",
          payload: response.data.dataKalender,
        });
      }
    };
    fetchData();
  }, []);
  console.log(savedEvents);
  const filteredEvents = useMemo(() => {
    if (savedEvents.length !== 0) {
      return savedEvents.filter((evt) =>
        labels
          .filter((lbl) => lbl.checked)
          .map((lbl) => lbl.label)
          .includes(evt.label)
      );
    }
    return [];
  }, [savedEvents, labels]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://inget.herokuapp.com/api/kalender/${localStorage.getItem(
        "id"
      )}`;
      let body = { dataKalender: savedEvents };
      await axios.post(url, body);
    };
    if (types == "push" || types == "update" || types == "delete")
      fetchData();
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map(
        (label) => {
          const currentLabel = prevLabels.find(
            (lbl) => lbl.label === label
          );
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
