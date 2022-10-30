import React, { useEffect, useState } from "react";
import weatherPic1 from "./weatherPic1.jpg";
import { FaStreetView } from "react-icons/fa";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d50b62d44387a21d0a46c8f4be982d54`;
      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(response);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box center-screen">
        <div
          className="container"
          style={{
            backgroundImage: `url(${weatherPic1})`,
          }}
        >
          <div className="inputData">
            <input
              type="search"
              value={search}
              className="inputField"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p className="errorMsg">No Data Found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <FaStreetView /> {search}
                </h2>
                <h1 className="temp">{city.temp} °C</h1>
                <h4 className="tempmin-max">
                  Min : {city.temp_min} °C | Max : {city.temp_max} °C
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tempapp;
