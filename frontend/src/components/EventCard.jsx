"use client";

import { usePathname, useRouter } from "next/navigation";

const EventCard = ({ event }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleDetails = () => {
    // Redirige a la página de detalles del evento, por ejemplo, /eventos/{id}
    router.push(`/view-event/?id=${event.id}`);
  };

  return (
    <div className="event-card" onClick={handleDetails}>
      <h2 className="event-card-title">{event.title}</h2>
      <p>{event.description}</p>
      <p>Fecha: {new Date(event.date).toLocaleString()}</p>
      <p>Ubicación: {event.location}</p>
    </div>
  );
};

export default EventCard;
