"use client";
import { usePathname, useRouter } from "next/navigation";

const EventCard = ({ event }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleDetails = () => {
    router.push(`/view-event/?id=${event.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={handleDetails}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-700">{event.title}</h2>
        <p className="text-gray-700 text-base">{event.description}</p>
        <p className="text-gray-600">
          Fecha: {new Date(event.date).toLocaleString()}
        </p>
        <p className="text-gray-600">Ubicación: {event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
