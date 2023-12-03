"use client";

import { useState, useEffect } from "react";
import axios from "axios";

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
      {/* <ul>
        {allEventos.map((evento) => (
          <li key={evento.id}>
            <h2>{evento.title}</h2>
            <p>{evento.description}</p>
            <p>Fecha: {evento.date}</p>
            <p>Ubicación: {evento.location}</p>
          </li>
        ))}
      </ul> */}
      <EventCardList data={allEventos} />
    </div>
  );
};

export default Feed;
