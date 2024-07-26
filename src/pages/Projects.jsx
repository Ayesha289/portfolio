import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "./../components/CTA";
import { socialLinks } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout my graduation, but these
          are the ones I hold closest to my heart.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  View Code
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Socials
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Here are my socials and feel free to connect with me!
        </p>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {socialLinks.map((social) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.iconUrl}
                  alt={social.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
