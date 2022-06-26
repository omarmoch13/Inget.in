import React, { useState, useEffect } from "react";
import { BsPlusSquare } from "react-icons/bs";
import Modal from "./Modal";
import axios from "axios";
import "./Todo.css";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import Item from "antd/lib/list/Item";

function Todo() {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    todo: {
      items: [],
    },
    "in-progress": {
      items: [],
    },
    done: {
      items: [],
    },
  });
  const [data, setData] = useState({ deskripsi: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.deskripsi]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/todo";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = {
      ...state[source.droppableId].items[source.index],
    };

    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  const addItem = () => {
    setState((prev) => {
      return {
        ...prev,
        todo: {
          items: [
            {
              id: v4(),
              name: text,
              onchange: handleChange,
            },
            ...prev.todo.items,
          ],
        },
      };
    });

    setText("");
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Container">
      <div className="headbar">
        <div className="Text-headbar">
          <a0>
            <button onClick={() => setIsOpen(true)}>
              <BsPlusSquare
                color="rgba(255, 207, 51, 100%)"
                size="1.8em"
              />
            </button>
          </a0>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <form onSubmit={handleSubmit}>
              <div className="add-text">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="button">
                  <button onClick={addItem}>
                    <aBUTTON>Tambahkan</aBUTTON>
                  </button>
                </div>
              </div>
            </form>
          </Modal>

          <a1>Aktifitas</a1>
          <a2>Proses</a2>
          <a3>Selesai</a3>
        </div>
      </div>
      <div className="App">
        {/* <div className="add-text">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="button">
            <button onClick={addItem}>Tambahkan</button>
          </div>
        </div> */}

        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(state, (data, key) => {
            return (
              <div key={key} className={"column"}>
                <h3>{data.title}</h3>
                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={"droppable-col"}
                      >
                        {data.items.map((el, index) => {
                          return (
                            <Draggable
                              key={el.id}
                              index={index}
                              draggableId={el.id}
                            >
                              {(provided, snapshot) => {
                                console.log(snapshot);
                                return (
                                  <div
                                    className={`item ${
                                      snapshot.isDragging &&
                                      "dragging"
                                    }`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {el.name}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default Todo;
