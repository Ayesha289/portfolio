import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
      {/* <div className="flex justify-center items-center">
        {socialLinks.map((links) => {
          <img
            src={links.iconUrl}
            alt={links.name}
            className="w-[70%] h-[70%] object-contain py-2"
          />;
        })}
      </div> */}
    </section>
  );
};

export default CTA;
