import React from "react";
import { Link } from "react-router-dom";

const Conuntry = ({ country }) => {
  const { cca2, flags, population, name } = country;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={flags?.png ? flags?.png : "Data Not Found"}
          alt
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name: {name?.common ? name.common : "Data Not Found"}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Population: {population ? population : "Data Not Found"}
        </p>
        <Link to={`/country/${cca2}`}>
          <button className="px-3 py-2 bg-blue-500 text-white rounded">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Conuntry;
