import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/auth";
import Shows from "./components/shows";
import ShowSummary from "./components/showSummary";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import BookTickets from "./components/BookTickets";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user"))?.username;
    if (username) {
      setUser(true);
    }
  }, []);
  return (
    <>
      {!user && <Auth />}
      <Routes>
        <Route path="/shows" element={<Shows />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
        <Route path="/book" element={<BookTickets />} />
      </Routes>
    </>
  );
}

export default App;
