import { useState } from "react";
import BookingDetails from "./BookingDetails";
import { useHistory } from "react-router-dom";

const BookingDetailsContainer = (props) => {
  const history = useHistory();
  let events = JSON.parse(localStorage.getItem("Events"));
  let loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  const { details } = props.location.state;
  const { availableTickets } = details;
  const [count, setCount] = useState(0);
  const [remainingTickets, setRemainingTickets] = useState(availableTickets);

  const addTicket = () => {
    setCount(count + 1);
    setRemainingTickets(remainingTickets - 1);
    changeEventsLocalStorageData("Add");
  };

  const removeTicket = () => {
    setCount(count - 1);
    setRemainingTickets(remainingTickets + 1);
    changeEventsLocalStorageData("Remove");
  };

  const changeEventsLocalStorageData = (operation) => {
    const index = events.findIndex((item) => item.id === details.id);
    if (index !== -1) {
      events[index].availableTickets =
        operation === "Add" ? remainingTickets - 1 : remainingTickets + 1;
    }
    localStorage.setItem("Events", JSON.stringify(events));
  };

  const bookTickets = () => {
    if (Object.keys(loggedInUser).length > 0) {
    } else {
      history.push("/registration");
    }
  };

  return (
    <BookingDetails
      details={details}
      count={count}
      remainingTickets={remainingTickets}
      addTicket={addTicket}
      removeTicket={removeTicket}
      bookTickets={bookTickets}
    />
  );
};

export default BookingDetailsContainer;
