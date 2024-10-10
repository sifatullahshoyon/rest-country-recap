import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/country">
        <p>Going To Country Page</p>
      </Link>
    </div>
  );
};

export default Home;
