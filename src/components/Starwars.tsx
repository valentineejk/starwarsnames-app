import React, { useState } from "react";
import FilmItem from "./FilmItem";

export const Starwars = () => {
  const [ninja, setNinja] = useState({
    name: "",
    height: 0,
    gender: "",
    homeworld: "",
    films: [],
    loadedDetails: false,
  });

  const getNinja = () => {
    const randomChar = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomChar}/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNinja({
          name: data.name,
          height: data.height,
          gender: data.gender,
          homeworld: data.homeworld,
          films: data.films,
          loadedDetails: true,
        });
      });
  };

  const otherMov = ninja.films.map((film: any, i) => {
    return <FilmItem url={film} key={i} />;
    //   return <li>{film}</li>;
  });

  return (
    <div>
      {ninja.loadedDetails && (
        <div>
          <h1>{ninja.name}</h1>
          <div>{ninja.height} cm</div>
          <p>{ninja.gender}</p>
          <p>
            <a href="{ninja.homeworld}">homeworld</a>
          </p>
          <ul>{otherMov}</ul>
        </div>
      )}

      <button onClick={getNinja} type="button" className="btn">
        Random Starwars Character
      </button>
    </div>
  );
};
