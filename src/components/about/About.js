import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile2.jpg";
import Resume from "../../assets/resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      {/* <span className="section__subtitle">My introduction</span> */}
      <div className="about__container container grid">
        {/* <img src={AboutImg} alt="" className="about__img" /> */}
        <div className="about__data">
          {/* <Info /> */}
          <p className="about__description">
            Enterprising, self-motivated and teachable technology professional
            keen on leveraging software engineering skills to build, maintain,
            and distribute computer software. Eager to contribute to team
            success through hard work, attention to detail, excellent
            organizational skills, and a positive attitude. Versatile
            problem-solver with a curious mind that is driven to innovate and
            solve customer problems.
          </p>
          <a download="" href={Resume} className="button button--flex">
            Download Resume <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
