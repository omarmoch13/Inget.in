import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import Modal from "../todo/Modal";

export default function DiaryItem({ item, showModal, deleteItem }) {
  return (
    <div className="diary-row">
      <span
        onClick={() => showModal(item)}
        style={{ wordBreak: "break-word" }}
      >
        {item.title}
      </span>
      <span className="date">{item.date}</span>
      <div>
        <BsFillTrashFill
          onClick={() => deleteItem(item.id)}
          className="delete"
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
}
