import EventListing from "./EventListing";

const EventListingContainer = () => {
  const events = JSON.parse(localStorage.getItem("Events"));

  return <EventListing events={events} />;
};

export default EventListingContainer;
