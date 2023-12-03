import EventCard from "./EventCard";

const EventCardList = ({ data }) => {
  return (
    <div className="flex flex-col space-y-4">
      {data.map((evento) => (
        <EventCard key={evento.id} event={evento} />
      ))}
    </div>
  );
};

export default EventCardList;
