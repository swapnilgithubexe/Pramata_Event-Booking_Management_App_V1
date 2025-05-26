import React from "react";
import "./events.css";

const Events = () => {
  const demoEventData = [
    {
      _id: "664fe3d2bcf1e6a8c1234567",
      title: "React Summit 2025",
      description: "Join top developers for an in-depth React workshop.",
      eventImage:
        "https://www.partyboysdjshow.com/wp-content/uploads/2017/07/school-dance-with-upgraded-lighting-package-by-knoxville-party-boys-dj-show-1024x576.jpg",
      date: "2025-07-20T10:00:00.000Z",
      location: "Bangalore, India",
      maxAttendees: 150,
      category: "Tech",
      organizer: "663aaa12b1c34f9991abc123",
      availableSeats: 120,
    },
    {
      _id: "664fe3d2bcf1e6a8c1234568",
      title: "EDM Night Blast",
      description: "Feel the beats with top DJs from around the world.",
      eventImage:
        "https://www.partyboysdjshow.com/wp-content/uploads/2017/07/christian-academy-of-knoxville-winter-formal-with-full-dance-floor-and-lighting-1024x768.jpg",
      date: "2025-08-05T21:00:00.000Z",
      location: "Mumbai, India",
      maxAttendees: 500,
      category: "Party",
      organizer: "663aaa12b1c34f9991abc124",
      availableSeats: 350,
    },
    {
      _id: "664fe3d2bcf1e6a8c1234569",
      title: "Startup Growth Workshop",
      description: "Strategies and tools for scaling your startup fast.",
      eventImage:
        "https://www.partyboysdjshow.com/wp-content/uploads/2017/07/party-boys-dj-show-at-team-heath-corporate-picnic-1024x617.jpg",
      date: "2025-06-15T09:00:00.000Z",
      location: "Delhi, India",
      maxAttendees: 100,
      category: "Ed Workshop",
      organizer: "663aaa12b1c34f9991abc125",
      availableSeats: 65,
    },
    {
      _id: "664fe3d2bcf1e6a8c1234570",
      title: "Classical Music Evening",
      description: "Enjoy a soul-soothing evening of Indian classical music.",
      eventImage: "https://via.placeholder.com/400x200?text=Classical+Music",
      date: "2025-09-10T18:30:00.000Z",
      location: "Pune, India",
      maxAttendees: 200,
      category: "Music",
      organizer: "663aaa12b1c34f9991abc126",
      availableSeats: 180,
    },
    {
      _id: "664fe3d2bcf1e6a8c1234571",
      title: "College Freshers Night",
      description: "Welcome the new batch with games, food, and music.",
      eventImage: "https://via.placeholder.com/400x200?text=Freshers+Night",
      date: "2025-07-01T19:00:00.000Z",
      location: "Chennai, India",
      maxAttendees: 300,
      category: "Party",
      organizer: "663aaa12b1c34f9991abc127",
      availableSeats: 275,
    },
  ];

  return (
    <section className="events">
      <h2>Upcoming events</h2>
      <div className="event-cards">
        {demoEventData.map((e, idx) => (
          <div className="event-card" key={e.idx}>
            <div className="event-img">
              <img src={e.eventImage} alt="" />
            </div>
            <h4>{e.title}</h4>
            <p>Date: {e.date}</p>
            <p>Location: {e.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
