import React, { useState } from 'react';
import config from '../../config/config';
import './Portfolio.css';

const Portfolio = () => {
  const { categories, blogs, certificates } = config.portfolio;
  const [activeTab, setActiveTab] = useState('blogs');

  return (
    <div className="section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">Portfolio</div>
            <div className="nav-align-center">
              <ul className="nav nav-pills nav-pills-primary" role="tablist">
                {categories.map((category) => (
                  <li key={category.id} className="nav-item">
                    <button
                      className={`nav-link portfolio-tab-button ${activeTab === category.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(category.id)}
                      role="tab"
                      aria-label={category.tooltip}
                      title={category.tooltip}
                    >
                      <i className={category.icon} aria-hidden="true"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content gallery mt-5">
          {/* Blogs Tab */}
          <div className={`tab-pane ${activeTab === 'blogs' ? 'active' : ''}`} id="blogs" role="tabpanel">
            <div className="ml-auto mr-auto">
              <div className="row">
                {blogs.map((blog, index) => (
                  <div key={index} className="col-md-4">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                      <a href={blog.url} target="_blank" rel="noopener noreferrer">
                        <figure className="cc-effect blog-article">
                          <img className="img-fluid rounded" src={blog.image} alt={blog.title} />
                          <figcaption>
                            <div className="h4 mt-5">{blog.title}</div>
                            <p>
                              <img className="d-inline mr-1" src={blog.icon} alt="icon" width={blog.iconWidth} />
                              {blog.category}
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates Tab */}
          <div className={`tab-pane ${activeTab === 'certificate' ? 'active' : ''}`} id="certificate" role="tabpanel">
            <div className="ml-auto mr-auto">
              <div className="row">
                {certificates.map((cert, index) => (
                  <div key={index} className="col-md-3">
                    <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        <figure className="cc-effect">
                          <img className="fit-user-cert" src={cert.image} alt={cert.title} />
                          <figcaption>
                            <div className="h4 d-inline-flex mt-5">
                              <img className="d-inline" src={cert.providerIcon} alt="icon" width={cert.iconWidth} />
                              {cert.provider}
                            </div>
                            <p>{cert.title}</p>
                            {cert.rating && <p>{cert.rating}</p>}
                          </figcaption>
                        </figure>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
