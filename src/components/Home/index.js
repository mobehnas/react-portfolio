import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home my-5">
      <div className="title">
    
        <p>Welcome to my Student Portfolio!</p>
        <Link to="portfolio">
          <button>Click here to view my projects</button>
        </Link>
      </div>
         </section>
  );
}

export default Home;
