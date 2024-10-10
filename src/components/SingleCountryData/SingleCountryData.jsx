import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCountryData = () => {
  const countryData = useLoaderData();
  const { name, capital, flags } = countryData[0];
  return (
    <div>
      <h1 className="my-5 text-3xl">This is single Country data:</h1>
      <div className="my-10 border-2 rounded m-4 w-[500px] p-6 flex flex-col space-y-5">
        <img src={flags.png} alt="" />
        <h1>Name: {name.common}</h1>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
};

export default SingleCountryData;
