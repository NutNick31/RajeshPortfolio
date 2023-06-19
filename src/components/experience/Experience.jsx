import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* Frontend Part */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Material Ui</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Part */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Express</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>MY SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* Blockchain Part */}
        <div className="experience__backend">
          <h3>Blockchain Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Solidity</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>EthersJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>MY SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* DevOps Part */}
        <div className="experience__backend">
          <h3>DevOps</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Docker</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Kubernetes</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>Ansible</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"></BsFillPatchCheckFill>
              <div>
                <h4>MY SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
