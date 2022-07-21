import React from 'react';

import foodFestivalImage from "../../assets/images/food-festival.png";
import passwordGeneratorImage from "../../assets/images/password-generator.png";
import invoiceTrackerImage from "../../assets/images/invoice-tracker.png";
import weatherDashboardImage from "../../assets/images/weather-dashboard.png";
import techBlogImage from "../../assets/images/tech-blog.png";
import budgetTrackerImage from "../../assets/images/budget-tracker.png";

const portfolioPages = [
  {
      name: 'Food Festival ',
      image: foodFestivalImage,
      github: "https://github.com/nbross/food-drink-api-project",
      deployed: "https://nbross.github.io/food-drink-api-project"
  },
  { 
      name: 'Password Generator', 
      image: passwordGeneratorImage,
      github: "https://github.com/mobehnas/password-generator",
      deployed: "https://mobehnas.github.io/password-generator/"
  }
  ,
  { 
      name: 'Invoice tracker', 
      image: invoiceTrackerImage,
      github: "https://github.com/zachburkhart/invoice-tracker",
      deployed: "https://fast-plains-66827.herokuapp.com/"
  },
  { 
      name: 'Weather Dashboard', 
      image: weatherDashboardImage,
      github: "https://github.com/mobehnas/Weather-Dashboard",
      deployed: "https://mobehnas.github.io/Weather-Dashboard/"
  },
  { 
      name: 'tech Blog', 
      image: techBlogImage,
      github: "https://github.com/mobehnas/mvc-tech-blog",
      deployed: " https://blooming-inlet-06267.herokuapp.com/login"
  },
  { 
      name: 'budget Tracker', 
      image: budgetTrackerImage,
      github: "https://github.com/mobehnas/Progressive-Web-Applications-PWA--Budget-Tracker",
      deployed: "https://mobehnas.github.io/Progressive-Web-Applications-PWA--Budget-Tracker/"
  },
];

function Project() {


  return (
    
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="portfolio-box">
            {portfolioPages.map((portfolioPage) => (
                <div className="portfolio-image">
                    <img src={portfolioPage.image} alt="Portfolio item preview screencap." />
                    <p className="header-format"><strong>{portfolioPage.name}</strong></p>
                    <a className="header-format" href={portfolioPage.github} target="_blank">Github Link!</a>
                    <a className="header-format" href={portfolioPage.deployed} target="_blank">Deployed Link!</a>
                    <hr></hr>
                </div>
            ))}
        </div>
        </div>
  )
};

export default Project;