import React from 'react';
import config from '../../config/config';
import './Education.css';

const Education = () => {
  const educations = config.educations;

  return (
    <div className="section" id="education">
      <div className="container cc-education">
        <div className="h4 text-center mb-4 title">Education</div>
        {educations.map((edu, index) => (
          <div key={index} className="card" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
              <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-education-header">
                  <p>{edu.duration}</p>
                  <div className="h5">{edu.degree}</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">{edu.institution}</div>
                  <p className="category">
                    Percentage: {edu.percentage}
                    {edu.cgpa && ` | CGPA: ${edu.cgpa}`}
                  </p>
                  <p className="text-muted">Subjects: {edu.subjects}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
