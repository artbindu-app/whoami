import React from 'react';
import { useWorkExperience } from '../../hooks/useStats';
import config from '../../config/config';

const About = () => {
  const workExp = useWorkExperience(config.personalInfo.joinDate);

  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p className="text-justify">
                  {config.aboutContent.intro.replace('{workExp}', workExp)}
                </p>
                <p className="text-justify">
                  {config.aboutContent.education}
                </p>
                <p className="text-justify">
                  {config.aboutContent.specialization}<br />
                  Actively contributing to the developer community on{' '}
                  <a 
                    href={config.socialLinks.stackoverflow} 
                    target="_blank" 
                    rel="noopener noreferrer tooltip"
                  >
                    <img 
                      src="https://stackoverflow.com/Content/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196" 
                      width="15px" 
                      alt="StackOverflow"
                    />
                    StackOverflow
                  </a>.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                  <div className="col-sm-8">{config.personalInfo.email}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                  <div className="col-sm-8">{config.personalInfo.location}</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4"><strong className="text-uppercase">Language:</strong></div>
                  <div className="col-sm-8">
                    {config.personalInfo.languages.map((lang, index) => (
                      <span key={lang.name}>
                        <span title={lang.proficiency}>{lang.name}</span>
                        {index < config.personalInfo.languages.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
