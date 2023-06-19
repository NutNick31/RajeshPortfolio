import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Geekommerce.png";
import IMG2 from "../../assets/DreamChat.jpeg";
import IMG3 from "../../assets/PortfolioImage.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/Akatsuki.png";
import IMG6 from "../../assets/SmartAttendanceSystem.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Geekommerce</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/NutNick31/Ecommerce"
              className="btn"
              target="_blank"
            >
              {" "}
              Github
            </a>
            <a
              href="https://kingfisher-polo-shirt.cyclic.app/"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=""></img>
          </div>
          <h3>Dream Chat(Mobile App)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/NutNick31/Code2GiveFrontend" className="btn" target="_blank">
              {" "}
              Frontend Repo
            </a>
            <a
              href="https://github.com/NutNick31/Code2GiveNewServer"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Backend Repo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=""></img>
          </div>
          <h3>Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              {" "}
              Github
            </a>
            <a
              href="https://nutnick.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>Zoomify</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              {" "}
              Github
            </a>
            <a
              href="https://dribble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article> */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt=""></img>
          </div>
          <h3>Akatsuki Web-A-Thon</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sahillede940/web-a-thon-frontend" className="btn" target="_blank">
              {" "}
              Github
            </a>
            <a
              href="https://team-akatsuki.netlify.app/profile"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt=""></img>
          </div>
          <h3>Smart Attendance System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nutnick31/Smart_Attendance_System" className='btn' target='_blank' > Github</a>
          {/* <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank' > Live Demo</a> */}
          </div>  
         </article>
      </div>
    </section>
  );
};

export default Portfolio;
