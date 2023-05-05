import React from "react";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {username} Is A Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;