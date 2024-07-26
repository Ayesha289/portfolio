import React from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ayesha
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A computer science engineering graduate with a passion for web
          development, proficient in front-end and back-end technologies,
          skilful at creating dynamic and user-friendly web applications through
          a combination of strong coding skills and a keen understanding of user
          experience principles.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Learnings</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Here's the rundown of my training, experiences and the learnings
            I've gained so far:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.title}
                date={experience.title}
                icon={
                  <div className="flex justify-center items-center">
                    <img
                      src={experience.icon}
                      className="w-[70%] h-[70%] object-contain py-2"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h5 className="text-black text-xl font-poppins font-semibold">
                    {experience.subtitle1}
                  </h5>
                </div>
                <div className="my-5 ml-5 space-y-2">
                  {experience.subinfo1.map((point, index) => (
                    <p
                      key={`experience-point-${index}`}
                      className="text-black-500 font-normal pl-1 text-sm"
                    >
                      {point}
                    </p>
                  ))}
                </div>
                <div>
                  <h5 className="text-black text-xl font-poppins font-semibold">
                    {experience.subtitle2}
                  </h5>
                </div>
                <div className="my-5 ml-5 space-y-2">
                  {experience.subinfo2.map((point, index) => (
                    <p
                      key={`experience-point-${index}`}
                      className="text-black-500 font-normal pl-1 text-sm"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
