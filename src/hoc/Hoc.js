const Hoc = () => {
  const events = [
    {
      id: 1,
      title: "Event 1",
      description: "This is the description for Event 1",
      image: "https://source.unsplash.com/random/200x200?sig=1",
      dateTime: "Mon 1 May 2024, 1:00 PM",
      venue: "Mumbai",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 2,
      title: "Event 2",
      description: "This is the description for Event 2",
      image: "https://source.unsplash.com/random/200x200?sig=2",
      dateTime: "Tue 2 May 2024, 1:00 PM",
      venue: "Delhi",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 3,
      title: "Event 3",
      description: "This is the description for Event 3",
      image: "https://source.unsplash.com/random/200x200?sig=3",
      dateTime: "Wed 3 May 2024, 1:00 PM",
      venue: "Surat",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 4,
      title: "Event 4",
      description: "This is the description for Event 4",
      image: "https://source.unsplash.com/random/200x200?sig=4",
      dateTime: "Thu 4 May 2024, 1:00 PM",
      venue: "Ahemdabad",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 5,
      title: "Event 5",
      description: "This is the description for Event 5",
      image: "https://source.unsplash.com/random/200x200?sig=5",
      dateTime: "Fri 5 May 2024, 1:00 PM",
      venue: "Daman",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 6,
      title: "Event 6",
      description: "This is the description for Event 6",
      image: "https://source.unsplash.com/random/200x200?sig=6",
      dateTime: "Sat 6 May 2024, 1:00 PM",
      venue: "Rajsthan",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 7,
      title: "Event 7",
      description: "This is the description for Event 7",
      image: "https://source.unsplash.com/random/200x200?sig=7",
      dateTime: "Sun 7 May 2024, 1:00 PM",
      venue: "Goa",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 8,
      title: "Event 8",
      description: "This is the description for Event 8",
      image: "https://source.unsplash.com/random/200x200?sig=8",
      dateTime: "Mon 8 May 2024, 1:00 PM",
      venue: "Diu",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 9,
      title: "Event 9",
      description: "This is the description for Event 9",
      image: "https://source.unsplash.com/random/200x200?sig=9",
      dateTime: "Tue 9 May 2024, 1:00 PM",
      venue: "Pune",
      price: 100,
      availableTickets: 3,
    },
    {
      id: 10,
      title: "Event 10",
      description: "This is the description for Event 10",
      image: "https://source.unsplash.com/random/200x200?sig=10",
      dateTime: "Wed 10 May 2024, 1:00 PM",
      venue: "Banglore",
      price: 100,
      availableTickets: 3,
    },
  ];

  const users = [
    {
      id: 1,
      name: "test1",
      mobile: 7874352236,
      email: "1@gmail.com",
    },
    {
      id: 2,
      name: "test2",
      mobile: 9924590943,
      email: "2@gmail.com",
    },
  ];

  const bookings = [
    {
      id: 1,
      eventId: 1,
      userId: 1,
      noOfTickets: 2,
      totalAmount: 200,
    },
    {
      id: 2,
      eventId: 1,
      userId: 2,
      noOfTickets: 2,
      totalAmount: 200,
    },
  ];

  localStorage.setItem("Events", JSON.stringify(events));
  localStorage.setItem("LoggedInUser", JSON.stringify({}));
  localStorage.setItem("Users", JSON.stringify(users));
  localStorage.setItem("Bookings", JSON.stringify(bookings));

  return null;
};

export default Hoc;
