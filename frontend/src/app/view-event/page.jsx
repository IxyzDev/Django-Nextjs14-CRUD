"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const EventDetailsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [event, setEvent] = useState(null);

  const fetchEvents = async () => {
    const response = await fetch(`/api/evento/${id}`);
    const data = await response.json();
    setEvent(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEdit = () => {
    router.push(`/update-event/?id=${id}`);
  };

  const handleDelete = () => {
    if (!confirm("¿Estás seguro de eliminar este evento?")) return;

    fetch(`/api/evento/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Evento eliminado");
        router.push("/");
      })
      .catch((error) => {
        alert("Ocurrió un error al eliminar el evento");
      });
  };

  if (!event)
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando...
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-700">{event.title}</h2>
            <div className="flex space-x-2">
              <button
                className="btn-fixed-width bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded text-sm" // Cambiado de text-xs a text-sm
                onClick={handleDelete}
              >
                Eliminar
              </button>
              <button
                className="btn-fixed-width bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-sm" // Cambiado de text-xs a text-sm
                onClick={handleEdit}
              >
                Editar
              </button>
            </div>
          </div>
          <p className="text-gray-700 text-base mt-2">{event.description}</p>
          <p className="text-gray-600">
            Fecha: {new Date(event.date).toLocaleString()}
          </p>
          <p className="text-gray-600">Ubicación: {event.location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
