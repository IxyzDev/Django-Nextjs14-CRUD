"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const EventDetailsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [event, setEvent] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const fetchEvents = async () => {
    const response = await fetch(`/api/evento/${id}`);

    const data = await response.json();
    setEvent(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Función para manejar la edición del evento
  const handleEdit = () => {
    setEditMode(true);
  };

  // Función para manejar la eliminación del evento
  const handleDelete = () => {
    // Lógica para eliminar el evento
  };

  if (!event) return <div>Cargando...</div>; // Mostrar un mensaje o spinner mientras se cargan los datos

  return (
    <div className="event-details">
      <h2 className="event-details-title">{event.title}</h2>
      <p>{event.description}</p>
      <p>Fecha: {new Date(event.date).toLocaleString()}</p>
      <p>Ubicación: {event.location}</p>

      <div className="buttons">
        <button onClick={handleEdit}>Editar</button>
        <button onClick={handleDelete}>Eliminar</button>
      </div>

      {editMode && <EditEventForm event={event} />}
    </div>
  );
};

export default EventDetailsPage;
