import React, { useState } from "react";
import "./Todo.css";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";

const item = {
  id: v4(),
  name: "Clean the house",
};

const item2 = {
  id: v4(),
  name: "Wash the car",
};

function Mob() {
  const [text, setText] = useState("");
  const [state, setState] = useState({
    todo: {
      title: "Yang harus dilakukan",
      items: [item, item2],
    },
    "in-progress": {
      title: "Dalam Proses",
      items: [],
    },
    done: {
      title: "Selesai",
      items: [],
    },
  });

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

    const itemCopy = {
      ...state[source.droppableId].items[source.index],
    };

    setState((prev) => {
      prev = { ...prev };

      prev[source.droppableId].items.splice(source.index, 1);

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
          title: "Todo",
          items: [
            {
              id: v4(),
              name: text,
            },
            ...prev.todo.items,
          ],
        },
      };
    });

    setText("");
  };

  return (
    <div className="Mob">
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
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
                                    snapshot.isDragging && "dragging"
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
  );
}

export default Mob;
