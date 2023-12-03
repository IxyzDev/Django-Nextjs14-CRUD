"use client";

import { usePathname, useRouter } from "next/navigation";

const EventCard = ({ event, handleEdit, handleDelete, handleDetails }) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="event-card" onClick={handleDetails}>
      <h2 className="event-card-title">{event.title}</h2>
      <p>{event.description}</p>
      <p>Fecha: {new Date(event.date).toLocaleString()}</p>
      <p>Ubicación: {event.location}</p>
      <button onClick={handleDelete}>Eliminar</button>
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
};
export default EventCard;
