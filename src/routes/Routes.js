import EventDetailsContainer from "../containers/EventDetails/EventDetailsContainer";
import EventListingContainer from "../containers/EventsListing/EventListingContainer";
import BookingDetailsContainer from "../containers/BookingDetails/BookingDetailsContainer";
import RegistrationContainer from "../containers/Registration/RegistrationContainer";

const Routes = () => {
  const routes = [
    {
      path: "/",
      component: EventListingContainer,
    },
    {
      path: "/details",
      component: EventDetailsContainer,
    },
    {
      path: "/booking_details",
      component: BookingDetailsContainer,
    },
    {
      path: "/registration",
      component: RegistrationContainer,
    },
  ];

  return routes;
};

export default Routes;
