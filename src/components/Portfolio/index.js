import React from 'react';

import foodFestivalImage from "../../assets/images/food-festival.png";
import passwordGeneratorImage from "../../assets/images/password-generator.png";
import invoiceTrackerImage from "../../assets/images/invoice-tracker.png";
import weatherDashboardImage from "../../assets/images/weather-dashboard.png";
import techBlogImage from "../../assets/images/tech-blog.png";
import budgetTrackerImage from "../../assets/images/budget-tracker.png";

function Portfolio() {
  return (
    <section className="portfolio">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src={foodFestivalImage}
              alt="food festival"
              className="card-img-top"
            />
            <div className="card-body">

              <a href="https://github.com/nbross/food-drink-api-project" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://nbross.github.io/food-drink-api-project" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card">
            <img
              src={passwordGeneratorImage}
              alt="password Generator"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/mobehnas/password-generator" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://mobehnas.github.io/password-generator/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={invoiceTrackerImage}
              alt="invoice Tracker"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/zachburkhart/invoice-tracker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://fast-plains-66827.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div className="col">
          <div className="card">
            <img
              src={weatherDashboardImage}
              alt="weather Dashboar"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/mobehnas/Weather-Dashboard" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://mobehnas.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={techBlogImage}
              alt="tech Blog"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/mobehnas/mvc-tech-blog" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://blooming-inlet-06267.herokuapp.com/login" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src={budgetTrackerImage}
              alt="budget Tracker"
              className="card-img-top"
            />
            <div className="card-body">
              <a href="https://github.com/mobehnas/Progressive-Web-Applications-PWA--Budget-Tracker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://mobehnas.github.io/Progressive-Web-Applications-PWA--Budget-Tracker/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
