import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const EventDetailsPage = () => {
  const [event, setEvent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const { eventId } = router.query; // Asumiendo que la ruta es algo como '/eventos/[eventId]'

  // Fetch para obtener los detalles del evento
  useEffect(() => {
    if (eventId) {
      fetch(`/api/eventos/${eventId}`)
        .then((response) => response.json())
        .then((data) => setEvent(data))
        .catch((error) =>
          console.error("Error al obtener los detalles del evento:", error)
        );
    }
  }, [eventId]);

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
