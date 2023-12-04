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

  const handleBack = () => {
    router.back();
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
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <button
          onClick={handleBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retroceder
        </button>
      </div>
      <Form
        type="Crear"
        event={event}
        setEvent={setEvent}
        submitting={submitting}
        handleSubmit={createEvent}
      />
    </div>
  );
};

export default CreateEvent;
