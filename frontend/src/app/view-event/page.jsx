"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import CardDetails from "@/components/EventCardDetails";

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

  const handleBack = () => {
    router.back();
  };

  if (!event)
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando...
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retroceder
        </button>
      </div>
      <CardDetails
        event={event}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EventDetailsPage;
