import React from 'react';
import { useSocialStats } from '../../hooks/useStats';
import config from '../../config/config';

const Profile = () => {
  const { stackOverflowRep, mediumBlogCount } = useSocialStats();

  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div 
            className="page-header-image" 
            data-parallax="true"
            style={{ backgroundImage: `url('${config.profile.backgroundImage}')` }}
          ></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="#top">
                  <img src={config.profile.image} alt="Profile" />
                </a>
              </div>
              <div className="h2 title" id="header_name">{config.personalInfo.name}</div>
              <p className="category text-white" id="header_info">
                {config.personalInfo.title}
              </p>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a 
                  className="btn btn-default btn-round btn-lg btn-icon cc-stackoverflow cc-stackoverflow-bg"
                  href={config.socialLinks.stackoverflow} 
                  target="_blank" 
                  rel="noopener noreferrer tooltip"
                  title="Follow me on StackOverflow" 
                  style={{ position: 'relative', overflow: 'visible' }}
                >
                  <i className="fa fa-stack-overflow"></i>
                  {stackOverflowRep && (
                    <span className="badge badge-success" style={{ zIndex: 0, top: '52px' }}>
                      {stackOverflowRep}
                    </span>
                  )}
                </a>
                <a 
                  className="btn btn-default btn-round btn-lg btn-icon cc-medium cc-medium-bg p-0" 
                  href={config.socialLinks.medium}
                  target="_blank" 
                  rel="noopener noreferrer tooltip"
                  title="Follow me on Medium" 
                  style={{ position: 'relative', overflow: 'visible' }}
                >
                  <i className="fa fa-medium"></i>
                  {mediumBlogCount && (
                    <span className="badge badge-warning" style={{ zIndex: 0, top: '52px' }}>
                      {mediumBlogCount}
                    </span>
                  )}
                </a>
                <a 
                  className="btn btn-default btn-round btn-lg btn-icon cc-github cc-github-bg" 
                  href={config.socialLinks.github}
                  target="_blank" 
                  rel="noopener noreferrer tooltip"
                  title="Follow me on Github"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a 
                  className="btn btn-default btn-round btn-lg btn-icon cc-linkedin cc-linkedin-bg"
                  href={config.socialLinks.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer tooltip"
                  title="Follow me on Linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a 
                  className="btn btn-default btn-round btn-lg btn-icon cc-skype cc-skype-bg" 
                  href={config.socialLinks.skype}
                  target="_blank" 
                  rel="noopener noreferrer tooltip"
                  title="Message me on Skype"
                >
                  <i className="fa fa-skype"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
