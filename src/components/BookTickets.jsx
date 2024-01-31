import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const BookTickets = () => {
  const [showName, setShowName] = useState("");
  const [language, setLanguage] = useState("");
  const [noOfTickets, setNoOfTickets] = useState(1);
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "Ticket",
      JSON.stringify({
        showName: showName,
        language: language,
        time: time,
        day: day,
        noOfTickets: noOfTickets,
      })
    );

    setBooked(true);
  };

  useEffect(() => {
    const ticket = JSON.parse(localStorage.getItem("BookTicket"));
    setShowName(ticket.showName);
    setDay(ticket.day);
    setLanguage(ticket.language);
    setTime(ticket.time);
  }, []);

  return (
    <div className="login">
      <h1 className="headerLogin">QuadB Ticket Bookings</h1>
      <form className="loginContainer " onSubmit={(e) => handleSubmit(e)}>
        <label for="showName">Show Name:</label>
        <input
          className="login-button"
          id="showName"
          type="text"
          value={showName}
        />
        <label for="language">Language :</label>
        <input
          className="login-button"
          id="language"
          type="language"
          value={language}
        />
        <label for="noOfTickets">NO. Of Tickets :</label>
        <input
          className="login-button"
          id="noOfTickets"
          type="text"
          value={noOfTickets}
          onChange={(e) => setNoOfTickets(e.target.value)}
        />
        <h3>{`Time : ${time}`}</h3>
        <h3>{`Day : ${day}`}</h3>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Book Tickets
        </Button>
      </form>
      {booked && (
        <Button variant="danger">{`${noOfTickets} Tickets Booked`}</Button>
      )}
    </div>
  );
};

export default BookTickets;
