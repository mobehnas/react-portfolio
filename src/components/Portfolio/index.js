import React from 'react';

import foodFestivalImage from "../../assets/images/food-festival.png";
import passwordGeneratorImage from "../../assets/images/password-generator.png";
import invoiceTrackerImage from "../../assets/images/invoice-tracker.png";
import weatherDashboardImage from "../../assets/images/weather-dashboard.png";
import techBlogImage from "../../assets/images/tech-blog.png";
import budgetTrackerImage from "../../assets/images/budget-tracker.png";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={foodFestivalImage}
              alt="food festival"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/nbross/food-drink-api-project" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://nbross.github.io/food-drink-api-project" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={passwordGeneratorImage}
              alt="password Generator"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/mobehnas/password-generator" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://mobehnas.github.io/password-generator/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={invoiceTrackerImage}
              alt="invoice Tracker"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/zachburkhart/invoice-tracker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://fast-plains-66827.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={weatherDashboardImage}
              alt="weather Dashboar"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/mobehnas/Weather-Dashboard" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://mobehnas.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={techBlogImage}
              alt="tech Blog"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/mobehnas/mvc-tech-blog" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://blooming-inlet-06267.herokuapp.com/login" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={budgetTrackerImage}
              alt="budget Tracker"
              class="card-img-top"
            />
            <div class="card-body">
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
