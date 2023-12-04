"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreateEvent = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const combinedDateTime = (fecha, hora) => {
    let fechaHora = `${fecha}T${hora}:00Z`;
    return fechaHora;
  };

  const createEvent = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let combined = combinedDateTime(event.date, event.time);

      const dataToSend = {
        title: event.title,
        description: event.description,
        date: combined,
        location: event.location,
      };

      const response = await fetch("/api/evento/new", {
        method: "POST",
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
    <Form
      type="Crear"
      event={event}
      setEvent={setEvent}
      submitting={submitting}
      handleSubmit={createEvent}
    />
  );
};

export default CreateEvent;
