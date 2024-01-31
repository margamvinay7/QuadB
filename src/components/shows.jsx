import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Shows = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getShow = async () => {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setData(response?.data);
      console.log(" shows ", response.data[0]);
    };

    getShow();
  }, []);

  return (
    <>
      <h1 className="head">QuadB Shows</h1>

      <div className="showContainer">
        <>
          {data.map((item) => (
            <Link to={`/summary/${item.show.id}`}>
              <div className="shows">
                <img
                  src={item.show.image?.original}
                  className="image-custom"
                  alt={item.image?.name}
                />
                <h2 className="showDetails">{item.show?.name}</h2>
                <h4 className="showDetails">{item.show?.language}</h4>
                <h4 className="showDetails">{item.show?.rating?.average}</h4>
                <Button variant="primary" type="submit">
                  <Link to={`/summary/${item.show.id}`} className="Link">
                    {" "}
                    View Summary
                  </Link>
                </Button>
              </div>
            </Link>
          ))}
        </>
      </div>
    </>
  );
};

export default Shows;
