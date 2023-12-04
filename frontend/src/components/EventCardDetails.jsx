const CardDetails = ({ event, handleEdit, handleDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-gray-700">{event.title}</h2>
          <div className="flex space-x-2">
            <button
              className="btn-fixed-width bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded text-sm"
              onClick={handleDelete}
            >
              Eliminar
            </button>
            <button
              className="btn-fixed-width bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-sm"
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
  );
};

export default CardDetails;
