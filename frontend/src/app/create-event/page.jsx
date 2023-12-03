"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreatePrompt = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Asegúrate de que la estructura de los datos coincida con lo que espera tu API.
      const response = await fetch("/api/evento/new", {
        method: "POST",
        body: JSON.stringify({
          title: event.title,
          description: event.description,
          date: event.date,
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
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
