"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/components/Form";

const CreateEvent = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");

  const [submitting, setIsSubmitting] = useState(false);
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  useEffect(() => {
    const getEventDetails = async () => {
      const response = await fetch(`/api/evento/${eventId}`);
      const data = await response.json();

      if (data.date) {
        const { formattedDate, formattedTime } = handleDateTime(data.date);

        setEvent({
          title: data.title,
          description: data.description,
          date: formattedDate,
          time: formattedTime,
          location: data.location,
        });
      }
    };

    if (eventId) getEventDetails();
  }, [eventId]);

  const combinedDateTime = (fecha, hora) => {
    let fechaHora = `${fecha}T${hora}:00Z`;
    return fechaHora;
  };

  const handleDateTime = (isoDateTime) => {
    const date = new Date(isoDateTime);

    // Extrae la fecha en formato yyyy-MM-dd
    const formattedDate = date.toISOString().split("T")[0];

    // Extrae la hora en formato HH:mm
    const formattedTime = date.toISOString().split("T")[1].substring(0, 5);

    return { formattedDate, formattedTime };
  };

  const handleBack = () => {
    router.back();
  };

  const createEvent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!eventId) return alert("El evento no existe!");

    try {
      let combined = combinedDateTime(event.date, event.time);

      const dataToSend = {
        title: event.title,
        description: event.description,
        date: combined,
        location: event.location,
      };

      const response = await fetch(`/api/evento/${eventId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: event.title,
          description: event.description,
          date: combined,
          location: event.location,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="solid-bg">
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retroceder
        </button>
      </div>
      <Form
        type="Editar"
        event={event}
        setEvent={setEvent}
        submitting={submitting}
        handleSubmit={createEvent}
      />
    </div>
  );
};

export default CreateEvent;
