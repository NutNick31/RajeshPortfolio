import React from "react";
import "./about.css";
import ME from "../../assets/BeMyPhoto.jpeg";
import { FaAward } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me ">
          <div className="about__me-image">
            <img src={ME}></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>
            <article className="about__card">
              <GiChampions className="about__icon"></GiChampions>
              <h5>clients</h5>
              <small>10+ worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon"></AiOutlineProject>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>

          <p>
            I am Rajesh Kumar Singh, a pre-final year, undergraduate student at
            Indian Institute of Technology Kharagpur. I am a very passionate web
            developer and I love learning about new technology. I am a software
            developer with expertise in React, Node.js, Express, MongoDB, React
            Native, machine learning, Python, C++, and Go Lang. I'm passionate
            about leveraging these technologies to create innovative and
            efficient solutions. I constantly strive to expand my knowledge by
            staying updated with the latest advancements in the field. I believe
            that keeping up with emerging technologies is essential to stay
            ahead in the rapidly evolving world of software development. I'm
            always excited to take on new challenges and learn new tools to
            improve my craft. Looking forward to collaborating and contributing
            to cutting-edge projects! My hobbies are playing chess, football,
            playing guitar and learning about stock market.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
