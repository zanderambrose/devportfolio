import React from "react";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skillsGrid">
        <div className="skillsGridItem">
          <h1>Javascript</h1>
          <SiJavascript size="8rem" color="#F0DB4F" />
        </div>
        <div className="skillsGridItem">
          <h1>Typescript</h1>
          <SiTypescript size="8rem" color="#3178c6" />
        </div>
        <div className="skillsGridItem">
          <h1>Python</h1>
          <DiPython size="8rem" color="#2b5b84" />
        </div>
        <div className="skillsGridItem">
          <h1>Django</h1>
          <SiDjango size="8rem" color="#0C3C26" />
        </div>
        <div className="skillsGridItem">
          <h1>React/NextJs</h1>
          <TbBrandNextjs size="8rem" color="#000000" />
        </div>
        <div className="skillsGridItem">
          <h1>Express</h1>
          <SiExpress size="8rem" color="#000000" />
        </div>
        <div className="skillsGridItem">
          <h1>Node JS</h1>
          <FaNodeJs size="8rem" color="#3c873a" />
        </div>
        <div className="skillsGridItem">
          <h1>Docker</h1>
          <FaDocker size="8rem" color="#0073ec" />
        </div>
        <div className="skillsGridItem">
          <h1>Nginx</h1>
          <SiNginx size="8rem" color="#009639" />
        </div>
        <div className="skillsGridItem">
          <h1>Postgresql</h1>
          <SiPostgresql size="8rem" color="#336791" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
