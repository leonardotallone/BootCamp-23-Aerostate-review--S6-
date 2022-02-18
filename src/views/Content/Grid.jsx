import * as React from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import Card from "../../components/Card";
import { addToFavorites } from "../../state/user";

import s from "./style.module.scss";

export default function Grid({ flights }) {
  const dispatch = useDispatch();

  const handleFavorites = (flight) => {
    dispatch(addToFavorites(flight)).then((data) => {
      if (data.error) message.error(`Failed: ${data.error.message}.`);
      else message.success(`Flight added to favorites`);
    });
  };

  // Si no hay vuelos muestro el loading
  if (!flights.length) {
    return (
      <section className={s.grid}>
        <Card.Loading />
      </section>
    );
  }

  // Si hay vuelos listo las tarjetas
  return (
    <section className={s.grid}>
      {flights.map((flight) => (
        <Card key={flight.id} flight={flight} addToFavorite={handleFavorites} />
      ))}
    </section>
  );
}
