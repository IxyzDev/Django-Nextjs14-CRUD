const Form = ({ type, event, setEvent, submitting, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  // Función para manejar los cambios en los inputs de fecha y hora
  const handleDateTimeChange = (fieldName, value) => {
    // Si el campo es "date", realiza la validación de fecha
    if (fieldName === "date") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Formato esperado: YYYY-MM-DD

      if (dateRegex.test(value)) {
        // La fecha ingresada es válida, actualiza el estado directamente
        setEvent({
          ...event,
          [fieldName]: value,
          dateTime: `${value}T${event.time}.000Z`, // Actualiza la fecha en dateTime
        });
      } else {
        // La fecha ingresada no es válida, muestra un mensaje de error o realiza alguna acción
        console.error("Fecha no válida. Utilice el formato YYYY-MM-DD.");
      }
    } else if (fieldName === "time") {
      // Si el campo es "time", actualiza el estado directamente
      setEvent({
        ...event,
        [fieldName]: value,
        dateTime: `${event.date}T${value}.000Z`, // Actualiza la hora en dateTime
      });
    } else {
      // Para otros campos que no sean fecha o hora, actualiza el estado directamente
      setEvent({ ...event, [fieldName]: value });
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto my-8 p-6 rounded shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Título:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            className="resize-none h-32 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        {/* Fecha */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Fecha:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={event.date}
            onChange={(e) => handleDateTimeChange("date", e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Hora */}
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Hora:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={event.time}
            onChange={(e) => handleDateTimeChange("time", e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Ubicación:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
