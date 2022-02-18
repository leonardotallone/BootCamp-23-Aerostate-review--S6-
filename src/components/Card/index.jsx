import * as React from "react";
import { Card, Avatar } from "antd";

import Favorite from "./Favorite";

import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";

import s from "./style.module.scss";

function CardComponent({ flight, addToFavorite }) {
  const { origin, destination, departure, arrival, code, _id } = flight;
  return (
    <Card
      className={s.card}
      title={`Flight #${code}`}
      extra={<Favorite onClick={() => addToFavorite(_id)} />}
    >
      <Card.Meta
        className={s.entry}
        avatar={<Avatar className={s.icon} icon={<FaPlaneDeparture />} />}
        title={`Departure: ${origin.value}`}
        description={`${departure.day.toUpperCase()} - ${departure.hour} hs`}
      />
      <Card.Meta
        className={s.entry}
        avatar={<Avatar icon={<FaPlaneArrival />} />}
        title={`Arrival: ${destination.value}`}
        description={`${arrival.day.toUpperCase()} - ${arrival.hour} hs`}
      />
    </Card>
  );
}

CardComponent.Loading = function Loading() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <Card className={s.card} loading={loading}>
      <Card.Meta
        title="No entries found"
        description="Please look for another destination"
      />
    </Card>
  );
};

export default CardComponent;
