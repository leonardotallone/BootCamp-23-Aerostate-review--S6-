import * as React from "react";

import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import s from "./style.module.scss";

function Item({ flight, removeFromFavorite }) {
  const { _id, origin, destination } = flight;
  return (
    <div key={_id} className={s.favorite}>
      <span>
        <FaStar />
        <p>
          {origin.value} &gt; {destination.value}
        </p>
      </span>
      <FaTrash
        style={{ cursor: "pointer" }}
        onClick={() => removeFromFavorite(_id)}
      />
    </div>
  );
}

Item.Empty = () => (
  <div className={s.favorite}>
    <p>Add flights to favorites to see them here!</p>
  </div>
);

export default Item;
