import * as React from "react";
import { useDispatch } from "react-redux";

import Header from "../Header";
import Content from "../Content";

import { getAirportsRequest } from "../../state/airports";
import { getFlightsRequest } from "../../state/flights";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFlightsRequest());
    dispatch(getAirportsRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Content />
    </>
  );
}
