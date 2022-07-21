import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../../assets/images/profile-pic.jpg";


function Home() {
  return (
    <section className="home my-5">
      <div className="title">
    
        <p>Welcome to my Portfolio!</p>
        <Link to="portfolio">
          <button>Click here to view my projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
        </div>
         </section>
  );
}

export default Home;
