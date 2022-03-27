import React, { useState } from "react";
import "../App.css";
import Master from "./Master";

const OldRepublic = () => {
  const [jedi, setJedi] = useState({
    name: "",
    height: 0,
    gender: "",
    homeworld: "",
    image: "",
    wiki: "",
    species: "",
    diedLocation: "",
    loadedDetails: false,
    // masters: [],
  });

  //   const masters = jedi.masters.map((knight: string, i) => {
  //     return <Master master={knight} key={i} />;
  //   });

  const getJedi = () => {
    const randomChar = Math.round(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomChar}.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJedi({
          name: data.name,
          height: data.height,
          gender: data.gender,
          homeworld: data.homeworld,
          image: data.image,
          wiki: data.wiki,
          species: data.species,
          diedLocation: data.diedLocation,
          loadedDetails: true,
          //   masters: data.masters,
        });
      });
  };

  return (
    <div>
      <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
          {jedi.loadedDetails && (
            <div className="object-center">
              <img
                className="h-50 object-cover rounded-xl "
                src={jedi.image}
                alt="starwars"
              />

              <div className="p-2 ">
                <h2 className="font-bold text-lg mb-2 text-center">
                  {jedi.name}
                </h2>

                <div className="p-2 text-center">
                  <p className="text-sm text-gray-600">
                    height: {jedi.height} m
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    gender: {jedi.gender}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    species: {jedi.species}
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    place of death: {jedi.diedLocation}
                  </p>
                  {/* 
                  <ul className="text-sm text-gray-600 text-center">
                    Masters: {masters}
                  </ul> */}
                  <p className="text-sm text-blue-600 text-center">
                    <a href={jedi.wiki}>wiki</a>
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="m-2 flex justify-center items-center">
            <button
              onClick={getJedi}
              type="button"
              className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Use The Force
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldRepublic;
