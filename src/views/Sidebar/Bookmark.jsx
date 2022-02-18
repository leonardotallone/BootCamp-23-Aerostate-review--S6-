import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import Item from "../../components/Item";
import { removeFromFavorites } from "../../state/user";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.user);

  const removeFromFavorite = (flight) => {
    dispatch(removeFromFavorites(flight)).then((data) => {
      if (data.error) message.error(`Failed: ${data.error.message}.`);
      else message.success(`Flight removed from favorites`);
    });
  };

  if (!favorites || !favorites.length) return <Item.Empty />;

  return (
    <>
      {favorites.map((fav) => (
        <Item
          key={fav.id}
          flight={fav}
          removeFromFavorite={removeFromFavorite}
        />
      ))}
    </>
  );
}
