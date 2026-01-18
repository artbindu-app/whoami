import React from 'react';
import config from '../../config/config';
import './Experience.css';

const Experience = () => {
  const experiences = config.experiences;

  return (
    <div className="section" id="experience">
      <div className="container cc-experience">
        <div className="h4 text-center mb-4 title">Work Experience</div>
        {experiences.map((exp, index) => (
          <div key={index} className="card" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-experience-header">
                  <p>{exp.duration}</p>
                  <div className="h5">{exp.company}</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">{exp.role}</div>
                  <p className="text-justify">{exp.description}</p>
                  <div className="mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="badge badge-primary mr-1 mb-1">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
