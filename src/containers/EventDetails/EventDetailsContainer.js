import EventDetails from "./EventDetails";
import { useHistory } from "react-router-dom";

const EventDetailsContainer = (props) => {
  const history = useHistory();
  const { details } = props.location.state;

  const bookEvent = () => {
    history.push("/booking_details", { details });
  };

  return <EventDetails details={details} bookEvent={bookEvent} />;
};

export default EventDetailsContainer;
