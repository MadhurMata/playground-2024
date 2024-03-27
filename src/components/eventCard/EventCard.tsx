interface EventCardProps {
  event: {
    name: string;
  };
}

const EventCard = ({ event }: EventCardProps): JSX.Element => {
  return (
    <>
      <p>{event.name}</p>
    </>
  );
};

export default EventCard;
