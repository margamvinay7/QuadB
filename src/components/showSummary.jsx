import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DynamicHTML from "./DynamicHtml";

const ShowSummary = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const getShow = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setData(response?.data);
      console.log(
        " shows ",
        response,
        data?.schedule?.time,
        data?.schedule?.days[0]
      );
      setHtmlContent(data?.summary);

      localStorage.setItem(
        "BookTicket",
        JSON.stringify({
          showName: data?.name,
          language: data?.language,
          time: data?.schedule?.time,
          day: data?.schedule?.days[0],
        })
      );
    };

    getShow();
  }, []);

  return (
    <>
      <h1 className="head">QuadB Shows</h1>

      <div className="showContainers">
        <>
          <div className="showss">
            <img
              src={data.image?.original}
              className="image-customs"
              alt={data.image?.name}
            />
            <h2 className="showDetails">{data?.name}</h2>
            <h4 className="showDetails">{data?.language}</h4>
            <h4 className="showDetails">{data?.rating?.average}</h4>

            <DynamicHTML htmlContent={htmlContent} />
            <Button variant="primary" type="submit">
              <Link to={`/book`} className="Link">
                Book Tickets
              </Link>
            </Button>
          </div>
        </>
      </div>
    </>
  );
};

export default ShowSummary;
