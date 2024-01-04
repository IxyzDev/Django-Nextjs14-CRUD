"use client";

import { useState, useEffect } from "react";

import EventCardList from "./EventCardList";

const Feed = () => {
  const [allEventos, setAllEventos] = useState([]);

  const fetchEvents = async () => {
    const response = await fetch("/api/evento");

    const data = await response.json();
    setAllEventos(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <EventCardList data={allEventos} />
    </div>
  );
};

export default Feed;
